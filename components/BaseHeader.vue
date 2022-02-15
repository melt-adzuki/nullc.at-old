<template lang="pug">
  header.color-bg-blue
    .container.d-flex.flex-wrap.flex-column.flex-md-row.justify-content-center.justify-content-md-between.py-3
      NuxtLink.d-flex.flex-column.flex-md-row.justify-content-center.align-items-center.mb-3.mb-md-0.text-dark.text-decoration-none(to="/")
        img.mb-2.mr-0.mb-md-0.mr-md-2(alt="Logo", width="40", src="@/assets/img/nullcat/nyan_nullcat.png")
        h1.h4.m-0.color-fg-white NullCat
      nav
        ul.nav.nav-pills.justify-content-center
          li: .nav-item
            NuxtLink.nav-link.color-fg-white(to="/nullcat-chan")
              img.mb-2.mr-0.mb-md-0.mr-md-2(alt="Nullcat chan", width="40", src="@/assets/img/nullcat/hi_nullcat.png")
</template>
