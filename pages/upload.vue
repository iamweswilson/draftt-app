<template>
  <div class="container mx-auto">
    <h1 class="text-4xl text-blue-900 font-bold">Upload</h1>
    <form>
      <label for="title">Title</label>
      <input
        class="border w-full px-2 py-2 rounded-md"
        type="text"
        v-model="title"
        @blur="createDraft(title, date)"
      />
      <button 
      type="submit"
      slot="reference"
      >Click me</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
const db = firebase.firestore();

export default {
  data() {
    return {
      title: '',
      date: new Date().toISOString().slice(0, 10),
    }
  },
  methods: {
    createDraft(title, date) {
      if (title != "") {
        console.log(title)
        db.collection("drafts")
          .add({ date: date, title: title })
          .then(() => {
            console.log("Document successfully written!");
            // this.readEmployees();
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        this.title = ""
      } else {
        console.log('Give your draft a name')
      }
    },
  }
}
</script>

<style lang="scss" scoped></style>
