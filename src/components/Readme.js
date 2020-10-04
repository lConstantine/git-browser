import React from 'react'
import ReactMarkdown from 'react-markdown'


const Readme = ({ readme }) => {
  return (
    <div>
      <ReactMarkdown source={readme} />
    </div>
  )
}

export default Readme