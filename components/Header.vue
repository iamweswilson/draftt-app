<template>
  <div class="container mx-auto flex justify-between py-5">
    <nuxt-link to="/" class="leading-tight font-bold text-blue-600 text-2xl"
      >draftt</nuxt-link
    >
    <div>
      <NuxtLink to="/upload" v-if="$store.state.user" class="text-sm"
        >Upload |
      </NuxtLink>
      <NuxtLink to="/account" v-if="$store.state.user" class="text-sm"
        >{{ $store.state.user.email }} |
      </NuxtLink>
      <nuxt-link
        to="/login"
        class="opacity-60 hover:opacity-100 text-sm text-white bg-blue-600 hover:bg-blue-800 px-5 py-2 rounded-full"
        v-else
        >Log In</nuxt-link
      >
      <button @click="signOut" class="text-sm" v-if="$store.state.user">
        Log Out
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    signOut: function (err) {
      this.$store
        .dispatch('signOut')
        .catch((err) => {
          alert(err.message)
        })
        .then(() => this.$router.push('/'))
    },
  },
}
</script>
