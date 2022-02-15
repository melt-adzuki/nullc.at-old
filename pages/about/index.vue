<template lang="pug">
  .color-fg-white.color-bg-black
    PageHeader(name="About" imagePath="nullcat/nyan_nullcat.png")
    MarkdownContent(repoUrl="NullCatSlave/nullc.at" filePath="nullcat.md")
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class AboutPage extends Vue
{
  head()
  {
    return {
      title: "About",
    }
  }
}
</script>
