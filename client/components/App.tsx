import * as React from "react"; 
import DevTools from 'mobx-react-devtools'

interface note { text: string, completed: boolean, editing: boolean }
interface AppProps { notes: note[], children?: any }

const App = (props: AppProps) => {
  return (
    <div>
      <h1>Title</h1>
      {props.children}
      <DevTools />
    </div>
  )
}

export default App
