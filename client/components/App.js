import React from 'react'
import DevTools from 'mobx-react-devtools'

const App = props => {
  return (
    <div>
      <h1>Title</h1>
      {props.children}
      <DevTools />
    </div>
  )
}

export default App
