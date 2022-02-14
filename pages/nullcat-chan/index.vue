<template lang="pug">
  .markdown-body.color-bg-blue.p-4
    .container(v-html="markdownToHtml")
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"
import { marked } from "marked"

@Component
export default class NullcatChanPage extends Vue
{
  public content = ""

  head()
  {
    return {
      title: "Nullcat chan!",
    }
  }

  private async fetchMd()
  {
    const apiUrl = "https://api.github.com"
    const repoUrl = "/repos/NullCatSlave/Nullcatchan"

    const headers = {
      Accept: "application/vnd.github.v3+json",
    }

    const response = await fetch(`${apiUrl}${repoUrl}/contents/torisetu.md`, { headers })

    if (response.status !== 200) throw new Error("正常にデータを取得できませんでした。")

    const data = await response.json()
    this.content = Buffer.from(data.content, "base64").toString()
  }

  public get markdownToHtml()
  {
    return marked(this.content)
  }

  async created()
  {
    await this.fetchMd()
  }
}
</script>
