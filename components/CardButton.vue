<template lang="pug">
  a(target="_blank" :href="link").text-reset.text-decoration-none
    .card-button.d-flex.flex-column.shadow-sm.text-center.rounded
      h4.pt-5.mb-5.color-fg-black {{ serviceName }}
      span.m-0
        component(:is="iconName").icon
      p.color-bg-blue.p-4.m-0.mt-auto.h-25.rounded-bottom {{ description }}
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

const Props = Vue.extend({
	props: {
		serviceName: { type: String, required: true },
		description: { type: String, required: true },
		link: { type: String, required: true },
	},
})

@Component
export default class CardButton extends Props
{
	get iconName(): string
	{
		return `Icon${this.serviceName}`
	}
}
</script>

<style lang="scss" scoped>
.card-button {
    width: 15rem;
    height: 20rem;
    border-width: 0;
    background-color: rgb(250, 250, 250);

    &:hover {
        background-color: rgb(245, 245, 245);
    }
}

.icon {
    width: 4rem;
}
</style>
