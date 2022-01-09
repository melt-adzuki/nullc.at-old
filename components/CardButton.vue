<template>
  <a target="_blank" :href="link" class="text-reset text-decoration-none">
    <div class="card-button d-flex flex-column shadow-sm text-center rounded">
      <h4 class="pt-5 mb-5 color-fg-black">{{ serviceName }}</h4>
      <span class="m-0"><component :is="iconName" class="icon" /></span>
      <p class="color-bg-backgroundBlue p-4 m-0 mt-auto h-25 rounded-bottom">{{ description }}</p>
    </div>
  </a>
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
