---
layout: page
title: Premium
permalink: /premium/
published: true
---

<div class="page" markdown="1">

| feature | free  | premium |
| :-----: | :-----: | :-----: |
| channel manager | ✔ | ✔ |
| corona | ✔ | ✔ |
| custom names | ✖ |  ✔ |
| text announcements | ✖ | ✔ |
| voice announcements | ✖ | ✔ |
| spotify channel | ✖ | ✔ |
| announcement channel | ✖ | ✔ |
| url channels | ✖ | ✔ |
| force | ✖ | ✔ |
| focus | ✖ | ✔ |

<!-- ### Introduction price of only 1.49 $ for your first month

| Duration | Price $  | Price/Month $ |
| :-----: | :-----: | :-----: |
| 1  month | 3.99 $ | 3.99 $ |
| 6  months | 20.99 $ | 3.49 $ |
| 12 months | 29.99 $ | 2.49 $ | -->

{% if site.username == null %}
{% include externals/login_with_discord.html %}


{% endif %}

{% if site.username != null %}
<div class="multi-button">
    <button>first month<div>1.49$</div></button>
    <button>1 month<div>3.99$</div></button>
    <button>6 months<div>20.99$</div></button>
    <button>12 months<div>29.99$</div></button>
</div>
{% endif %}

{% if site.selected_server != null %}
    {% include externals/disqus.html %}
{% endif %}

</div>
