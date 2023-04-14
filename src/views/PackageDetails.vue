<template>
    <div class="text-center">
      <v-dialog
          v-model="dialog"
          persistent
          width="500"
      >
        <v-card>
          <v-card-title class="text-h5 teal lighten-5">
            {{ package.name }}
          </v-card-title>
          <div>
            <v-card-text>
              version: {{ package.version }}
            </v-card-text>
            <v-card-text>
              type: {{ package.type }}
            </v-card-text>
            <v-card-text>
              default: {{ package.default }}
            </v-card-text>

            <v-card-text>
                      <v-list>
                        <h3>Files:</h3>
                        <div>
                          <v-btn v-if="files !== package.files" ref="btn" depressed small @click.prevent="currentDirectory">back</v-btn>
                        </div>
                        <v-list-item
                            v-for="file in files"
                            :key="file.name"
                            @click="handleClick(file)"
                        >
                          <v-list-item-avatar v-if="file.type === 'directory'">
                            <v-icon class="grey lighten-1 white--text">folder</v-icon>
                          </v-list-item-avatar>
                          <v-list-item-avatar v-else>
                            <v-icon class="blue white--text">assignment</v-icon>
                          </v-list-item-avatar>

                          <v-list-item-content>
                            <v-list-item-title>{{ file.name }}</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
            </v-card-text>
          </div>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                @click="close"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
export default {
  name: "PackageDetails",
  data: () => ({
    files: [],
  }),
  computed: {
    package() {
      this.files = this.$store.state.selectedPackage.files;
      return this.$store.state.selectedPackage
    },
    dialog() {
      return this.$store.state.showDetailsDialog
    }
  },
  methods: {
    close() {
      this.$store.dispatch('closeDetailsDialog')
    },
    openDirectory(file) {
      this.files = file.files
    },
    currentDirectory() {
      this.files = this.$store.state.selectedPackage.files;
    },
    handleClick(file) {
      if (file.type === 'directory') {
        this.openDirectory(file)
      }
    }
  }
}
</script>

<style scoped>

</style>
