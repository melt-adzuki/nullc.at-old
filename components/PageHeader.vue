<template lang="pug">
  .d-flex.flex-column.align-items-center.justify-content-center.h-100.py-5
    img.mb-3(alt="Page header icon" width="128" :src="resolvedImagePath")
    h2.text-center {{ title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class PageHeader extends Vue
{
	public title = ""

	@Prop()
	readonly imagePath!: string

	private setHeader(header: Header)
	{
		this.title = header.title
	}

	public get resolvedImagePath()
	{
		// eslint-disable-next-line import/no-dynamic-require, global-require
		return require(`@/assets/img/${this.imagePath}`)
	}

	mounted()
	{
		this.$nuxt.$on("update-header", this.setHeader)
	}
}
</script>
