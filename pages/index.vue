<template>
  <div class="container mx-auto">
    <h1 class="text-left font-bold text-blue-900 w-8/12">
      <span class="underline">Real</span> design feedback when you need it
    </h1>
    <p class="text-left text-lg pt-8 w-7/12 text-gray-700">
      A place to share designs that aren't quite finished. Let peers help you
      transform your drafts to final.
    </p>
    <p>
      <a
        href="/drafts"
        class="inline-block text-md text-white bg-blue-600 hover:bg-blue-800 mt-6 px-5 py-2 rounded-full"
        >See some drafts</a
      >
    </p>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
h1 {
  line-height: 5rem;
  font-size: 5rem;
}
</style>
