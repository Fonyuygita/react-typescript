import React from 'react'

const Parent = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
<h1>I am the parent of the two children</h1>
{children}
    </div>
  )
}

export default Parent