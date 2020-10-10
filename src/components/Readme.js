import React from 'react'
import ReactMarkdown from 'react-markdown'


const Readme = ({ readme }) => {
  return (
    <div style={{"margin": 20}}>
      <ReactMarkdown source={readme} />
    </div>
  )
}

export default Readme