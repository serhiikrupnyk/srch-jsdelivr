<template>
  <v-container>
    <packages-list></packages-list>
    <package-details v-if="dialog"></package-details>
  </v-container>
</template>

<script>
import PackagesList from "@/views/PackagesList";
import PackageDetails from "@/views/PackageDetails";

export default {
  name: 'MainPage',
  components: {PackageDetails, PackagesList},
  computed: {
    dialog() {
      return this.$store.state.showDetailsDialog
    }
  }
}
</script>

<style lang="scss">
/* Custom styling for the component */
</style>
