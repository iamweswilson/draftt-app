<template>
  <div class="w-full sm:w-4/5 md:w-3/5">
    <h1 class="text-4xl text-blue-900 font-bold">Account Details</h1>
    <form>
      <div class="mb-4">
        <label class="block mb-2 text-gray-800 text-sm" for="name">Name</label>
        <input
          class="border w-full px-2 py-2 rounded-md"
          type="text"
          id="name"
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
          :value="$store.state.user.email"
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
      <button
        class="inline-block text-md text-white bg-blue-600 hover:bg-blue-800 mt-6 px-5 py-2 rounded-full"
      >
        Save Changes
      </button>
    </form>
    <hr class="my-8" />
    <section class="mt-8">
      <h2 class="text-4xl text-blue-900 font-bold">Your Drafts</h2>
      <ul>
        <li>
          <a href="/single">Single draft</a>
        </li>
        <li>
          <a href="/single">Single draft</a>
        </li>
        <li>
          <a href="/single">Single draft</a>
        </li>
        <li>
          <a href="/single">Single draft</a>
        </li>
      </ul>
    </section>
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
}
</script>

<style lang="scss" scoped></style>
