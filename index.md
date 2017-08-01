---
title: index
layout: default
group: white
---

<!-- Frontpage: About -->

<section class="pb6 pt5 pt6_m">
  <div class="row ph3 pv4_m  container">
    <div class="l1of2 tc l xl_m tc dark_muted mh-auto ph2_s ph5_m  ">
      The thoughtful Health and Fitness Quarterly
    </div>
    <div class="l1of2 tc dark_muted mh-auto mb2 pt5_s ph2_s ph5_m  ">
      Welcome to the Fit Letter Club, an ON and OFFline publication. Our purpose is to help readers educate themselves on the topic of health and fitness. Learn how the top practicioners apply existing knowledge to achieve the longest lasting results.
    </div>
  </div>
</section>

<!-- Magazine -->
<section class="top_diagonal-down-1 nt5 nt6_m pt5 pt6_m pb5 pb7_m is-magazine-page ">
  <div class="container pa3 pa4_m row">

    <div class="row mb4 mb5_m pb2 bb-m bw3-m">
      <h2 class="row xxl_s xxxl ttu"> Mag </h2>
      <h3 class="bb-s bw3-s xl_m">Expand your understanding of Health and Fitness</h3>
    </div>

    <div class="row">

      <div class="col l1of2 pr4_m">

        <div class="row mb5">
          <div class="l">A quarterly publication, each issue an in depth exploration of a given topic. We present the background and existing knoweldge of a topic, and weave in interviews with expert practitioners, demonstrating how theory and practice merge together</div>
        </div>
        <div class="row mb4">
          <h3 class="l">In each issue:</h3>
        </div>

        <div class="row s1of1  mb5 ">
          <div class=" col l1of2 mb4  ">
            <span class="">Overview Essays</span>
          </div>
            <div class=" col l1of2 mb4  ">
            <span class="">Expert Interviews</span>
          </div>
            <div class=" col l1of2 mb4  ">
            <span class="">Sample Programs</span>
          </div>
            <div class=" col l1of2 mb4  ">
            <span class="">Fun Facts</span>
          </div>
        </div>

        <div class="row mb5">
          <div class=" row mb4 align-content_center ">
            <a href="" class="no-underline l btn bg_brand-red_dark bg_brand-red_v-dark_hovered light_muted light_hovered">Buy/Subscribe</a>
          </div>
          <div class=" row align-content_center">
              <a href="" class="no-underline l btn bg_brand-red_dark bg_brand-red_v-dark_hovered light_muted light_hovered">Explore This Issue</a>
          </div>
        </div>


      </div>

      <div class="col  ph5 l1of2">
        <div class="grow shadow-1 shadow-2_hovered cover-aspect-ratio_large">
        </div>
      </div>
      </div>
    </div>

</section>

<!-- News Letter Sign up -->

<section class="is-newsletter-page top_diagonal-up-1 nt5 nt7_m pt5 pt6_m pb5 pb7_m ">
  <div class="pa3  pa4_m container row">
    <div class="row dfc mb4 mb5_m pb2 bb-m bw3-m">
      <h2 class=" xxxl_m xxl ttu tr">fit letter</h2>
      <h3 class=" xl_m bb-s bw3-s tr">Curated fitness content around the web</h3>
    </div>

    <div class="row">
      <div class="col dfc l2of3 pr3_m">
        <div class=" mv-auto   ">
          <div class="mb4 ">The world of health and fitness is flooded with articles every day. We'll pick through them and present you with a collection of some the most interesting that. In line with the ethos of our publication, we'll weed out the nonsense.</div>
        </div>
        <div class="signup mv-auto">
          {% include signup-form.html %}
        </div>

      </div>
      <div class="col l1of3 ">
        <div class="dfc mb4">
          <div class=" l ">
            <div class=" tr">Every second wednesday</div>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>


<!-- Blog -->
<section class="is-blog-page top_diagonal-down-1 nt5 nt7_m pt5 pt6_m ">
  <div class="container pa3  pa4_m row ">

    <div class="row mb4 mb5_m  pb2 bb-m bw3-m">
      <h2 class="row xxl_s xxxl ttu">Blog</h2>
      <h3 class=" xl_m bb-s bw3-s">Behind the scenes</h3>
    </div>

    <div class="row">
      <div class="col l1of2 mb4 pr4_m">

        <div class="l">The Magazine presents the content, but sometimes, it's nice to see how it all gets put together and what goes on in our heads</div>
      </div>

      <div class="col l1of2 pl4_m">

        {% for post in site.posts limit:4 %}

        <div class="point-explanation mb4">
          <div class=""><a href="{{ post.url }}" class="l light_hovered light_muted no-underline">{{ post.title }} <i class="fa fa-arrow-right " aria-hidden="true"></i>
          </a></div>
          <div class="">{{ post.excerpt }}</div>
        </div>

        {% endfor %}
      </div>
    </div>


  </div>
</section>
