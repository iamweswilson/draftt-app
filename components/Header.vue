<template>
  <header class="flex justify-between py-5">
    <nuxt-link to="/" class="leading-tight font-bold text-blue-600 text-2xl"
      >draftt</nuxt-link
    >
    <div>
      <AccountDropdown v-if="$store.state.user" />
      <nuxt-link
        to="/login"
        class="opacity-60 hover:opacity-100 text-sm text-white bg-blue-600 hover:bg-blue-800 px-5 py-2 rounded-full"
        v-else
        >Log In</nuxt-link
      >
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import AccountDropdown from '~/components/AccountDropdown.vue'

export default {
  components: {
    AccountDropdown,
  },
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
