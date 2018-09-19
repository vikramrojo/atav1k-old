<template lang="pug">
  main.main(role="main")
    .fixed.wid100.bordB1.z10.bgWhite
      nav.nav.cols(role="contentinfo")
        scrollactive(:offset="70").navLeft.col
          a(href="/").serif Vikram
          a.scrollactive-item(href="#design") Design
          a.scrollactive-item(href="#words") Writing
        .navRight.col#gridsize.hide
          .small.dark Resize
          a.small(v-on:click="gridSm" role="button") SM
          a.small(v-on:click="gridMd" role="button") MD
          a.small(v-on:click="gridLg" role="button") LG
          a.small(v-on:click="gridXl" role="button") XL
    section.cols.padY2(role="article")
      .col.marT2
        h3#top
          | In addition to product design, I occasionally work as a 
          span.serif brand designer
          | . I'm also a published 
          span.serif writer
          | , focused on the humanities and technology.
    section
      .cols
        .col.bordT1
          .h1.marT2(data-heading="Design")#design Design
      .cols.padY2
        .col
          .h4 Reordering Fulfillment—
            span.serif Branding
          p
            span.serif Whiplash
            | —2015
          p A new logo with accompanying color and style directions to market order fulfillment services to retailers and makers.
          .grid.gridCols.gridGap1
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/whiplash-logo.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/whiplash-guide.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/whiplash-style1.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/whiplash-style2.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/whiplash-mockup.jpg")
          fold.marT2
            h4 Exploring new styles
            p What began as a new logomark eventually continued into a sophisticated brand identity meant to attract medium to large boutique retailers.
            p I explored a number of different visual styles to see what resonated with the Whiplash team. Following a number of explorations we narrowed it down to some core styles, gradients and fonts.
      .cols.padY2
        .col
          .h4 Latam Banking—
            span.serif Branding
          p
            span.serif Luka
            | —2017
          p A brand identity, style guide, landing page and component guide with accompanying research to take a product from blockchain concept to prototype.
          .grid.gridCols.gridGap1
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/luka-logo.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/luka-guide.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/luka-marketing.jpg")            
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/luka-components.jpg")
      .cols.padY2
        .col
          .h4 Logo Making—
            span.serif Branding
          p
            span.serif Misc
            | —2017
          p Supplying small projects with logos.
          .grid.gridCols.gridGap1
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/logo-teja-1.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/logo-minka.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/logo-asap.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/logo-push-pull.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/logo-wu.jpg")
            lazy-image(placeholder="/img/img.png" img-class="lazy" src="/img/logo-endless.jpg")
    section
      .cols
        .col.bordT1
          .h1.marT2(data-heading="Words")#words Words
      .cols.padY2
        .col
          .h4 Do You Know What Your Toddler Is Watching On YouTube?
          p An essay with commissioned artwork for a piece after watching toddlers use an iPad to surf YouTube.
            br
            a(href="http://medium.com/message/do-you-know-what-your-toddler-is-watching-on-youtube-409e71bd4cba") Message
            | —2015
          .h4 Is Mars Man's Midlife Crisis
          p A response to the Mars hype looking into the motivations and implications of Mars colonization with commissioned artwork.
            br
            a(href="https://medium.com/message/is-mars-man-s-midlife-crisis-cab4723c611d") Message
            | —2015
          .h4 Surveying Your Identity Or Surveillance
          p A speculative design essay on how do we might better identify users online beyond traditional fields and binaries.
            br
            a(href="https://medium.com/message/beyond-identity-binary-and-surveillance-d287f65521cd") Message
            | —2015
    nav.bordT1(role="contentinfo")
      .nav.cols
        .col.navLeft
          a(href="https://dribbble.com/atav1k") Dribbble
          a(href="https://github.com/atav1k") Github
          a(href="https://www.linkedin.com/in/atav1k/") LinkedIn
          a(href="https://medium.com/@atav1k/") Medium
</template>
<script>
import Fold from "~/components/fold"

export default {
  components: {
    Fold,
  },
  methods: {
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
    },
    gridXl: function (event) {
      var box = document.querySelector(".main");
      box.style.setProperty('--grid-columns', 'repeat(1, 1fr)')
    }    
  },
}
</script>
