import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { NotFound } from '../NotFound/NotFound'
import { Loader } from '../Loader/Loader'

export const List = ({ repoList, loading }) => {
  const { userName } = useParams();

  if (loading) {
    return (<Loader />)
  } else {
    if (!repoList) {
    return (<NotFound />)
    }
  }

  return (
    <div>
      <div className="collection center">
        {repoList.map((repo) => (<div key={repo} className="collection-item">
            <Link to={`/${userName}/${repo}`} >{repo}</Link>
          </div>
          ))}
      </div>
    </div>
  )
}
