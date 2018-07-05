<template>
  <div class="main">
    <img src="./assets/logo.png">
    <router-link to="/">Go to HelloWorld</router-link>
    <router-link to="/list">Go to TodoList</router-link>
    <router-view/>
  </div>
</template>

<script lang='ts' src="./App.ts" />

<style>
.main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
