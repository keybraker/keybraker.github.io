---
layout: page
title: Documentation
permalink: /documentation/
published: true
---

<div class="page" markdown="1">

<div class="tabset">
<!-- Tab 1 -->
<input type="radio" name="tabset" id="tab1" aria-controls="commands" checked>
<label for="tab1">Commands</label>
<!-- Tab 2 -->
<input type="radio" name="tabset" id="tab2" aria-controls="variables">
<label for="tab2">Variables</label>
<!-- Tab 3 -->
<input type="radio" name="tabset" id="tab3" aria-controls="pipes">
<label for="tab3">Pipes</label>
<!-- Tab 3 -->
<input type="radio" name="tabset" id="tab4" aria-controls="attributes">
<label for="tab4">Attributes</label>
<!-- Tab 3 -->
<input type="radio" name="tabset" id="tab5" aria-controls="structures">
<label for="tab5">Structures</label>

<div class="tab-panels">
<section id="commands" class="tab-panel">
<div markdown="1">

* _prefix:_ __./__
* _(Pipes are applied to variables or strings in order to change their outcome)_

| name | description | arguments | eligible for use | cooldown (mins) |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| `portal` | _creates a portal voice channel_ | _!channel\_name \| @category\_name_ | admin, admin-role/s | - |
| `run` | _runs the given command string and returns its output_ | _!exec\_command_ | everyone | - |
| `set` | _sets the value of an attribute_ | _!attribute !value_ | voice owner/ portal owner, admin, admin-role/s | - |
| `url` | _creates a new or sets the current channel as url-only_ | _@channel\_name \| @category\_name_ | admin, admin-role/s | - |
| `spotify` | _creates a new or sets the current channel as spotify_ | _@channel\_name \| @category\_name_ | admin, admin-role/s | - |
| `announcement` | _creates a new or sets the current channel as announcement_ | _@channel\_name \| @category\_name_ | admin, admin-role/s | - |
| `focus` | _creates focus channel for you and your requested user_ | _!username @time (default 5minutes)_ | everyone | - |
| `help` | _returns a help-list if specified returns specific description_ | _@command/@vrbl/@func/@pipe/@attr_ | everyone | - |
| `corona` | _replies with the daily state of corona virus cases_ | _@country code (gr, de, us, etc)_ | everyone | - |
| `role` | _replies with a message that gives roles when an emote is added_ | `[{ emote: 'Description', role: '*' + cmmd.super_description + '*', inline: false }]` | admin, admin-role/s | - |
| `ping` | _returns round trip latency_ | _none_ | everyone | - |
| `join` | _joins current voice channel and announces events_ | _none_ | everyone | 1 user |
| `leave` | _leaves current voice channel_ | _none_ | current portal owner | - |
| `save` | _saves current state of server_ | _none_ | admin, admin-role/s | 5 server |
| `announce` | _prints announcement in announcement channel_ | _@title \| @body_ | everyone | 1 user |
| `force` | _clones current channel in order to force-update name_ | _none_ | admin, admin-role/s | 2 user |
| `focus` | _creates a focus channel for you and your requested member_ | _!member_name @time_ | everyone | none |

* symbol: ! _indicates beginning of mandatory argument **(should not be included)**_
* symbol: @ _indicates beginning of mandatory argument **(should not be included)**_

</div>

</section>
<section id="variables" class="tab-panel">
<div markdown="1">

* _prefix:_ __$__
* _(Variables are defacto data sources that can be accessed though calling them they are read-only)_

| variable | description |
| :---------: | :---------: |
| `#` | _number of channel in list_ |
| `##` | _number of channel in list with \#_ |
| `date` | _full date: dd/mm/yyyy_ |
| `number_day` | _gets the day number_ |
| `name_day` | _gets the day name_ |
| `month` | _gets the month_ |
| `year` | _gets the year_ |
| `time` | _full time: hh/mm/ss_ |
| `hour` | _gets the hour_ |
| `minute` | _gets the minute_ |
| `second` | _gets the second_ |
| `status_list` | _list of current member statuses_ |
| `status_count` | _count of current member statuses_ |
| `status_history` | _history of all the statuses_ |
| `member_list` | _returns the currently played games_ |
| `member_count` | _number of members in channel_ |
| `member_active_count` | _number of members playing_ |
| `member_with_status` | _number of member with given status_ |
| `member_history` | _returns the currently played games_ |
| `creator_portal` | _creator of current voice\'s portal_ |
| `creator_voice` | _creator of current voice_ |

</div>
</section>
<section id="pipes" class="tab-panel">
<div markdown="1">

* _prefix:_ __\|__
* _(Pipes are applied to variables or strings in order to change their outcome)_

| pipe | type | description |
| :---------: | :---------: | :---------: |
| `upperCase` | string | _returns an upperCase of the input_ |
| `lowerCase` | string | _returns an lowerCase of the input_ |
| `capitalize` | string | _returns an capitalize of the input_ |
| `decapitalize` | string | _returns an decapitalize of the input_ |
| `souvlakiCase` | string | _returns an souvlakiCase of the input_ |
| `snakeCase` | string | _returns an snakeCase of the input_ |
| `titleCase` | string | _returns an titleCase of the input_ |
| `camelCase` | string | _returns an camelCase of the input_ |
| `acronym` | string | _returns an acronym of the input_ |
| `word#` | string | _returns \# words of the input_ |
| `populous_count` | number | _returns the count of most common element in list_ |
| `populous` | list | _returns the name of the most common element in list_ |
| `summary_count` | number | _returns the count of members having a status_ |

</div>
</section>
<section id="attributes" class="tab-panel">
<div markdown="1">

* _prefix:_ __@__
* _(Attributes are values that a channel has from its inception and are subject to change)_

| attributes | type | default | description |
| :---------: | :---------: | :---------: | :---------: |
| `regex_portal` | string | _default regex_ | _regex-guidelines for how to display portal's title_ |
| `regex_voice` | string | _default regex_ | _regex-guidelines for how to display new voice (current portal)_ |
| `regex` | string | _default regex_ | _sets regex-guidelines for current voice_ |
| `locale_guild` | string (gr/en/de) | gr | _locale used for **Portal**'s interactions_ |
| `locale_portal` | string (gr/en/de) | gr | _locale used for **Portal**'s interactions_ |
| `locale` | string (gr/en/de) | gr | _locale used for **Portal**'s interactions_ |
| `user_limit_portal` | number | 0 | _guidelines for max number of members for new voice channel from current portal_ |
| `user_limit` | number | 0 | _guidelines for max number of members for current voice_ |
| `bitrate_portal` | number | 64000 | _bitrate of current portal channel_ |
| `bitrate_voice` | number | 64000 | _bitrate of current voice channel_ |
| `position` | number | beneath portal | _position of channel_ |
| `last_update` | timestamp | timestamp | _returns the last update timestamp_ |

* default regex: _G$\#-P$member_count \| $status_list_

</div>
</section>
<section id="structures" class="tab-panel">
<div markdown="1">

* _prefix:_ __\{\{__
* _suffix:_ __\}\}__
* _(Structures are grammatical attributes to control the structure of the output)_

| attributes | description |
| :---------: | :---------: |
| `if` | conditional statement  |

### Usage

```json
{
"if": "John", "is": "===", "with": "John",
"yes": "same name", "no": "not the same name"
}
```

</div>
</section>
</div>

</div>

</div>