<template lang="pug">
  header.color-bg-backgroundBlue
    .container.d-flex.flex-wrap.flex-column.flex-md-row.justify-content-center.justify-content-md-between.py-3
      a.d-flex.flex-column.flex-md-row.justify-content-center.align-items-center.mb-3.mb-md-0.text-dark.text-decoration-none(href="/")
        img.mb-2.mr-0.mb-md-0.mr-md-2(alt="Logo", width="40", src="@/assets/img/nullcat/nyan_nullcat.png")
        h1.h4.m-0.color-fg-white Nullcat chan!
      nav
        ul.nav.nav-pills.justify-content-center
          li: .nav-item
            a.nav-link.color-fg-background.color-bg-white(href="#", aria-current="page") Home
          li: .nav-item
            a.nav-link.color-fg-white(href="#about") About
          li: .nav-item
            a.nav-link.color-fg-white(href="#links") Links
</template>
