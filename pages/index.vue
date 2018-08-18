<template lang="pug">
  main
    .fixed.wid100.bordB1
      nav.nav.cols.black.bold
        .navLeft.col
          a Vikram Babu
          a Design
          a Systems
          a Writing
        .navRight.col
          button.isLink(v-on:click="") Increase
          button.isLink(v-on:click="" href="") Decrease
    section.cols.padY1
      .col.marT4
        h2.bold I'm Vikram, a designer and writer implementing Design Systems and thinking through how Design Operations better teams.
      .col.marT4
        h3 Based in Oakland, California, I recently worked at Gigster focusing on implmenting a design system helping teams deliver projects reliably.
        h3 Previously, I've been a product design fellow, and held roles in visual design and frontend. I write code, tweets and essays. Sometimes I photograph places.
        h3 I'm currently available for work.
    section
      .cols.bordT1.bordB1.padY1
        .col
          .h1 Design
      .cols.bordB1.padY2
        .col
          .h3 Booster — Design System, CSS, Writing
          .h5.uppercase Gigster, 2018
          p.h4 Design smarter to deliver great experiences across multiple client projects, every time. Booster helps Gigster designers deliver prototypes and guides quickly.
          .grid.gridCols.gridGap1
            img(src="/img/booster-site1.jpg")
            img(src="/img/booster-site2.jpg")
            img(src="/img/booster-kit1.jpg")
            img(src="/img/booster-kit2.jpg")
    section
      .cols.bordB1.padY2
        .col
          .h3 Depict — Design, Prototype, CSS
          .h5.uppercase Gigster, 2015
          .h4 Depict needed a
          .grid.gridCols.gridGap1
            img(src="/img/depict-web.jpg")
            img(src="/img/depict-ios.jpg")
            img(src="/img/depict-prototype.jpg")
      .cols.bordB1.padY2
        .col
          .h3 Whiplash — Brand
          .h5.uppercase Whiplash, 2015
          .h4 Whiplash needed a rebrand
          .grid.gridCols.gridGap1
            img(src="/img/whiplash-logo.jpg")
            img(src="/img/whiplash-guide.jpg")
            img(src="/img/whiplash-style1.jpg")
            img(src="/img/whiplash-style2.jpg")
            img(src="/img/whiplash-mockup.jpg")
      .cols.bordB1.padY2
        .col
          .h3 Minka — Brand
          .h5.uppercase Minka, 2018
          p.h4 Research shows that Latin Americans underutilize banking services. With a growing demand among young adults for mobile finance, we asked, what if there was a better bill payment option.
          p.h4 Luka hired me to produce the brand identity, pitch deck, landing page and take the product from blockchain concept to mobile and chat prototype.
          .grid.gridCols.gridGap2
            img(src="/img/luka-app.png")
            img(src="/img/luka-components.png")
            img(src="/img/luka-intro.png")
            img(src="/img/luka-prototypes.png")
</template>
<style>
:root {
  --grid-columns: repeat(3, 1fr);
}
</style>
<script>
</script>
