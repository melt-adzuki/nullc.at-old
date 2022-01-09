<template>
  <div>
    <BaseHeader />
    <main>
      <Nuxt />
    </main>
    <BaseFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "DefaultLayout",
})
</script>
