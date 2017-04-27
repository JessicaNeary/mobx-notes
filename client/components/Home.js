import React from 'react'
import { observer, inject } from 'mobx-react'

import Note from './Note'

@inject('store') @observer
class Home extends React.Component {
  render () {
    const list = this.props.store.notes.map((note, index) => {
      return (
        <Note key={index} note={note} />
      )
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
