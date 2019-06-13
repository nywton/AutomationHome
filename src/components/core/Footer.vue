<template>
  <v-footer
    id="core-footer"
    absolute
    height="82"
  >
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a
        href="https://nywton.github.com/resume"
        target="_blank">Nywton Barros</a>
    </span>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
