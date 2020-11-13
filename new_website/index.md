---
layout: default
---

<div class="mb-3 container-flex row d-flex align-items-center justify-content-center" style="flex:1;" >
 <div class="col-4 col-sm-2 d-flex text-right pb-5">
  <img style="max-height:33vw;" class="img-fluid" src="/assets/images/photo_id.jpg" alt="">
 </div>
 <div class="d-sm-flex d-none text-right border-right align-self-stretch">
 </div>
 <div class="col-lg-4 col-sm-8 col-12 pt-5 pb-5">
  <h2>In a nutshell</h2>
  <ul>
     {% for item in site.data.index.nutshell %}
     <li class="mb-2">{{ item }}</li>
     {% endfor %}
 </ul>
 <div class="col-12"></div>
 </div>
</div>