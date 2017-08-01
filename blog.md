---
title: blog
published: false
group: blog
about: The Magazine presents the content, but sometimes, it's nice to see how it all
  gets put together and what goes on in our heads
layout: page
---

<!-- Blog Posts -->
<section class="">
  <div class="row  container  pa4_m pa3  ">

    {% for post in site.posts limit: 10 %}

    <div class="row pv4">
      <div class="">
        <h3 class="pv1">{{ post.title }}</h3>
        <div class="pv1">{{ post.date | date_to_long_string }}</div>
        <div class="pv4">
          <a href="{{ post.url }}" class="">Read Post</a>
        </div>
      </div>
    </div>

    {% endfor %}

  </div>
</section>

{% include newsletter-segment.html %}
