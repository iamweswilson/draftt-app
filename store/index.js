import Vuex from 'vuex'
import { auth } from '~/plugins/firebase.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: '',
    },

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
      updatePhotoURL({state}, photoURL) {
        state.user.updateProfile({photoURL})
      },
      updateUserEmail({state}, email) {
        state.user.updateEmail(email).then(() => {
        // Update successful.
          alert('Email changed');
        }, error => {
          alert(error)
        })
      },
    }
  })
}

export default createStore