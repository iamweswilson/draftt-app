<template>
  <div class="p-12 w-2/5 container mx-auto shadow-2xl rounded-md bg-white">
    <form @submit.prevent="userSignUp">
      <h2 class="mb-2 text-xl text-gray-800 font-bold">
        Register for an account
      </h2>

      <div class="mb-4">
        <label class="block mb-2 text-gray-800 text-sm" for="name">Name</label>
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="text"
          id="name"
          v-model="name"
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

      <div class="mb-4">
        <label class="block mb-2 text-gray-800 text-sm" for="password"
          >Password</label
        >
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="password"
          id="password"
          v-model="password"
        />
      </div>

      <button
        class="bg-blue-600 text-white py-3 mt-2 w-full rounded-md hover:bg-blue-800"
      >
        Sign Up
      </button>
    </form>
    <section class="w-full pt-4 text-sm text-gray-700 text-center">
      Already have an account?
      <nuxt-link to="/login" class="text-blue-600 hover:text-blue-900"
        >Log in</nuxt-link
      >
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },

  data: function () {
    return {
      name: '',
      email: '',
      password: '',
    }
  },

  methods: {
    userSignUp: function (err) {
      this.$store
        .dispatch('signUp', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.name = ''
          this.email = ''
          this.password = ''
          //if you wanted to redirect after sign in you'd do that here with this.$router.push('/pagename')
        })
        .catch((err) => {
          alert(err.message)
        })
    },
  },
}
</script>
