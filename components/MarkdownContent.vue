<template lang="pug">
  .markdown-body.color-bg-blue.p-4
    .container(v-html="convertedContent")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator"
import { marked } from "marked"

@Component
export default class MarkdownContent extends Vue
{
	@Prop()
	readonly repoUrl!: string

	@Prop()
	readonly filePath!: string

	public content = ""

	private async fetchMd()
	{
		const headers = {
			Accept: "application/vnd.github.v3+json",
		}

		const response = await fetch(
			`https://api.github.com/repos/${this.repoUrl}/contents/${this.filePath}`,
			{ headers },
		)

		if (response.status !== 200) throw new Error("正常にデータを取得できませんでした。")

		const data = await response.json()
		this.content = Buffer.from(data.content, "base64").toString()
	}

	public get convertedContent()
	{
		return marked(this.content)
	}

	async created()
	{
		await this.fetchMd()
	}
}
</script>
