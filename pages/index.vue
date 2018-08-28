<template lang="pug">
  main.main
    .fixed.wid100.bordB1.z10.bgWhite
      nav.nav.cols
        scrollactive(:offset="70").navLeft.col
          a.scrollactive-item(href="#top").bold.hide.padL0 Vikram Babu
          a.scrollactive-item(href="#product") Product
          a.scrollactive-item(href="#design") Design
          a.scrollactive-item(href="#words") Words
        .navRight.col#gridsize.hide
          .small.silver Resize
          a.small(v-on:click="gridSm") SM
          a.small(v-on:click="gridMd") MD
          a.small(v-on:click="gridLg") LG
    section.cols.padY2
      .col.marT2
        h3#top
          | Vikram implements 
          span.serif Design Systems
          | , coaches teams on 
          span.serif Design Operations
          |  and de-risks projects with 
          span.serif Product Discovery.
        h4 My design approach is to create solutions that can be systematically reproduced so teams get multiples on design output. I recently worked at 
          a(href="https://gigster.com") Gigster
          |  as a Senior Product Designer, focused on building design systems, helping teams deliver projects reliably while shipping internal tools and marketing products.
        fold
          h4 Over my design career, I've been a product design fellow, and held roles in visual design and frontend at agencies and in-house. I also launched the publication 
            a(href="https://medium.com/endless") Endless
            | , growing it to over 30k+ subscribers and 5M+ reads in it's brief year of existence. As well, I was a regular contributor to 
            span.serif Medium's
            |  technology focused 
            a(href="https://medium.com/message") Message
            | .
          h4 Before that I was a high school teacher heading a mathematics and technology program. I continue to mentor students at under-resourced schools in frontend and design through 
            a(href="https://scripted.org") Scripted
            |  in East Oakland.
          h4
            a(href="https://dribbble.com/atav1k") Dribbble
            | —
            a(href="https://github.com/atav1k") Github
            | —
            a(href="https://www.linkedin.com/in/atav1k/") LinkedIn
            | —
            a(href="https://medium.com/@atav1k/") Medium
          h3.marT2 Colophon
          h4 This static site was built in Vue using my own CSS variables driven framework 
            a(href="https://github.com/atav1k/fortune") Fortune
            |  with the fonts 
            a(href="https://github.com/itfoundry/Poppins") Poppins
            |  and 
            a(href="https://fonts.google.com/specimen/Stoke") Stoke
            | .
    section
      .cols
        .col.bordT1
          .h1.marT2(data-heading="Product")#product Product
      .cols.padY2
        .col
          .h4 A Needed Booster—
            span.serif Component Kit, UX, Frontend, Documentation
          p
            span.serif Gigster
            | —2018
          p A Sketch component kit complete with artboards, themeing and presentation layers for contract designers. Distributed through a secure microsite cataloging features and tips.
          .grid.gridCols.gridGap1
            img(src="/img/booster-site1.jpg")
            img(src="/img/booster-site2.jpg")
            img(src="/img/booster-kit1.jpg")
            img(src="/img/booster-kit2.jpg")
          fold.marT1
            h4 Design operations for contractors
            p Bringing attention to the designer network, there were a wide variety of approaches, tools and outcomes from contractor design work. I worked with a team on how to better guide designers.
            p By interviewing a handful of designers and creating a journey map that captured their experiences at various touchpoints, a roadmap was established for the team. Our first product was a component kit and microsite for designers.
      .cols.padY2
        .col12
          .h4 Tools & Marketing—
            span.serif UX/UI, Usabilty, CSS, Project Management
          p
            span.serif Gigster
            | —2018
          p A usability study and component survey contributing to internal products like contractor dashboard and adminstrator payout tools. A marketing blog.
          .grid.gridCols.gridGap1
            img(src="/img/booster-kit3.jpg")          
            img(src="/img/gigster-ux1.jpg")
            img(src="/img/gigster-ux2.jpg")
            img(src="/img/gigster-ux6.jpg")
            img(src="/img/gigster-payouts.jpg")
            img(src="/img/gigster-blog1.jpg")
            img(src="/img/gigster-blog2.jpg")
          fold.marT1
            h4 From concept to prototype
            p Drawing from my experiences as a Frontend Developer, I initiated a project to move internal teams over to a design system to reduce the backlog of unimplemented designs. Prior to my work, the team implemented 5 different frontend environments which was reduced to two.
            p Response time on requested prototypes went from weeks to 48 hours. Developer implementation likewise was significantly reduced from a peak of 8 months to 1-2 months. The introduction of design constraints through 8px baseline grids and components significantly reduced QA issues during staging.
            p As we rapidly doubled the design team, I researched and authored a heuristic to systematically evaluate user interfaces. The product group used this heuristic to survey existing products and emerging features for a wide array of experience fails.
            h4 Transferring knowledge to Marketing 
            p The maintenance of public sites was bogged down by a poor implementation and it no longer met the requirements of a newly formed marketing team. Seeing an opportunity to improve our CSS implementation, which stood at over 500kb, 10k declarations, 300 fonts sizes & 750 dimensions, I founded a framework that simplified our CSS to just 50kb, 800 declarations, 20 font sizes & 75 dimensions.
            p I led the migration on the backend from a poorly structured React app to a thoroughly componentized Server Side Rendered Vue app with the headless CMS Contentful supporting the build. The average time to launch marketing pages shifted from 3 months to 2-3 weeks given improvements in how operations were ordered and templates were generated.
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
            img(src="/img/whiplash-logo.jpg")
            img(src="/img/whiplash-guide.jpg")
            img(src="/img/whiplash-style1.jpg")
            img(src="/img/whiplash-style2.jpg")
            img(src="/img/whiplash-mockup.jpg")
          fold.marT1
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
          p A brand identity, style guide, landing page and component guide with accompanying reasearch to take a product from blockchain concept to prototype.
          .grid.gridCols.gridGap1
            img(src="/img/luka-logo.jpg")
            img(src="/img/luka-guide.jpg")
            img(src="/img/luka-marketing.jpg")            
            img(src="/img/luka-components.jpg")
      .cols.padY2
        .col
          .h4 Logo making—
            span.serif Branding
          p
            span.serif Misc
            | —2017
          p Supplying small projects with logos.
          .grid.gridCols.gridGap1
            img(src="/img/logo-teja-1.jpg")
            img(src="/img/logo-minka.jpg")
            img(src="/img/logo-asap.jpg")
            img(src="/img/logo-push-pull.jpg")
            img(src="/img/logo-wu.jpg")
            img(src="/img/logo-endless.jpg")
    section
      .cols
        .col.bordT1
          .h1.marT2(data-heading="Words")#words Words
      .cols.bordB1.padY2
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
    nav.nav.cols
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
    }
  },
}
</script>
