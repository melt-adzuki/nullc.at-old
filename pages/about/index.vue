<template lang="pug">
  .color-bg-black
    .hero.d-flex.align-items-center.justify-content-center.position-relative
      .shape-black.color-bg-black
        .shape.color-bg-blue
      b-container.z-index-1.d-flex.flex-column.align-items-center.justify-content-center
        JumboLogo
    article.color-fg-white
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
                p NullCat
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
</template>