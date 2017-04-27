import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('store') @observer
class Home extends React.Component {
  render () {
    const list = this.props.store.notes.map((note, index) => {
      return <li key={index} className={note.completed ? 'complete' : null}>{note.text}</li>
    })
    return (
      <div>
        <h3>Today's Tasks</h3>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Home
