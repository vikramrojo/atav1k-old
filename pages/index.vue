<template lang="pug">
  main.main
    .fixed.wid100.bgWhite.bordB1.z10
      nav.nav.cols
        scrollactive(:offset="60").navLeft.col
          .bold.black Vikram Babu
          a.scrollactive-item(href="#product") Product
          a.scrollactive-item(href="#design") Design
          a Writing
        .navRight.col#gridsize.hide
          .small.silver Resize
          a.small(v-on:click="gridXs") XS
          a.small(v-on:click="gridSm") SM
          a.small(v-on:click="gridMd") MD
          a.small(v-on:click="gridLg") LG
    section.cols.padY1
      .col8.marT4
        h3 I'm Vikram. I implement Design Systems, build teams with Design Operations and deliver successes through Product Discovery.
        p Based in Oakland, California, I recently worked at Gigster focusing on architecting design systems to help teams deliver projects reliably while shipping internal tools and marketing products.
        p Previously, I've been a product design fellow, and held roles in visual design and frontend. I write code, tweets and essays. Sometimes I photograph places.
    section
      .cols.bordT1.bordB1.padY1
        .col
          .h1(data-heading="Product")#product Product
      .cols.bordB1.padY2
        .col8
          .h3 Booster — Design System, CSS, Documentation
          .h5.uppercase Gigster, 2018
          p Design smarter to deliver great experiences across multiple client projects, every time. Booster helps Gigster designers deliver prototypes and guides quickly.
        .col12
          .grid.gridCols.gridGap1
            img(v-lazyload src="/img/img.png" data-src="/img/booster-site1.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/booster-site2.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/booster-kit1.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/booster-kit2.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/booster-kit3.jpg")
      .cols.bordB1.padY2
        .col8
          .h3 Gigster Tools — UX/UI, Usabilty, Product Management
          .h5.uppercase Gigster, 2018
          p Design smarter to deliver great experiences across multiple client projects, every time. Booster helps Gigster designers deliver prototypes and guides quickly.
        .col12
          .grid.gridCols.gridGap1
            img(v-lazyload src="/img/img.png" data-src="/img/gigster-ux1.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/gigster-ux2.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/gigster-ux6.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/gigster-payouts.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/gigster-blog1.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/gigster-blog2.jpg")
      .cols.bordB1.padY2
        .col8
          .h3 Depict — Design, Prototype, CSS
          .h5.uppercase Gigster, 2015
          p Depict needed a
        .col12
          .grid.gridCols.gridGap1
            img(v-lazyload src="/img/img.png" data-src="/img/depict-web.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/depict-ios.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/depict-prototype.jpg")
    section
      .cols.bordB1.padY1
        .col
          .h1(data-heading="Design")#design Design
      .cols.bordB1.padY2
        .col
          .h3 Whiplash — Brand
          .h5.uppercase Whiplash, 2015
          .h4 Whiplash needed a rebrand
          .grid.gridCols.gridGap1
            img(v-lazyload src="/img/img.png" data-src="/img/whiplash-logo.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/whiplash-guide.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/whiplash-style1.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/whiplash-style2.jpg")
            img(v-lazyload src="/img/img.png" data-src="/img/whiplash-mockup.jpg")
      .cols.bordB1.padY2
        .col
          .h3 Minka — Brand
          .h5.uppercase Minka, 2018
          p Research shows that Latin Americans underutilize banking services. With a growing demand among young adults for mobile finance, we asked, what if there was a better bill payment option.
          p Luka hired me to produce the brand identity, pitch deck, landing page and take the product from blockchain concept to mobile and chat prototype.
          .grid.gridCols.gridGap1
            img(v-lazyload src="/img/img.png" data-src="/img/luka-app.png")
            img(v-lazyload src="/img/img.png" data-src="/img/luka-components.png")
            img(v-lazyload src="/img/img.png" data-src="/img/luka-intro.png")
            img(v-lazyload src="/img/img.png" data-src="/img/luka-prototypes.png")
    nav.nav.cols
      .col.navLeft.dark
        a Dribbble
        a Github
        a Medium
</template>
<style>
:root{
}

@media screen and (max-width: 48rem) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
}
</style>
<script>
export default {
  mounted: function() {
    const grid = document.querySelector(".grid");
    animateCSSGrid.wrapGrid(grid, {duration : 600});
  },
  methods: {
    gridXs: function (event) {
      var box = document.querySelector(".main");
      box.style.setProperty('--grid-columns', 'repeat(6, 1fr)')
    },
    gridSm: function (event) {
      var box = document.querySelector(".main");
      box.style.setProperty('--grid-columns', 'repeat(4, 1fr)')
    },
    gridMd: function (event) {
      var box = document.querySelector(".main");
      box.style.setProperty('--grid-columns', 'repeat(3, 1fr)')
    },
    gridLg: function (event) {
      var box = document.querySelector(".main");
      box.style.setProperty('--grid-columns', 'repeat(2, 1fr)')
    }
  },
}
</script>
