<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="post in postsList" :key="post._id">
      <p>
        <span v-text = "post.user"></span>
        <span v-text = "post.content"></span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'posts',
  computed:{
    ...mapGetters(['getPostsList']),

    postList(){
      let list = this.getPostsList
      return list.reverse() //reverte a lista pro mais recente i pro topo
    }
  },
  computed: mapState([
    'posts'
  ]),

  data () {
    return {
      postsList: []
    }
  },

  mounted () {
    this.postsList = this.posts
  }
}
</script>

<style>
</style>