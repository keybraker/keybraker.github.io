---
layout: page
title: About
permalink: /portfolio/portal/about/
published: true
---

<div class="page" markdown="1">

## About
Portal is a fast and robust discord bot that allows you to handle your community with ease.
Removing all the hustle and adding all the fun for you and your firends!

It has all the [features]({{ '/features' | prepend: site.baseurl }}). you'll need to control and automate all the necessary functionallity.
Very easy to use with [documentation]({{ '/documentation' | prepend: site.baseurl }}) available to help you get the most out of it.

## Contact Info
  <div class="social2">
    <ul>
      {% if site.author.github %}
      <li>
          <a href="https://github.com/{{ site.author.github }}" target="_blank" class="smaller">
            <span class="icon-github"></span>
          </a>
      </li>
      {% endif %}
      {% if site.author.mail %}
      <li>
          <a href="mailto:{{ site.author.mail }}" target="_blank">
            <span class="icon-mail_outline"></span>
          </a>
      </li>
      {% endif %}
      {% if site.author.twitter %}
      <li>
          <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank" class="smaller">
            <span class="icon-twitter"></span>
          </a>
      </li>
      {% endif %}
      {% if site.author.youtube %}
      <li>
          <a href="https://youtube.com/{{ site.author.youtube }}" target="_blank" class="smaller">
            <span class="icon-youtube"></span>
          </a>
      </li>
      {% endif %}
    </ul>
  </div>
</div>
