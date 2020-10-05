import React from 'react'
import { useParams, Link } from 'react-router-dom'

const List = ({ repoList }) => {
  const { userName } = useParams();

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

export default List