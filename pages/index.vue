<template>
  <div class="container mx-auto">
    <h1 class="text-left font-bold text-blue-900 md:w-10/12 lg:w-8/12">
      <span class="underline">Real</span> design feedback when you need it
    </h1>
    <p
      class="text-left text-base md:text-lg pt-8 md:w-7/12 lg:w-6/12 text-gray-700"
    >
      A place to share designs that aren't quite finished. Let peers help you
      transform your drafts to final.
    </p>
    <p>
      <a
        href="/drafts"
        class="inline-block text-md text-white bg-blue-600 hover:bg-blue-800 mt-10 px-5 py-2 rounded-full"
        >See some drafts
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-4 w-4 inline-block ml-2"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
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
  line-height: 3rem;
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 5rem;
    line-height: 5.9rem;
  }
}
</style>
