<template lang="pug">
  .color-bg-background
    .hero.d-flex.align-items-center.justify-content-center.position-relative
      .shape-background.color-bg-background
        .shape.color-bg-backgroundBlue
      b-container.z-index-1.d-flex.flex-column.align-items-center.justify-content-center
        img.mb-2.mb-md-5(alt="Hi" width="128" src="@/assets/img/nullcat/hi_nullcat.png")
        JumboLogo
    article
      section#about.container.p-5
        b-row
          .col-md.w-100
            .d-flex.flex-column.align-items-center.justify-content-center.h-100.z-index-1
              img.mb-3(alt="Nyan!"  width="128" src="@/assets/img/nullcat/nyan_nullcat.png")
              h2.text-center About
          .col-md.d-flex.align-items-center.w-100
            b-row.w-100
              .col-md
                h3 自己紹介
                p Nullcat chan!
                p 2004/8/26
                h3 ゲーム
                ul
                  li APEX
                  li Valorant
                  li VRChat

                h3 すき
                ul
                  li 絵をかく
                  li ゲーム
                  li 曲をきく

              .col-md
                h3 好きなキャラ
                ul
                  li ポッチャマ
                  li ポチャッコ
      section#links.container.p-5
        .col-md.w-100.mb-5
          .d-flex.flex-column.align-items-center.justify-content-center.h-100
            img.mb-3(alt="びびびびびびっ" width="128" src="@/assets/img/nullcat/bibibi_nullcat.png")
            h2.text-center Links

        b-row
          b-col.d-flex.w-100.justify-content-center.align-items-center.mb-5(v-for="item in linksMetaWithIndex" :key="item.id")
            CardButton(:service-name="item.serviceName" :description="item.description" :link="item.link")
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

type LinksMeta = { serviceName: string, description: string, link: string }

@Component
export default class IndexPage extends Vue
{
  private linksMeta: LinksMeta[] = [
    {
      serviceName: "Twitter", description: "nullnyat", link: "https://twitter.com/nullnyat",
    },
    {
      serviceName: "Discord", description: "nullnyat#3595", link: "https://discord.com/users/839568515848470538",
    },
    {
      serviceName: "Keybase", description: "nullnyat", link: "https://keybase.io/nullnyat",
    },
    {
      serviceName: "GitHub", description: "nullnyat", link: "https://github.com/nullnyat",
    },
    {
      serviceName: "Steam", description: "nullnyat", link: "https://steamcommunity.com/id/nullnyat",
    },
    {
      serviceName: "Origin", description: "nullnyat", link: "https://www.origin.com/jpn/ja-jp/profile/user/BcMVy9jix55EDn_JfEXUMw--",
    },
  ]

  public get linksMetaWithIndex()
  {
    const linksMetaWithIndex: Array<LinksMeta & { index: number }> = []

    this.linksMeta.forEach((object, index) => linksMetaWithIndex.push({ index, ...object }))

    return linksMetaWithIndex
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 45rem;
}

.shape-background {
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
