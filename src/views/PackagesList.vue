<template>
  <v-container>
    <v-card class="teal lighten-5 elevation-3">
      <v-card-title>
        <search-field></search-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="packages"
          :items-per-page="10"
          class="teal lighten-5"
          :no-data-text="'No packages found'"
          @click:row="showDetails"
      ></v-data-table>
      <app-footer></app-footer>
    </v-card>
  </v-container>
</template>

<script>
import SearchField from "@/views/SearchField";
import AppFooter from "@/views/AppFooter";

export default {
  name: 'PackagesList',
  components: {SearchField, AppFooter},
  computed: {
    headers() {
      return [
        { text: 'Name', value: 'package.name' },
        { text: 'Description', value: 'package.description' },
        { text: 'Version', value: 'package.version' }
      ]
    },
    packages() {
      return this.$store.state.packages
    }
  },
  methods: {
    showDetails(item) {
      this.$store.dispatch('getPackageDetails', item)
    }
  }
}
</script>
