<template lang="pug">
  main.main(role="main")
    .fixed.wid100.bordB1.z10.bgWhite
      nav.nav.cols(role="contentinfo")
        scrollactive(:offset="70").navLeft.col
          a.scrollactive-item(href="#top").hide.serif Vikram Babu
          a.scrollactive-item(href="#product") Product Design
          a(href="/other") Other
        .navRight.col#gridsize.hide
          .small.dark Resize
          a.small(v-on:click="gridSm" role="button") SM
          a.small(v-on:click="gridMd" role="button") MD
          a.small(v-on:click="gridLg" role="button") LG
          a.small(v-on:click="gridXl" role="button") XL
    section.cols.padY2(role="article")
      .col.marT2
        h3#top
          | I'm Vikram, a comprehensive 
          span.serif product designer
          |  and problem solver. I implement 
          span.serif design systems
          | , help teams establish 
          span.serif design operations,
          |  and de-risk projects with 
          span.serif product discovery
          |  to deliver exceptional software to users.
        h4 I recently worked at 
          span.serif Gigster
          |  as a Senior Product Designer where I was responsible for problem definition, interface design, usability testing and project management for internal tools and marketing products. I also led efforts to establish design systems across product groups.
        h4 I'm currently available for work. Take a look at my 
          a(href="/img/vikram-resume.pdf" role="link") resume
          |  or email me: atavikram at gmail dot com.
        fold
          h4 Over my design career I've been a product design fellow and held roles in visual design and frontend, at agencies and in-house. I launched the publication 
            a(href="https://medium.com/endless") Endless
            |  growing it to over 30k+ subscribers and 5M+ reads in its brief year of existence. I was also a regular contributor to 
            span.serif Medium's
            |  technology focused 
            a(href="https://medium.com/message") Message
            | .
          h4 Before working as a design, I was a high school teacher heading a mathematics and technology program. I continue to mentor students at under-resourced East Oakland schools in frontend and design through 
            a(href="https://scripted.org") Scripted
            | .
          h4
            a(href="https://dribbble.com/atav1k") Dribbble
            | —
            a(href="https://github.com/atav1k") Github
            | —
            a(href="https://www.linkedin.com/in/atav1k/") LinkedIn
            | —
            a(href="https://medium.com/@atav1k/") Medium
          h3.marT2 Colophon
          h4 This 
            a(href="https://github.com/atav1k/atav1k") static site
            |  was built in Vue using my own CSS variables driven framework 
            a(href="https://github.com/atav1k/fortune") Fortune
            | , with the fonts 
            a(href="https://github.com/itfoundry/Poppins") Poppins
            |  and 
            a(href="https://fonts.google.com/specimen/Domine") Domine
            | . It uses an active scroll function, grid resizer, and image lazy load for experience but also performance.
    section
      .cols
        .col.bordT1
          .h1.marT2(data-heading="Product")#product Product
      .cols.padY2
        .col6
          h3 1. Building the future of distributed work at 
            span.serif Gigster
        .col6.marT4.marReset
          .h4 App, Internal Tools & Marketing—
            span.serif UX/UI, Usabilty, CSS, Project Management
          p A usability study and component survey contributing to internal products like contractor dashboard and adminstrator payout tools. A marketing blog.
        .col12
          .grid.gridCols.gridGap1
            lazy-image(alt="portfolio" src="/img/gigster-kit2.jpg" placeholder="/img/img.png" img-class="lazy")
            lazy-image(alt="portfolio" src="/img/gigster-kit1.jpg" placeholder="/img/img.png" img-class="lazy")
            lazy-image(alt="portfolio" src="/img/gigster-ux1.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/gigster-ux2.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/gigster-ux6.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/gigster-payouts.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/gigster-blog1.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/gigster-blog2.jpg" placeholder="/img/img.png" img-class="lazy")          
          fold(selected=true).marT2
            h4 From concept to prototype
            p Drawing from my experiences as a Frontend Developer, I initiated moving internal teams over to a design system thus reducing the backlog of unimplemented designs. Previously, the team implemented designs in multiple frontend environments which I reduced to 2.
            p Response time on requested prototypes went from weeks to 48 hours. Developer implementation was significantly reduced from 8 months to a maximum of 1-2 months. The introduction of design constraints through 8px baseline grids and components significantly reduced QA issues during staging. In one instance, a payout tool went from prototype to usability testing and was deployed in 3 weeks.
            p As we rapidly doubled the design team, I researched and authored a heuristic which systematically evaluated user interface. The product group used this heuristic to survey existing products and emerging features for a wide array of experience failures.
            h4 Transferring knowledge to marketing 
            p The maintenance of public sites was bogged down by a poor implementation and it no longer met the requirements of a newly formed marketing team. I saw an opportunity to improve our CSS implementation, which stood at over 500kb, 10k declarations, 300 fonts sizes, and 750 dimensions, so I founded a framework that simplified our CSS to just 50kb, 800 declarations, 20 font sizes, and 75 dimensions.
            .grid.gridCols.gridGap1.marB1
              lazy-image(alt="portfolio" src="/img/gigster-landing1.jpg" placeholder="/img/img.png" img-class="lazy")          
              lazy-image(alt="portfolio" src="/img/gigster-landing2.jpg" placeholder="/img/img.png" img-class="lazy")          
              lazy-image(alt="portfolio" src="/img/gigster-landing3.jpg" placeholder="/img/img.png" img-class="lazy")          
            p I led the migration on the backend from a poorly structured React app to a thoroughly componentized Server Side Rendered (SSR) Vue app with the headless Content Management System (CMS) Contentful supporting the build. The average time to launch marketing pages shifted from 3 months to 2-3 weeks given improvements in how operations were ordered and templates were generated.
            blockquote Vikram is intelligent and self-motivated, driven to work to the best of his ability. He pursued continuous improvement staying informed about the latest design trends and showing interest in the strategic direction of the company. He moderates project discussions collaboratively, pulling together multiple stakeholders, and prioritizing necessary actions. His ability to work closely with engineers allowed us to ship a new blog faster and more efficiently compared to similar previous projects.
              br
              | —Alonzo Felix, Design Director at Gigster
      .cols.padY2
        .col6
          h3 2. Improving designer productivity and client deliverables with 
            span.serif Booster
        .col6.marT4
          .h4 External Tools and Marketing—
            span.serif Component Kit, UX, Frontend, Documentation
          p A Sketch component kit complete with artboards, theming, and presentation layers for contract designers, distributed through a secure microsite cataloging features and tips.
        .col12
          .grid.gridCols.gridGap1
            lazy-image(alt="portfolio" src="/img/booster-site1.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/booster-site2.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/booster-kit1.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/booster-kit2.jpg" placeholder="/img/img.png" img-class="lazy")
          fold.marT2
            h4 Design operations for contractors
            p Bringing attention to the designer network, there were a wide variety of approaches, tools and outcomes from contractor design work. I worked with a team on how to better guide designers.
            .grid.gridCols.gridGap1.marB1
              lazy-image(alt="portfolio" src="/img/booster-map1.jpg" placeholder="/img/img.png" img-class="lazy")          
              lazy-image(alt="portfolio" src="/img/booster-map2.jpg" placeholder="/img/img.png" img-class="lazy")          
            p By interviewing a handful of designers and creating a journey map that captured their experiences at various touchpoints, a roadmap was established for the team. Our first product was a component kit and microsite for designers.
            blockquote Vikram helped grow our global design network by 25% in one quarter, screening and helping recruit qualified designers. And he led work on a design system for that network, helping to increase reliable outputs across a diverse range of client projects.
              br
              | —Alonzo Felix, Design Director at Gigster
      .cols.padY2
        .col6
          h3 3. Increasing user engagement and customer conversion at 
            span.serif Niko
        .col6.marT4
          .h4 App—
            span.serif UX, UI
          p A usability study and updated product strategy driven by customer feedback, SaaS segment study and competitive analysis.
        .col12
          .grid.gridCols.gridGap1
            lazy-image(alt="portfolio" src="/img/niko-app1.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/niko-app2.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/niko-app3.jpg" placeholder="/img/img.png" img-class="lazy")          
            lazy-image(alt="portfolio" src="/img/niko-app4.jpg" placeholder="/img/img.png" img-class="lazy")    
            lazy-image(alt="portfolio" src="/img/niko-app5.jpg" placeholder="/img/img.png" img-class="lazy")                
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
