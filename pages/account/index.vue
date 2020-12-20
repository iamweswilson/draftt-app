<template>
  <div class="w-full">
    <h1 class="text-4xl text-blue-900 font-bold">Account Details</h1>
    <form class="w-full sm:w-4/5 md:w-3/5" @submit="saveProfile">
      <div class="mb-4">
        <div
            class="w-24 h-24 cursor-pointer rounded-full relative avatar"
            @click="$refs.file.click()"
        >
          <span
            class="absolute w-8 h-8 rounded-full bg-blue-600 border-2 object-center p-1 border-white edit-icon"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          </span>
          <img v-if="user.photoURL"
            :src="user.photoURL"
            alt="Avatar"
            class="h-full w-full rounded-full object-cover"
            id="preview"
            >
          <div v-else-if="user.displayName"
            class="text-white uppercase text-4xl p-3 rounded-full bg-blue-600 w-full h-full flex items-center justify-center"
            id="preview"
          >
            {{ user.displayName[0] }}
          </div>
          <div v-else
            class="text-white uppercase text-4xl p-3 rounded-full bg-blue-600 w-full h-full flex items-center justify-center"
            id="preview"
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
    saveProfile() {
      this.updateUserName(this.displayName)
      this.updateUserEmail(this.email)
      if ( this.file == '' ) {
        console.log('no file')
      } else {
        this.uploadFile()
        console.log('we has file')
      }
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
.avatar {
  .edit-icon {
    bottom: -2px;
    right: -2px;
  }
  &:hover {
    .edit-icon {
      border-color: #2c5282;
    }
  }
}
</style>
