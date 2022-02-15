<template lang="pug">
  .color-fg-white.color-bg-black
    PageHeader(name="Links" imagePath="nullcat/bibibi_nullcat.png")
    section#links.container.p-5
      b-row
        b-col.d-flex.w-100.justify-content-center.align-items-center.mb-5(v-for="item in linksMetaWithIndex" :key="item.id")
          CardButton(:service-name="item.serviceName" :description="item.description" :link="item.link")
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

type LinksMeta = { serviceName: string, description: string, link: string }

@Component
export default class LinksPage extends Vue
{
	private readonly header: Header = {
		title: "Links",
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

	private linksMeta: LinksMeta[] = [
		{
			serviceName: "Twitter", description: "nullnyat", link: "https://twitter.com/nullnyat",
		},
		{
			serviceName: "GitHub", description: "nullnyat", link: "https://github.com/nullnyat",
		},
		{
			serviceName: "Pixiv", description: "nullnyat", link: "https://www.pixiv.net/users/74107311",
		},
		{
			serviceName: "Discord", description: "nullnyat#3595", link: "https://discord.com/users/839568515848470538",
		},
		{
			serviceName: "Keybase", description: "nullnyat", link: "https://keybase.io/nullnyat",
		},
		{
			serviceName: "Steam", description: "nullnyat", link: "https://steamcommunity.com/profiles/76561199215911227",
		},
	]

	public get linksMetaWithIndex()
	{
		const linksMetaWithIndex: Array<LinksMeta & { index: number }> = this.linksMeta.map((object, index) => ({ index, ...object }))

		return linksMetaWithIndex
	}
}
</script>

<style lang="scss" scoped>
.hero {
  height: 45rem;
}

.shape-black {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 0 100%, 0 100%);
}

h3 {
  margin-top: 2rem;
}
</style>
