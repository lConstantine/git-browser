import React from 'react'
import ReactMarkdown from 'react-markdown'
import { NotFound } from '../NotFound/NotFound'
import { Loader } from '../Loader/Loader'


export const ReadmePage = ({ readme, loading }) => {

  if (loading) {
    return (<Loader />)
  }

  return (
    <div style={{"margin": 20}}>
      <ReactMarkdown source={readme} />
    </div>
  )
}
