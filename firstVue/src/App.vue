<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'App',

  computed: mapState([
    'posts'
  ]),

  async beforeMount(){
      const dispatch = this.$store.dispatch
      dispatch('loadPostsList')
      console.log(this.$store.state.posts)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
