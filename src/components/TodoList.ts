import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {
  activedIndex = -1
  users = []

  add () {
    console.log('Add button clicked!!!')
  }

  delUser (index) {
    this.users.splice(index, 1)
  }

  getItemStyle (index) {
    const style = { borderBottom: '', backgroundColor: '' }
    if (index !== this.users.length - 1) {
      style.borderBottom = '1px solid black'
    }
    if (index === this.activedIndex) {
      style.backgroundColor = 'grey'
    }
    return style
  }

  getUsers () {
    const users = [{
      name: '小李',
      sex: '男',
      age: 16,
      height: 150,
      weight: 55,
      msg: 'haha'
    }]
    Vue.prototype.$http.get('/users').then(function (response) {
      console.log(response)
    }).catch(() => {
      this.users = users
    })
  }

  created () {
    console.log('------created------')
    this.getUsers()
  }

  mounted () {
    console.log('------mounted------')
  }

  updated () {
    console.log('------updated------')
  }

  destroyed () {
    console.log('------destroyed------')
  }
}
