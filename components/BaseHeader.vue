<template lang="pug">
	header.color-bg-blue
		.container
			#header-content
				NuxtLink#header-title(to="/")
					img(alt="Logo" width="40" src="@/assets/img/nullcat/nyan_nullcat.png")
					h1 NullCat

				h2 {{ title }}

				NuxtLink#hamburger-menu(to="/nullcat-chan")
					img(alt="Nullcat chan" width="40" src="@/assets/img/nullcat/hi_nullcat.png")
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class BaseHeader extends Vue
{
	public title = ""

	private setHeader(header: Header)
	{
		this.title = header.title
	}

	mounted()
	{
		this.$nuxt.$on("update-header", this.setHeader)
	}
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/ncat";

#header-content {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-block: 16px;

	h1,
	h2 {
		font-size: 24px;
		margin: 0;
	}
}

#header-title {
	display: flex;
	align-items: center;
	gap: 8px;
	color: map-get($NCAT, "white");
}

#hamburger-menu {
	position: absolute;
	right: 0;

	img {
		transform: rotate(270deg);
	}
}
</style>
