---
layout: page
title: Projects
permalink: /projects/
---

Projects list: 
{% for project in site.data.projects %}[{{ project.title }}](#{{project.title | downcase }}){% if forloop.last %}{% else %} • {% endif %}{% endfor %}

Utilities:

- [DBLP Rank](https://openuserjs.org/scripts/thesave/Rank_DBLP): a script to add the ranking of conferences (from GII-GRIN-SCIE) and journals (from SCIMAGO) to a DBLP researcher's page


{% for project in site.data.projects %}
<h1 id="{{ project.title | downcase }}">{{ project.title }}</h1>
<div class="project hyphenate text-justify">
<img class="float-right" src="{{ project.image.url }}" style="margin:20px; width:{{ project.image.width }};">

{{ project.description | markdownify }}

<p style="color:grey;">My contribution</p>
{{ project.contribution | markdownify }}
</div>
{% endfor %}