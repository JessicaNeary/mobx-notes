import React from 'react'

class Edit extends React.Component {
  render () {
    const note = this.props.note
    function handleKey (e) {
      if (e.key === 'Enter') sendEdit(e)
    }
    function sendEdit (e) {
      note.editing = false
      note.text = e.target.value
    }
    return (
      <input type='text' defaultValue={note.text} onKeyUp={event => handleKey(event)} onMouseLeave={event => sendEdit(event)} />
    )
  }
}

export default Edit
