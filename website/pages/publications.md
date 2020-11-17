---
layout: page
title: Publications
permalink: /publications/
---

<style>
  .paper-title {
    font-weight: 600 !important;
    color: #3c3c3c !important;
  }
  .bib, .abs {
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

<div>
  <a class="paper" href="{{ paper.page }}"></a>
  <span class="bib" onclick="toggle( this, '.bibitem' );"></span>
  <span class="abs" onclick="toggle( this, '.abstract' );"><i class="fas fa-align-left"></i></span>
  {% if paper.additional_material %}<span class="abs" onclick="toggle( this, '.additional_material' );"><i class="fas fa-plus"></i></span>{% endif %}
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

</div>
{% endfor %}



## Seminars and other activities
<div style="height:1em;"></div>

<div class="pub-year">
<span>2020</span>

  <div>
    <a href="/publications/seminars/MC2020.pdf" class="paper"></a> 
    Presentation of the APP language at the <a href="https://conf-micro.services/2020/">.
    International Conference on Microservices 2020</a>.
  </div>

</div>

<div class="pub-year">
<span>2018</span>

  <div>
    <a href="/publications/seminars/MADE18_MSC.pdf" class="paper"></a>
    Presentation of the Microservices Community at the <a href="https://sites.google.com/view/made18/">MADE18 workshop</a>.
  </div>

  <div>
  <a class="demo" ></a>
  Hands-on demo called "<em>Microservices all the way down</em>"
  on programming Microservices with Jolie.
  The introductory <a href="https://github.com/thesave/made18_hands_on" class="paper" ></a>
  slides and the <a href="https://github.com/thesave/made18_hands_on" class="source"></a>
  demo code are available at <a href="https://github.com/thesave/made18_hands_on">
  a dedicated Github repository</a>.
  Demo presented the <a href="https://sites.google.com/view/made18/">MADE18 workshop</a>, co-located with XP2018. 
  <p><em>Short abstract</em>: working code examples that illustrate how the deployment/behaviour division of Jolie programs 
  makes any communicating endpoint a microservices: whether it is a web server, an architectural component or even an IoT 
  device.
  <span style="cursor:pointer" data-target="#MADE18abstract" onclick="toggleTriangle( $( this ) );" >
  <span class="fas fa-lg fa-angle-right"></span>
  Click here to see the full abstract.
  </span></p>

<div class="panel panel-default collapse" id="MADE18abstract">
  <div class="panel-body small">

  <p>One of the main tenets of the microservice approach is to loose the ties among (distributed) software components (i.e., microservices), so that they can be developed, evolved, and scaled independently.
  However, there is one often-overlooked element that binds indirectly together collaborating microservices: communication.
  This binding consists of the dependencies on the libraries and/or frameworks that support the communication protocols and data formats that are chosen in the design of the microservice architecture.
  Regardless of whether this choice was conscious or not, it can quickly lead to technical debt unless it is carefully managed: the programming paradigms of each library tend to leak into the core logic of the microservice, making switching to other communication stacks difficult or even infeasible.
  All of a sudden, the so-advertised resilience of microservices gave way to an inflexible and limiting architecture.</p>

  <p>In this hands-on demonstration we will see, using the Jolie language, how suitable language abstractions can loose these implicit couplings.
  The ultimate aim is to experiment how, through the lens of Jolie, web services, traditional programs, and even IoT devices are all the same: microservices, all the way down.</p>

  </div>
  </div>
</div>


  <div>
    <a class="demo" ></a>
    Booth installation at <a href="https://twitter.com/hashtag/imolaProgramma?src=hash">ImolaProgramma</a>.
People got to know, first hand, how Jolie (through JIoT) evolves the programming of Internet of Things systems, mixing together and interacting with Arduino, Raspberry Pi, gauges, and PLCs (through CoAP, MQTT, and MODBUS).
  </div>

</div>

<div class="pub-year">
<span>2017</span>

  <div>
  <a class="paper" href="seminars/MS2017.pdf"></a>
  Short Paper and the Demo <a href="seminars/MS2017.ioc"><span class="source"></span>Choreographic Code</a>  (<a href="http://www.cs.unibo.it/projects/jolie/aiocj.html">AIOCJ</a>) and <a href="seminars/MS2017_services.zip"><span class="source"></span>Jolie Services</a> on <span>Choreographies for Microservices</span> at Microservices 2017, Odense, Denmark
  </div>

  <div>
  <a class="paper" href="seminars/Eval_Inria_2017_Long.pdf"></a>
  Seminar on <span>Microservices and Choreographies | The SMAll Project</span> for the Workshop on Programming in Sophia-Antipolis, France
  </div>

  <div>
  <a class="paper" href="seminars/Eval_Inria_2017_Short.pdf"></a> 
  Presentation on <span>FoCUS, on Implementations of Service-Oriented Computing</span> for the Evaluation des Projects in Sophia-Antipolis, France  
  </div>

</div>

<div class="pub-year">
<span>2016</span>

  <div>
  <a class="paper" href="seminars/MoM2016.pdf"></a>
  Presentation on <span> Microservices, scenarios of the near and far future</span> at Meeting on Microservices 2016 at Monrif S.p.A., Bologna, Italy
  </div>

  <div>
  <a class="paper" href="seminars/SF2016.pdf"></a> 
  No-slide presentation on <span> A Hands-on Introduction to Jolie</span> for the September Meeting of San Francisco Microservices Meetup at WeaveWorks Inc., San Francisco, CA, U.S. | 
  <a href="seminars/SF2016.zip"><span class="source"></span>Code</a>
  </div>

  <div>
  <a class="paper" href="seminars/Workshop_Sophia_2016.pdf"></a>
  Seminar on <span>Jolie Microservices and Choreographies</span> for the Workshop on Programming Languages in Sophia-Antipolis, France 
  </div>

  <div>
  <a class="paper" href="seminars/BISS2016.pdf"></a>
  Seminar on <span>A Gentle Introduction to Jolie</span> at the Bertinoro International Spring School 2016, Bertinoro, Italy | <a href="seminars/BISS2016.zip"><span class="source"></span>Code</a>
  </div>

</div>

<div class="pub-year">
<span>2015</span>

  <div>
  <a class="paper" href="seminars/Workshop_Sophia_2015.pdf"></a>
  Seminar on <span>Jolie Microservices and Choreographies for the Web</span> for the Workshop on Web/Reactive Programming in Sophia-Antipolis, France
  </div>

</div>

<div class="pub-year">
<span>2014</span>

  <div>
  <a class="video" href="MAMbo"></a>
  Video installed at the <a href="http://www.mambo-bologna.org/en/">Museum of Modern Art in Bologna (MAMbo)</a> for the
  <a href="http://www.mambo-bologna.org/eventi/evento-1350/">DISI public exhibit</a>.
In the video I briefly present Jolie: its history, its purposes, industrial uses, and its community.
  </div>

</div>