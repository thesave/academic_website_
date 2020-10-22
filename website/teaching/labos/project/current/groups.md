---
layout: page
title: Groups status
permalink: /teaching/labos/project/current/groups.html
---

<div class="container-fluid">
  <div id="groups" class="row"></div>
</div> 

<script type="text/javascript" src="https://saveriogiallorenzo.com/js/yaml.js"></script>

<script>

var main = function(){
  $.get( "groups.yaml", function( data ) {
    var groups = YAML.parse( data );
    $.each( groups, function( index, grp ) {
        var grp_name = Object.keys( grp )[ 0 ];
        addGroup( grp_name, grp.mbr, grp.sts );
    });
    cleanup();
  });
}

var statusMap = {
  "Registered" : "label-default",
  "Submitted" : "label-primary"
}

var addGroup = function( grp_name, grp_mbr, grp_sts ) {
  var grp = "<div class=\"team col-xs-4\">";
  grp += "<strong>" + grp_name + "</strong>";
  grp +=  "<div><span class=\"label " + statusMap[ grp_sts ] + 
          "\">" + grp_sts + "</span></div>";
  grp += "<ul>";
  $.each( grp_mbr, function( index, mbr ) {
    grp += "<li>" + mbr + "</li>"   
  });
  grp += "</ul></div>";
  $( "#groups" ).append( grp );
}

var cleanup = function() {
  if ( window.jQuery ){
    $( ".team" ).each( function( i, e ){ 
      if ( ++i % 3 == 0 ){ 
        $(e).after("<div class='clearfix'></div>") 
      }
    });
  }
  else {
    setTimeout( function(){ cleanup() }, 50);
  }
}

var onJQueryload = function(){
  if( window.jQuery ){
    main();
  } else {
    setTimeout( function(){ onJQueryload() }, 50);
  }
}
onJQueryload();
</script>