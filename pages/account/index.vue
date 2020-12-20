<template>
  <div class="w-full">
    <h1 class="text-4xl text-blue-900 font-bold">Account Details</h1>
    <form class="w-full sm:w-4/5 md:w-3/5" @submit.prevent="saveProfile">
      <div class="mb-4">
        <div class="">
          <img v-if="user.photoURL" 
            :src="user.photoURL" 
            alt="Avatar" 
            class="w-20 h-20 bg-transparent cursor-pointer rounded-full border-2 object-cover border-white hover:border-blue-600"
            id="preview"
            @click="$refs.file.click()"
            >
          <div v-else-if="user.displayName"
            class="text-white uppercase text-lg p-3 ring-4 rounded-full outline-none focus:outline-none bg-blue-600 w-20 h-20 flex items-center cursor-pointer justify-center border-white hover:border-blue-600"
            @click="$refs.file.click()"
          >
            {{ user.displayName[0] }}
          </div>
          <div v-else-if="user.displayName"
            class="text-white uppercase text-lg p-3 ring-4 rounded-full outline-none focus:outline-none bg-blue-600 w-20 h-20 flex items-center cursor-pointer justify-center border-white hover:border-blue-600"
            @click="$refs.file.click()"
          >
            {{ user.email[0] }}
          </div>

        </div>
        <input type="file" @change="chooseFile" class="hidden" ref="file">
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-gray-800 text-sm" for="name">Name</label>
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="text"
          id="name"
          v-model="displayName"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-gray-800 text-sm" for="email"
          >Email</label
        >
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="text"
          id="email"
          v-model="email"
        />
      </div>
      <button
        class="inline-block text-md text-white bg-blue-600 hover:bg-blue-800 mt-6 px-5 py-2 rounded-full"
      >
        Save Changes
      </button>
      <br>
      <button @click="seeUser">See user info in console (dev)</button>
    </form>
    <hr class="my-8" />
    <section class="mt-8">
      <UserDrafts />
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'
import UserDrafts from '~/components/user/UserDrafts.vue'

export default {
  data() {
    return {
      displayName: '',
      email: '',
      photoURL: '',
      imgURL: '',
      file: ''
    }
  },
  computed: {
    ...mapGetters({ user: 'user'})
  },
  components: {
    UserDrafts,
  },
  created() {
    this.displayName = this.user.displayName
    this.email = this.user.email
  },
  methods: {
    ...mapActions(['updateUserName', 'updateUserEmail']),
    saveProfile() {
      this.updateUserName(this.displayName)
      this.updateUserEmail(this.email)
      this.uploadFile()
    },
    chooseFile() {
      window.file = event.target.files[0];
      // Show preview thumbnail
      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        document.getElementById('preview').src = e.target.result
      }
    },
    uploadFile() {
      var user = firebase.auth().currentUser;
      console.log(file)
      // Upload to firebase
      firebase.storage().ref('users/' + user.uid + '/profilePic/' + 'avatar.jpg' ).put(file).then(res => {
        console.log('upload worked')

        // Get firebase url
        var storageRef = firebase.storage().ref('users/' + user.uid + '/profilePic/' + 'avatar.jpg').getDownloadURL().then(imgURL => {
          console.log('have download url')
          // Update profile pic
          user.updateProfile({
            photoURL: imgURL
          })
        })
      }).catch(error => {
        console.log(error.message);
      })
    },
    seeUser () {
      var user = firebase.auth().currentUser;

      if (user != null) {
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.draft {
  height: 24rem;
}
</style>
