<template>
  <div>
    <section class="mt-4 mb-12 text-center">
      <div v-if="error.statusCode === 404">
        <img src="/img/404.png?nf_resize=fit&w=751&h=563" class="px-8 mb-8 mx-auto" alt="">
        <h1 class="font-bold text-4xl">404</h1>
        <p>Looks like the page you're looking for isn't here. Could be my fault, could be yours. If you found a broken link somewhere, please 
          <a href="/">
            Go home
          </a>
        </p>
      </div>
      <div v-else>
        <h1>Uh oh</h1>
        <p>An error occurred</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default', // you can set a custom layout for the error page
  }
</script>

<style scoped lang="postcss">
</style>