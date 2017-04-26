import { observable, computed, autorun } from 'mobx'

class AppStore {
    @observable notes = []

    constructor() {
      this.notes.push({text: 'Learn Mobx', completed: false})
      autorun(() => console.log(this.report))
    }

    @computed get remaining() {
      return (this.notes.filter(note => {
        return !note.completed
      })).length()
    }

    @computed get report() {
      return '${this.remaining} out of ${this.notes.length} tasks remaining'
    }

    addNote(text) {
      this.notes.push({
        text: text,
        completed: false
      })
    }
}

const store = new AppStore()
export default store
