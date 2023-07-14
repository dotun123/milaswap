import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const Loading = () => {
  return (
    <div style={{
      // do your styles depending on your needs.
    margin:"14px 65px",
      
 
     
    }}>
      <CircularProgress isIndeterminate color='pink.200' />
    </div>
  )
}

export default Loading;
