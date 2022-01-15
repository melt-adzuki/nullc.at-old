<template>
  <div class="color-bg-background">
    <div class="hero d-flex align-items-center justify-content-center position-relative">
      <div class="shape-background color-bg-background" />
      <div class="shape color-bg-backgroundBlue" />
      <b-container class="z-index-1 d-flex flex-column align-items-center justify-content-center">
        <img alt="Hi" class="mb-2 mb-md-5" width="128" src="~/static/img/nullcat/hi_nullcat.png">
        <JumboLogo />
      </b-container>
    </div>

    <article>
      <section id="about" class="container p-5">
        <b-row>
          <div class="col-md w-100">
            <div class="d-flex flex-column align-items-center justify-content-center h-100 z-index-1">
              <img alt="Nyan!" class="mb-3" width="128" src="~/static/img/nullcat/nyan_nullcat.png">
              <h2 class="text-center">
                About
              </h2>
            </div>
          </div>

          <div class="col-md d-flex align-items-center w-100">
            <b-row class="w-100">
              <div class="col-md">
                <h3>自己紹介</h3>
                <p>Nullcat chan!</p>
                <p>2004/8/26</p>
                <h3>ゲーム</h3>
                <ul>
                  <li>APEX</li>
                  <li>Valorant</li>
                  <li>VRChat</li>
                </ul>
                <h3>すき</h3>
                <ul>
                  <li>絵をかく</li>
                  <li>ゲーム</li>
                  <li>曲をきく</li>
                </ul>
              </div>
              <div class="col-md">
                <h3>好きなキャラ</h3>
                <ul>
                  <li>ポッチャマ</li>
                  <li>ポチャッコ</li>
                </ul>
              </div>
            </b-row>
          </div>
        </b-row>
      </section>

      <section id="links" class="container p-5">
        <div class="col-md w-100 mb-5">
          <div class="d-flex flex-column align-items-center justify-content-center h-100">
            <img alt="びびびびびびっ" class="mb-3" width="128" src="~/static/img/nullcat/bibibi_nullcat.png">
            <h2 class="text-center">
              Links
            </h2>
          </div>
        </div>

        <b-row>
          <b-col v-for="item in linksMeta" :key="item.id" class="d-flex w-100 justify-content-center align-items-center mb-5">
            <CardButton :service-name="item.serviceName" :description="item.description" :link="item.link" />
          </b-col>
        </b-row>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class IndexPage extends Vue
{
  linksMeta = [
    {
      id: 1, serviceName: "Twitter", description: "nullnyat", link: "https://twitter.com/nullnyat",
    },
    {
      id: 2, serviceName: "Discord", description: "nullnyat#3595", link: "https://discord.com/users/839568515848470538",
    },
    {
      id: 4, serviceName: "Keybase", description: "nullnyat", link: "https://keybase.io/nullnyat",
    },
    {
      id: 5, serviceName: "GitHub", description: "nullnyat", link: "https://github.com/nullnyat",
    },
    {
      id: 6, serviceName: "Steam", description: "nullnyat", link: "https://steamcommunity.com/id/nullnyat",
    },
    {
      id: 7, serviceName: "Origin", description: "nullnyat", link: "https://www.origin.com/jpn/ja-jp/profile/user/BcMVy9jix55EDn_JfEXUMw--",
    },
  ]
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
