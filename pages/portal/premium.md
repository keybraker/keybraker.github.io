---
layout: page
title: Premium
permalink: /portfolio/portal/premium/
published: true
---

<div class="page" markdown="1">

## Features by version

|        feature        | free | premium |
| :-------------------: | :--: | :-----: |
|    channel manager    |  ✔   |    ✔    |
|        corona         |  ✔   |    ✔    |
| custom channel names  |  ✖   |    ✔    |
| dynamic channel names |  ✖   |    ✔    |
|  text announcements   |  ✖   |    ✔    |
|  voice announcements  |  ✖   |    ✔    |
|    spotify channel    |  ✖   |    ✔    |
| announcement channel  |  ✖   |    ✔    |
|     url channels      |  ✖   |    ✔    |
|         force         |  ✖   |    ✔    |
|         focus         |  ✖   |    ✔    |

<div id="pricing_table"></div>

{% include externals/login_with_discord.html %}
{% include externals/disqus.html %}

</div>

<script type="text/javascript">
    const guilds = JSON.parse(sessionStorage.getItem('guilds'));
    const guilds_owner = guilds.filter(guild => guild.owner);

    let htmlGuilds = '';
    let htmlGuilds1 = '';
    let htmlGuilds2 = '';

    for(let i = 0; i < guilds_owner.length; i++) {
        htmlGuilds += `<div class="column"><input type="image" src="https://cdn.discordapp.com/icons/` +
            `${guilds_owner[i].id}/${guilds_owner[i].icon}.png" class="avatar" alt="avatar_img_alt" ` +
            `title="${guilds_owner[i].name}" onClick="selectGuild('${guilds_owner[i].id}', ` +
            `\`${guilds_owner[i].name}\`, '${3.99}', '${1}')"></div>`;

        htmlGuilds1 += `<div class="column"><input type="image" src="https://cdn.discordapp.com/icons/` +
            `${guilds_owner[i].id}/${guilds_owner[i].icon}.png" class="avatar" alt="avatar_img_alt" ` +
            `title="${guilds_owner[i].name}" onClick="selectGuild('${guilds_owner[i].id}', ` +
            `\`${guilds_owner[i].name}\`, '${20.99}', '${6}')"></div>`;

        htmlGuilds2 += `<div class="column"><input type="image" src="https://cdn.discordapp.com/icons/` +
            `${guilds_owner[i].id}/${guilds_owner[i].icon}.png" class="avatar" alt="avatar_img_alt" ` +
            `title="${guilds_owner[i].name}" onClick="selectGuild('${guilds_owner[i].id}', ` +
            `\`${guilds_owner[i].name}\`, '${29.99}', '${12}')"></div>`;
    }

    document.getElementById("pricing_table").innerHTML = `<h2>Pricing plans</h2><table>
        <tr><th>Duration (months)</th><th>Price $</th><th>Boost (your server)</th></tr>
        <tr><td>1 (one)</td><td>3.99 (3.99/month)</td><td id="one_month">` + 
        `<div id="one_month_pay"class="row">${htmlGuilds}</div></td></tr>
        <tr><td>6 (six)</td><td>20.99 (3.49/month)</td><td id="six_month">` + 
        `<div id="six_month_pay"class="row">${htmlGuilds1}</div></td></tr>
        <tr><td>12 (twelve)</td><td>29.99 (2.49/month)</td><td id="twelve_month">` + 
        `<div id="twelve_month_pay"class="row">${htmlGuilds2}</div></td></tr></table>`;
</script>