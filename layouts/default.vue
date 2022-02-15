<template lang="pug">
  div
    BaseHeader
    main
      Nuxt
    BaseFooter
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class DefaultLayout extends Vue
{ }

</script>
