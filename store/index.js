import Vue from 'vue'
import Vuex from 'vuex'
import { firebase, auth } from '~/plugins/firebase.js'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)

import myModule from './modules/myModule.js'

const easyFirestore = VuexEasyFirestore(
  [myModule], {
    logging: true,
    FirebaseDependency: firebase,
  }
)

const store = () => {
  return new Vuex.Store({
    state: {
      user: '',
    },

    plugins: [easyFirestore],

    getters: {
      user(state) {
        return state.user
      },

      isAuthenticated(state) {
        return !!state.user
      }
    },

    mutations: {
      setUser(state, payload) {
        state.user = payload
      }
    },

    actions: {
      signUp({ commit }, { email, password }) {
        return auth.createUserWithEmailAndPassword(email, password)
      },

      signInWithEmail({ commit }, { email, password }) {
        return auth.signInWithEmailAndPassword(email, password)
      },

      signOut() {
        return auth.signOut()
      },
      updateUserName({state, commit}, displayName) {
        state.user.updateProfile({displayName})
      },
      // updatePhotoURL({state}, photoURL) {
      //   state.user.updateProfile({photoURL})
      // },
      updateUserEmail({state}, email) {
        state.user.updateEmail(email).then(() => {
        // Update successful.
          // alert('Email changed');
        }, error => {
          alert(error)
        })
      },
    }
  })
}

export default store