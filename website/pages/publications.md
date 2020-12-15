---
layout: page
title: Publications
permalink: /publications/
---

{% include icons.html %}

<style>
  .paper-title {
    font-weight: 600 !important;
    color: #3c3c3c !important;
  }
  .icon {
    cursor: pointer;
  }
</style>
<div class="mt-5"></div>

{% for year in site.data.papers %}
<div class="pub-year">
<span>{{ year.year }}</span>

<script>
function toggle( entry, _class ){
  $( entry ).parent().find( _class ).toggleClass( "d-none" );
}
</script>

{% for paper in year.papers %}

<div class="py-1">
  <a href="{{ paper.page }}">{% if paper.type %}
  {% case paper.type %}
    {% when "conference" %}
      {{ pdf_conference_icon }}
    {% when "journal" %}
      {{ pdf_journal_icon }}
    {% when "other" %}
      {{ pdf_other_icon }}
    {% else %}
      {{ pdf_icon }}
    {% endcase %}
  {% else %}
    {{ pdf_icon }}
  {% endif %}</a>
  <span class="icon" onclick="toggle( this, '.bibitem' );">{{ bib_icon }}</span>
  <span class="icon" onclick="toggle( this, '.abstract' );">{{ abstract_icon }}</span>
  {% if paper.additional_material %}<span class="icon" onclick="toggle( this, '.additional_material' );">{{ plus_icon }}</span>{% endif %}
  {{ paper.bibitem | bibTitle }}
  {% if paper.to_appear %}To appear in: {{ paper.to_appear }}.{% endif %}
  {% if paper.notes %}<em>{{ paper.notes }}</em>.{% endif %}
  <div class="abstract d-none border p-2">
  <strong>Abstract</strong>{{ paper.abstract | markdownify }}
  </div>
  <div class="bibitem d-none border p-2">
  <code><pre class="pt-3">{{ paper.bibitem }}</pre></code>
  </div>
  {% if paper.additional_material %}
  <div class="additional_material d-none border">
    <strong>Additional Material:</strong>
    <ul>
      {% for item in paper.additional_material %}
        <li><a href="{{ item.url }}">{{ item.description }}</a></li>
      {% endfor %}
    </ul>
  </div>
  {% endif %}

</div>

{% endfor %}


{% for editor in year.editors %}

<div class="py-1">
  <span class="text-muted">{{ editor_icon }}</span>
  <span class="icon" onclick="toggle( this, '.bibitem' );">{{ bib_icon }}</span>
  {{ editor.bibitem | bibTitle }}
  <div class="bibitem d-none border p-2">
  <code><pre class="pt-3">{{ editor.bibitem }}</pre></code>
  </div>
</div>

{% endfor %}

</div>
{% endfor %}

{% include_relative _seminars.md %}