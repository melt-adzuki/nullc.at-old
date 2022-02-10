<template lang="pug">
  div
    <BaseHeader />
    main
      <Nuxt />
    <BaseFooter />
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "DefaultLayout",
})
</script>
