<template>
  <v-text-field
      label="Search"
      v-model="searchTerm"
      @input="search"
  ></v-text-field>
</template>

<script>
export default {
  name: 'SearchField',
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    search() {
      if (!this.searchTerm) {
        this.$store.commit('setPackages', [])
        return
      }
      this.$store.dispatch('searchPackages', this.searchTerm)
    }
  }
}
</script>
