import { observable, computed, autorun } from 'mobx'

class store {
    @observable notes = [{text: 'Learn Mobx', completed: false, editing: false}]

    constructor() {
      autorun(() => console.log(this.report))
    }

    @computed get remaining() {
      return (this.notes.filter(note => {
        return !note.completed
      })).length
    }

    @computed get report() {
      return `${this.remaining} out of ${this.notes.length} tasks remaining`
    }

    addNote(text) {
      this.notes.push({
        text: text,
        completed: false,
        editing: false
      })
    }
}

export default new store()
