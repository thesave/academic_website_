---
layout: page
title: Teaching
permalink: /teaching/
---

{% include icons.html %}

## Seminars

Seminar "From Service-Oriented Computing to Microservices and Beyond" for the [Programming Languages](http://unibo.it/en/teaching/course-unit-catalogue/course-unit/2020/320579) course, Università di Bologna, Bologna, IT | 
[{{ pdf_icon }} Slides]({{url}}/teaching/seminars/lp2020/SOCB.pdf)

Seminar "Microservice Security Concepts" for the [Cybersecurity Summer School 2019](https://www.tilmeld.dk/cybersommerskole), KEA Institute, Copenhagen, DK | 
[{{ pdf_icon }} Slides]({{url}}/teaching/seminars/cybersec2019/microservice_security_concepts.pdf)

Seminar "A Gentle Introduction to Jolie" for the [Bertinoro International Spring School 2016](https://cs.unibo.it/projects/biss2016/), University Residential Center, Bertinoro, IT | 
[{{ pdf_icon }} Slides]({{url}}/teaching/seminars/biss2016/a_gentle_introduction_to_Jolie.pdf) | 
[{{ source_icon }}  Examples]({{url}}/teaching/seminars/biss2016/examples.zip)

Seminar on "From Service-Oriented Computing to Microservices and Beyond" for the [Programming Languages](http://unibo.it/en/teaching/course-unit-catalogue/course-unit/2016/320579) course, Università di Bologna, Bologna, IT | 
[{{ pdf_icon }} Slides]({{url}}/teaching/seminars/lp2016/SOC+Microservices.pdf)

---

## Courses

<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <a class="small nav-link active" id="na-tab" data-toggle="tab" href="#na" role="tab" onclick="updateAddress( this );" aria-controls="na" aria-selected="true">Network Analysis</a>
    <a class="small nav-link" id="atcs-tab" data-toggle="tab" href="#atcs" role="tab" onclick="updateAddress( this );" aria-controls="atcs" aria-selected="false">Adv. Topics in Concur. Systems</a>
    <a class="small nav-link" id="los-tab" data-toggle="tab" href="#los" role="tab" onclick="updateAddress( this );" aria-controls="los" aria-selected="false">Op. Systems Laboratory</a>
    <a class="small nav-link" id="geo_introcs-tab" data-toggle="tab" href="#geo_introcs" role="tab" onclick="updateAddress( this );" aria-controls="geo_introcs" aria-selected="false">Intro to CS - Geo. Sc.</a>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="na" role="tabpanel" aria-labelledby="na-tab">{% include_relative _teaching_na.md %}</div>
  <div class="tab-pane fade" id="atcs" role="tabpanel" aria-labelledby="atcs-tab">{% include_relative _teaching_atcs.md %}</div>
  <div class="tab-pane fade" id="los" role="tabpanel" aria-labelledby="los-tab">{% include_relative _teaching_los.md %}</div>
  <div class="tab-pane fade" id="geo_introcs" role="tabpanel" aria-labelledby="geo_introcs-tab">{% include_relative _teaching_introcs.md %}</div>
</div>

<script>
function updateAddress( element ){
  window.location.hash = $( element ).attr( "href" );
  return false;
}
function updateHash(){
  const hash = window.location.hash;
  if( $( "#nav-tab .active" ).attr( "href" ) !== hash ){
    $( hash + "-tab" ).trigger( "click" );
  }
  //  else {
  //   $( "nav :first-child" ).trigger( "click" );
  // }
}
function lazy_load_page(){
  if( typeof $ === "undefined" ){
    setTimeout( lazy_load_page, 250 );
  } else {
    // updateHash();
    $( window ).on( 'hashchange', updateHash );
    setTimeout( updateHash, 250 );
  }
}
lazy_load_page();
</script>