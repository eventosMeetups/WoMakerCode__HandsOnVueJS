<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.
    <div v-for="post in postsList" :key="post._id">
      <p>
        <span v-text = "post.user"></span>
        <span v-text = "post.content"></span>
      </p>

        <div class="card">
          <b-card title="Card title"
                  sub-title="Card subtitle">

              <h5 class="mt-0" v-text="post.user" ></h5>
              <p v-text="post.content"></p>

              <p class="card-text" >
                  Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
              </p>
              <a href="#"
                class="card-link">Card link</a>
              <b-link href="#"
                      class="card-link">Another link</b-link>
         
              <div class="buttom">
                <b-button>Remover</b-button>
                <b-button href="#">I am a Link</b-button>
              </div>
          </b-card>
        </div>
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