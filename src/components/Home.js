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

  const [avatar, setAvatar] = useState("")
  const avatarUrl = `https://api.github.com/users/${userName}`

  useEffect(() => {
    if (typeof userName !== "undefined") {
      axios(url).then((it) => {
        setRepoList(it.data.map((item) => item.name));
      });
      axios(avatarUrl).then((response) => {
        setAvatar(response.data.avatar_url)
      });
    }
  }, [url, userName, avatarUrl]);

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
      <Header avatar={avatar}/>
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/:userName" component={() => <List repoList={repoList} />} />
          <Route exact path="/:userName/:repositoryName" component={() => <Readme readme={readme} />} />
        </Switch>

    </div>
  );
}

export default Home