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
      <div
        class="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1584804738473-a49b7441c464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1553996078-07277bda2756?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2538&q=80"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1607443359781-1f90813dd803?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aWxsdXN0cmF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1580196969807-cc6de06c05be?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aWxsdXN0cmF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1521911528923-9c3838123490?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8aWxsdXN0cmF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1541692033570-5b2e9c4e2aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8aWxsdXN0cmF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1521633285489-5ad960964604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1575550597909-fff46d723735?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1576497588294-94553e04534e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
        <NuxtLink
          to="/drafts/single"
          class="block bg-white rounded h-full text-grey-darkest no-underline shadow-md draft"
        >
          <figure class="min-h-full min-w-full relative overflow-hidden">
            <img
              class="absolute h-full w-full object-cover object-center rounded"
              src="https://images.unsplash.com/photo-1578406843598-34a4518d168d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="bird"
            />
          </figure>
        </NuxtLink>
      </div>
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

<style lang="scss" scoped>
.draft {
  height: 24rem;
}
</style>
