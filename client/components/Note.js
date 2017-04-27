import React from 'react'
import { observer } from 'mobx-react'

@observer
class Home extends React.Component {
  render () {
    const note = this.props.note
    function toggleComplete () {
      note.completed = !note.completed
    }
    return (
      <li className={note.completed ? 'complete' : null}>
        {note.text}
        <input type='checkbox' checked={note.completed} onChange={toggleComplete} />
      </li>
    )
  }
}

export default Home
