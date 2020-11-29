import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route, Switch, useParams } from 'react-router-dom'

import Main from './Main'
import List from "./List"
import ReadmePage from "./ReadmePage"
import Header from './Header'
import NotFound from './NotFound'

const Home = () => {
  const { userName, repositoryName } = useParams()

  const [repoList, setRepoList] = useState([])
  const url = `https://api.github.com/users/${userName}/repos`

  const [avatar, setAvatar] = useState("")
  const avatarUrl = `https://api.github.com/users/${userName}`

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof userName !== "undefined") {
      const fetchData = async() => {
        setLoading(true)
        try {
          await axios(url).then((it) => setRepoList(it.data.map((item) => item.name)))
          await axios(avatarUrl).then((response) => setAvatar(response.data.avatar_url))
        } catch(e) {
          console.log(e)
        }
        setLoading(false)
      }
    fetchData()
   }
  }, [url, userName, avatarUrl]);

  const [readme, setReadme] = useState('')
  const readmeUrl = `https://api.github.com/repos/${userName}/${repositoryName}/readme`

  useEffect(() => {
    if (typeof userName !== "undefined" && typeof repositoryName !== "undefined") {
      const fetchData = async() => {
        setLoading(true)
        try {
          await axios(readmeUrl).then(({ data }) => axios(data.download_url).then(({ data: text }) => setReadme(text)))
        } catch(e) {
          setReadme(e.message)
        }
        setLoading(false)
      }
    fetchData()

  }
  }, [repositoryName, userName, readmeUrl])



  return (
    <div>
      <Header avatar={avatar}/>
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/:userName" component={() => <List repoList={repoList} loading={loading}/>} />
          <Route exact path="/:userName/:repositoryName" component={() => <ReadmePage readme={readme} loading={loading} />} />
          <Route exact path="*" component={() => <NotFound />} />
        </Switch>

    </div>
  );
}

export default Home