<template>
  <div>
    <button
      class="text-white uppercase text-sm p-3 ring-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-blue-600 w-8 h-8 flex items-center justify-center"
      style="transition:all .15s ease font-normal p-3 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full"
      type="button"
      v-on:click="toggleDropdown()"
      ref="btnDropdownRef"
    >
      {{ $store.state.user.email[0] }}
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
        <p class="text-xs w-full">Logged in as</p>
        {{ $store.state.user.email }}
      </a>
      <div
        class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
      ></div>
      <a
        href="/upload"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-blue-600 hover:text-white bg-transparent text-gray-800"
      >
        Upload
      </a>
      <div
        class="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
      ></div>
      <a
        href="#pablo"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap hover:bg-blue-600 hover:text-white bg-transparent text-gray-800"
        @click="signOut"
        v-if="$store.state.user"
      >
        Log Out
      </a>
    </div>
  </div>
</template>

<script>
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
        .then(() => this.$router.push('/'))
    },
  },
}
</script>

<style lang="scss" scoped></style>
