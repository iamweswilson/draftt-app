<template>
  <div>
    <button v-if="user.photoURL"
      class="text-white uppercase text-sm ring-4 rounded-full outline-none focus:outline-none bg-blue-600 w-8 h-8 flex items-center justify-center"
      style="transition:all .15s ease font-normal p-3 rounded outline-none focus:outline-none capitalize w-full"
      type="button"
      v-on:click="toggleDropdown()"
      ref="btnDropdownRef"
    >
      <img :src="user.photoURL" class="rounded-full">
    </button>
    <button v-else-if="user.displayName"
      class="text-white uppercase text-sm p-3 ring-4 rounded-full outline-none focus:outline-none bg-blue-600 w-8 h-8 flex items-center justify-center"
      style="transition:all .15s ease font-normal p-3 rounded outline-none focus:outline-none capitalize w-full"
      type="button"
      v-on:click="toggleDropdown()"
      ref="btnDropdownRef"
    >
      {{ user.displayName[0] }}
    </button>
    <button v-else
      class="text-white uppercase text-sm p-3 ring-4 rounded-full outline-none focus:outline-none bg-blue-600 w-8 h-8 flex items-center justify-center"
      style="transition:all .15s ease font-normal p-3 rounded outline-none focus:outline-none capitalize w-full"
      type="button"
      v-on:click="toggleDropdown()"
      ref="btnDropdownRef"
    >
      {{ user.email[0] }}
    </button>
    <div
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
      style="min-width: 12rem"
      ref="popoverDropdownRef"
    >
      <a
        href="/account"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-blue-600 hover:text-white bg-transparent text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-4 w-4 inline-block opacity-50 mr-1"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="text-xs w-full inline-block opacity-50">Logged in as</span>
        <span class="block">{{ user.displayName }}</span>
      </a>
      <div
        class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
      ></div>
      <a
        href="/upload"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-blue-600 hover:text-white bg-transparent text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-4 w-4 inline-block opacity-50 mr-1"
        >
          <path
            d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
          />
          <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
        </svg>
        Upload
      </a>
      <div
        class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
      ></div>
      <a
        href="#"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-blue-600 hover:text-white bg-transparent text-gray-800"
        @click="signOut"
        v-if="user"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-4 w-4 inline-block opacity-50 mr-1"
        >
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clip-rule="evenodd"
          />
        </svg>
        Log Out
      </a>
    </div>
  </div>
</template>

<script>
//https://popper.js.org/docs/v2/
import { createPopper } from '@popperjs/core'
import { mapGetters } from 'vuex'

export default {
  name: 'Dropdown',
  data() {
    return {
      dropdownPopoverShow: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    toggleDropdown: function () {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        new createPopper(
          this.$refs.btnDropdownRef,
          this.$refs.popoverDropdownRef,
          {
            placement: 'bottom-start',
          }
        )
      }
    },
    signOut: function (err) {
      this.$store
        .dispatch('signOut')
        .catch((err) => {
          alert(err.message)
        })
        .then(() => this.$router.push('/login'))
    },
  },
}
</script>

<style lang="scss" scoped></style>
