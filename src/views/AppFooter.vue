<template>
  <v-footer class="pa-1a">
    Serhii Krupnyk
    <v-spacer></v-spacer>
    &copy; {{ new Date().getFullYear() }}
  </v-footer>
</template>

<script>
export default {
  name: 'AboutMe',
  data: () => {
    return {
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    }
  }
}
</script>
