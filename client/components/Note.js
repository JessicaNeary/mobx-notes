import React from 'react'

class Home extends React.Component {
  render () {
    const note = this.props.note
    function toggleComplete () {
      note.completed = !note.completed
    }
    function edit () {
      note.editing = true
    }
    return (
      <li onDoubleClick={edit} className={note.completed ? 'complete' : null}>
        {note.text}
        <input type='checkbox' checked={note.completed} onChange={toggleComplete} />
      </li>
    )
  }
}

export default Home
