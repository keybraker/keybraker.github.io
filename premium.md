---
layout: page
title: Premium
permalink: /premium/
published: true
---

<div class="page" markdown="1">

## Features per version

| feature | free  | premium |
| :-----: | :-----: | :-----: |
| channel manager | ✔ | ✔ |
| corona | ✔ | ✔ |
| custom channel names | ✖ |  ✔ |
| dynamic channel names | ✖ |  ✔ |
| text announcements | ✖ | ✔ |
| voice announcements | ✖ | ✔ |
| spotify channel | ✖ | ✔ |
| announcement channel | ✖ | ✔ |
| url channels | ✖ | ✔ |
| force | ✖ | ✔ |
| focus | ✖ | ✔ |

## Pricing plans

<table>
    <tr>
        <th>Duration (months)</th>
        <th>Price $</th>
        <th>Boost (your server)</th>
    </tr>
    <tr>
        <td>1</td>
        <td>3.99 (3.99/month)</td>
        <td id="one_month"></td>
    </tr>
    <tr>
        <td>6</td>
        <td>20.99 (3.49/month)</td>
        <td id="six_month"></td>
    </tr>
    <tr>
        <td>12</td>
        <td>29.99 (2.49/month)</td>
        <td id="twelve_month"></td>
    </tr>
</table>
<b>Introduction price of only 1.49 $ for your first month</b>

{% include externals/login_with_discord.html %}

</div>

<script type="text/javascript">
    const guilds = JSON.parse(sessionStorage.getItem('guilds'));
    const guilds_owner = guilds.filter(guild => guild.owner);

    let htmlOutput = '<div id="one_month_pay"class="row">';
    for(let i = 0; i < guilds_owner.length; i++) {
        const guild_url = `https://cdn.discordapp.com/icons/${guilds_owner[i].id}/${guilds_owner[i].icon}.png`;
        htmlOutput += '<div class="column">'
        htmlOutput += '<input type="image" src="' + guild_url + '" class="avatar" alt="avatar_img_alt" title="' + guilds_owner[i].name + '">'
        htmlOutput += '</div>'
    }
    htmlOutput += '</div>';
    document.getElementById("one_month").innerHTML = htmlOutput;

    htmlOutput = '<div id="six_month_pay"class="row">';
    for(let i = 0; i < guilds_owner.length; i++) {
        const guild_url = `https://cdn.discordapp.com/icons/${guilds_owner[i].id}/${guilds_owner[i].icon}.png`;
        htmlOutput += '<div class="column">'
        htmlOutput += '<input type="image" src="' + guild_url + '" class="avatar" alt="avatar_img_alt" title="' + guilds_owner[i].name + '">'
        htmlOutput += '</div>'
    }
    htmlOutput += '</div>';
    document.getElementById("six_month").innerHTML = htmlOutput;

    htmlOutput = '<div id="twelve_month_pay"class="row">';
    for(let i = 0; i < guilds_owner.length; i++) {
        const guild_url = `https://cdn.discordapp.com/icons/${guilds_owner[i].id}/${guilds_owner[i].icon}.png`;
        htmlOutput += '<div class="column">'
        htmlOutput += '<input type="image" src="' + guild_url + '" class="avatar" alt="avatar_img_alt" title="' + guilds_owner[i].name + '">'
        htmlOutput += '</div>'
    }
    htmlOutput += '</div>';
    document.getElementById("twelve_month").innerHTML = htmlOutput;
</script>