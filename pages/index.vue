<template lang="pug">
.color-bg-black
	.d-flex.flex-column.align-items-center.justify-content-center.position-relative.vh-100
		.shape-black.color-bg-black
			.shape.color-bg-blue

		section.container.z-index-1.d-flex.flex-column.align-items-center.justify-content-center.py-5
			img.rounded-pill(alt="Icon" width="400" src="@/assets/img/nullcat/icon_nullcat.png")
			JumboLogo

		section.container.z-index-1.py-5
			#buttons
				button(@click="$router.push('/about')") About
				button(@click="$router.push('/links')") Links
				button(@click="$router.push('/nullcat-chan')") Nullcat chan!
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

type LinksMeta = { serviceName: string, description: string, link: string }

@Component
export default class IndexPage extends Vue
{
	private readonly header: Header = {
		title: "Home",
	}

	mounted()
	{
		this.$nuxt.$emit("update-header", this.header)
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
@import "~/assets/css/ncat";

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

#buttons {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px;
	font-size: 32px;

	button {
		position: relative;
		padding-block: 8px;
		padding-inline: 16px;
		border-width: 0;
		border-radius: 8px;
		background-color: map-get($NCAT, "white");

		&:hover {
			&::before, &::after {
				top: -12px;
			}
		}

		&::before, &::after {
			content: "";
			position: absolute;
			width: 24px;
			height: 12px;
			background: url("~/assets/img/nekomimi.svg");
			transition: top 1s cubic-bezier(0, 1, 1, 1);
		}

		&::before {
			left: 12px;
		}

		&::after {
			right: 12px;
		}
	}
}
</style>
