import React from 'react'
import ReactMarkdown from 'react-markdown'
import NotFound from './NotFound'
import Loader from './Loader'


const ReadmePage = ({ readme, loading }) => {
 /* console.log('loading', loading)
  console.log('readme:', readme, typeof readme) */
  if (loading) {
    return (<Loader />)
  }
   /* if (!readme) {
    return (<NotFound />)
    }*/


  return (
    <div style={{"margin": 20}}>
      <ReactMarkdown source={readme} />
    </div>
  )
}

export default ReadmePage