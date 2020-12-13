<template>
  <div class="w-full">
    <h1 class="text-4xl text-blue-900 font-bold">Account Details</h1>
    <form class="w-full sm:w-4/5 md:w-3/5">
      <div class="mb-4">
        <label class="block mb-2 text-gray-800 text-sm" for="name">Name</label>
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="text"
          id="name"
          v-model="displayName"
          @change="onChangeUserName"
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
          @change="onChangeUserEmail"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-gray-800 text-sm" for="password"
          >Password</label
        >
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="password"
          id="password"
        />
      </div>
      <div class="mb-4">
        <img :src="photoURL" alt="Avatar" class="w-40 bg-transparent">
        <label class="block mb-2 text-gray-800 text-sm" for="photoURL"
          >Profile Pic</label
        >
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="text"
          id="photoURL"
          v-model="photoURL"
          @change="onProfilePicChanged"
        />
      </div>
      <button
        class="inline-block text-md text-white bg-blue-600 hover:bg-blue-800 mt-6 px-5 py-2 rounded-full"
      >
        Save Changes
      </button>
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
      photoURL: ''
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
    this.photoURL = this.user.photoURL ? this.user.photoURL : this.photoURL
  },
  methods: {
    ...mapActions(['updateUserName', 'updateUserEmail', 'updatePhotoURL']),
    onChangeUserName () {this.updateUserName(this.displayName)},
    onChangeUserEmail () {this.updateUserEmail(this.email)},
    onProfilePicChanged() {this.updatePhotoURL(this.photoURL)}
  }
}

// export default {
//   data() {
//     return {
//       name: this.$store.state.user.displayName,
//     }
//   },
//   computed: {
//     ...mapGetters({
//       user: 'user',
//     }),
//   },
//   components: {
//     UserDrafts,
//   },
//   methods: {
//     ...mapActions([
//       'editUser'
//     ]),
//     updateUser() {
//       var user = firebase.auth().currentUser;
//       user.updateProfile({
//         displayName: this.name,
//         // photoURL: "https://example.com/jane-q-user/profile.jpg"
//       }).then(function() {
//         alert('Changes saved')
//       }).catch(function(error) {
//         alert(err.message)
//       });
//       },
//   },
// }
</script>

<style lang="scss" scoped>
.draft {
  height: 24rem;
}
</style>
