---
layout: default
---

<style>.interests a {color: inherit !important;font-weight: inherit;text-decoration: inherit;}</style>

<div class="mb-3 container-flex row d-flex align-items-center justify-content-center" >
 <div class="col-12 small text-muted text-center align-self-start"></div>
 <div class="col-4 col-sm-2 d-flex text-right">
  <img style="max-height:25vw;object-fit:cover;" class="img-fluid" src="/assets/images/photo_id.jpg" alt="">
 </div>
 <div class="d-sm-flex d-none text-right border-right align-self-stretch">
 </div>
 <div class="col-lg-4 col-sm-8 col-12 pt-5 text-justify hyphenate">
  <h2>In a nutshell</h2>
  <ul>
     {% for item in site.data.index.nutshell %}
     <li class="mb-2">{{ item }}{% if forloop.last %}.{% else %};{% endif %}</li>
     {% endfor %}
 </ul>
 </div>
 <div class="col-12 col-sm-8 border-top small text-muted text-center align-self-start mt-3 pt-3">
 <div class="offset-1 col-9 interests">
 <a href="https://en.wikipedia.org/wiki/Programming_language">Programming Languages</a>
 • <a href="https://en.wikipedia.org/wiki/Process_calculus">Process Calculi</a> 
 • <a href="https://en.wikipedia.org/wiki/Service_choreography">Choreographic</a> Programming
 • <a href="https://en.wikipedia.org/wiki/Microservices">Microservices</a> 
 • <a href="https://en.wikipedia.org/wiki/Security_protocol_notation">Session</a> <a href="https://en.wikipedia.org/wiki/Type_system">Types</a>
 • <a href="https://en.wikipedia.org/wiki/Adaptation_(computer_science)">Dynamic Adaptability</a> 
 • <a href="https://en.wikipedia.org/wiki/Computer_security">Security</a>
 </div>
</div>