import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/Api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: []
  },

  actions: {
    loadPostsList: function ({ commit }) { //disparei uma actions
      Api().get('/posts') // pegue todos os posts da minha API
        .then((response) => { // e faça:
          commit('SET_POSTS_LIST', { list: response.data 
          }, (err) => { //se tiver erro eu diparo erro
            console.log(err)
          })
        })
    }
  },

  mutations: { // salva as mutations da aplicação
    SET_POSTS_LIST: (state, { list }) => { // pega os posts
      state.posts = list
    }
  },

  getter:{ // n é uma boa pratica acessar post direto
      getPostList: state => state.posts
  },

  async createPost({state, dispatch, commit}, newPostInfo){
    await Api().post('posts', {user: newPostInfo.user, title: "title", content:newPostInfo.content })
  },

  async deletePost({state, dispatch, commit}, post){
      await Api().delete(`posts/${posts._id}`)
      return dispatch('loadPostList', {commit}) // disph dispara actions
  }
})

export default store