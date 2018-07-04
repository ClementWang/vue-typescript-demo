<template>
  <div class="list-container">
    <div class="title-row">
      <h3 class="title">User List</h3>
      <input type="button" value="Add" @click="add"/>
    </div>
    <ul>
      <li v-for="(user, index) in users" :key="user.index" :style="getItemStyle(index)" @click="activedIndex=index">
        <span>{{ index }}: {{ user }}</span>
        <span class="delete" @click="delUser(index)">x</span>
      </li>
      <li v-if="users.length===0">No user data to show, please add a user first.</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

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
    const style = {borderBottom: '', backgroundColor: ''}
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
    // this.$http.get('/users').then(function (response) {
    //   console.log(response)
    // }).catch(() => {
    //   this.users = users
    // })
    this.users = users
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
</script>

<style scoped>
.list-container {
  width: 800px;
  margin: auto;
  text-align: left;
}
.title-row {
  position: relative;
}
.title-row > .title {
  display: inline;
}
.title-row > input[type="button"] {
  float: right;
}

ul {
  list-style-type: none;
  padding: 0;
  border: 2px solid darkgrey;
  border-style: dashed;
}
li {
  display: inline-block;
  color: #003300;
  width: 100%;
  padding: 2px 10px;
  line-height: 30px;
  box-sizing: border-box;
}
li:hover {
  background-color: yellow;
  color: blue;
}
li > .delete{
  float: right;
}
li > .delete:hover {
  color: red;
  cursor: pointer;
  font-size: 22px;
}
</style>
