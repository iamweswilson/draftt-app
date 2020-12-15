import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

function initFirebase () {
  firebase.initializeApp({ 
    apiKey: "AIzaSyBW43Uy0FXYjdjoJto8bqGPm959oxDHAVU",
    authDomain: "design-feedback-297819.firebaseapp.com",
    databaseURL: "https://design-feedback-297819-default-rtdb.firebaseio.com",
    projectId: "design-feedback-297819",
    storageBucket: "design-feedback-297819.appspot.com",
    messagingSenderId: "1014408013120",
    appId: "1:1014408013120:web:e8a359b5383a48f1c746a5",
    measurementId: "G-TJJB9F104V"
  })
  return new Promise((resolve, reject) => {
    firebase.firestore().enablePersistence()
      .then(resolve)
      .catch(err => {
        if (err.code === 'failed-precondition') {
          reject(err)
          // Multiple tabs open, persistence can only be
          // enabled in one tab at a a time.
        } else if (err.code === 'unimplemented') {
          reject(err)
          // The current browser does not support all of
          // the features required to enable persistence
        }
      })
  })
}

initFirebase()
  .then(_ => {
    const easyFirestore = VuexEasyFirestore(myModule, { logging: true, FirebaseDependency: Firebase })
    // init Vuex store
  })
  .catch(error => {
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
  })

export { firebase, initFirebase }
export const auth = firebase.auth()