<template lang="pug">
.color-bg-black
	.d-flex.flex-column.align-items-center.justify-content-center.position-relative.vh-100
		.shape-black.color-bg-black
			.shape.color-bg-blue

		section.container.z-index-1.d-flex.flex-column.align-items-center.justify-content-center.py-5
			img.icon.rounded-pill(
				alt="Icon",
				width="400",
				src="@/assets/img/nullcat/icon_nullcat.png"
			)
			JumboLogo

		section.container.z-index-1.py-5
			#buttons
				button(@click="$router.push('/about')") About
				button(@click="$router.push('/links')") Links
				button(@click="$router.push('/nullcat-chan')") Nullcat chan!
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

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
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/ncat";

.icon {
	&:hover {
		animation: rotation 1.5s infinite linear;
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
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

		&::before,
		&::after {
			content: "";
			position: absolute;
			width: 24px;
			height: 12px;
			background: url("~/assets/img/nekomimi.svg");
			transition: top 1s cubic-bezier(0, 1, 1, 1);
		}

		&:hover {
			&::before,
			&::after {
				top: -12px;
			}
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
