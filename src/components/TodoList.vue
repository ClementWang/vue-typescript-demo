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

<script lang="ts" src="./TodoList.ts"/>>

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
