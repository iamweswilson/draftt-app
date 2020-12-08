import { firebase } from '@firebase/app'
import '@firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBW43Uy0FXYjdjoJto8bqGPm959oxDHAVU",
  authDomain: "design-feedback-297819.firebaseapp.com",
  databaseURL: "https://design-feedback-297819-default-rtdb.firebaseio.com",
  projectId: "design-feedback-297819",
  storageBucket: "design-feedback-297819.appspot.com",
  messagingSenderId: "1014408013120",
  appId: "1:1014408013120:web:e8a359b5383a48f1c746a5",
  measurementId: "G-TJJB9F104V"
};
// Initializing Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''

export const auth = firebase.auth()
export default firebase