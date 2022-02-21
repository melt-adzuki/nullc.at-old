<template lang="pug">
MarkdownContent(repoUrl="NullCatSlave/Nullcatchan", filePath="torisetu.md")
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component
export default class NullcatChanPage extends Vue
{
	private readonly header: Header = {
		title: "Nullcat chan!",
	}

	mounted()
	{
		this.$nuxt.$emit("update-header", this.header)
	}

	head()
	{
		return {
			title: this.header.title,
		}
	}
}
</script>
