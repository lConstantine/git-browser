import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Switch, useParams } from 'react-router-dom'

import Main from './Main'
import List from "./List"
import Readme from "./Readme"
import Header from './Header'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repoList, setRepoList] = useState([])
  const url = `https://api.github.com/users/${userName}/repos`

  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios(url).then((it) => {
        setRepoList(it.data.map((item) => item.name));
      })
    }
  }, [url, userName])

  const [readme, setReadme] = useState('')
  const readmeUrl = `https://api.github.com/repos/${userName}/${repositoryName}/readme`

  useEffect(() => {
    if (
      typeof userName !== "undefined" &&
      typeof repositoryName !== "undefined"
    ) {
      axios(readmeUrl).then(({ data }) => {
        axios(data.download_url).then(({ data: text }) => {
          setReadme(text);
        });
      });
    }
  }, [repositoryName, userName, readmeUrl])



  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/git-browser/" component={() => <Main />} />
          <Route exact path="/git-browser/:userName" component={() => <List repoList={repoList} />} />
          <Route exact path="/git-browser/:userName/:repositoryName" component={() => <Readme readme={readme} />} />
        </Switch>

    </div>
  );
}

export default Home