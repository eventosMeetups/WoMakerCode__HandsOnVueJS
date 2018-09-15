
/*
HELPS COM GIT

https://services.github.com/on-demand/downloads/pt_BR/github-git-cheat-sheet/

VUE HELP

https://github.com/ksetoue/vue-fullstackapp

MONGOLAB - BD PRA PEQUENAS APLICAOES DO MONGO

>npm install vue --global

>npm install -g @vue/cli
>npm install -g @vue/cli-init

vue init webpack .
yes
yes
1º
no
no
npm

npm install

npm run dev

localhost8080

todo template precisa de um div principal, assim como no react


npm install axios --save

npm install vuex --save

Dentro de src cria uma pasta chamada api
e um file api.js dentro dela digite:

import axios from 'axios'

export default() =>{
    return axios.create({
        baseURL: `https://vue-api-curso.herokuapp.com/`
    })
}

+++++++++

que chama a API

agora dentro do src crie uma pasta store e dentro dela add
um file store.js
nesse file add:

import Vue from 'vue'
import Api from '../api/api'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new.Vexs.Srore({
    state:{
        posts:[]
    }
})

montar um bindi com o clierna é fácil

formate document vue - formata

import Router from 'vue-router'

*/