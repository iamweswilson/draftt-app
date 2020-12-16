<template>
  <div class="container mx-auto">
    <h1 class="text-4xl text-blue-900 font-bold">Upload</h1>
    <button 
      type="submit"
      @click="testUpload">Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    testUpload() {
      this.$store.dispatch('myModule/insert', {title: 'Hello Firestore 🔥'})
    }
  }
}
</script>

<style lang="scss" scoped></style>
