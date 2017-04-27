import React from 'react'
import { observer, inject } from 'mobx-react'

import Note from './Note'
import Edit from './Edit'

@inject('store') @observer
class Home extends React.Component {
  addNew (e) {
    if(e.key === 'Enter') {
      this.props.store.addNote(e.target.value)
    }
  }
  render () {
    const list = this.props.store.notes.map((note, index) => {
      return (
        note.editing
        ? <Edit key={index} note={note} />
        : <Note key={index} note={note} />
      )
    })
    return (
      <div>
        <h3>Today's Tasks</h3>
        <ul>
          {list}
        </ul>
        <div>
          Add new:
          <input onKeyUp={(event) => this.addNew(event)} />
        </div>
      </div>
    )
  }
}

export default Home
