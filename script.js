
$( '#button-projects' ).click(function() {
    $('#projects').removeClass("top");
    $('#projects').addClass("current");
    $('#about').removeClass("current");
    $('#about').addClass("bottom");
});

$( '#button-about').click(function() {
    current = $('.l-panel-right .current');
    if (!current.is('#about')) {
        current.removeClass("current");
        current.addClass("top");
        $('#about').removeClass("bottom");
        $('#about').addClass("current");
    }
})

$( '.button-back').click(function() {
    current = $('.l-panel-right .current');
    currentLeft =  $('.l-panel-left .current');
    if (!current.is('#about')) {
        current.removeClass("current");
        current.addClass("top");
        $('#projects').removeClass("bottom");
        $('#projects').addClass("current");

        currentLeft.removeClass("current");
        currentLeft.addClass("bottom");
        $('#home').removeClass("top");
        $('#home').addClass("current");
    }
})

projects = ['heatmapnews', 'lightfield', 'tombofterror', 'rasteriser', 'raytracer', 'robot', 'animation', 'freezebox', 'geddit', 'myenvironment']

$( '#pane-cryptoconomy').click(function() {
  $('#img-cryptoconomy').removeClass("top");
  $('#img-cryptoconomy').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#cryptoconomy').removeClass("bottom");
  $('#cryptoconomy').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});


$( '#pane-heatmapnews').click(function() {
  $('#img-heatmapnews').removeClass("top");
  $('#img-heatmapnews').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#heatmapnews').removeClass("bottom");
  $('#heatmapnews').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});

$( '#pane-lightfield').click(function() {
  $('#img-lightfield').removeClass("top");
  $('#img-lightfield').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#lightfield').removeClass("bottom");
  $('#lightfield').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});

$( '#pane-tombofterror').click(function() {
  $('#img-tombofterror').removeClass("top");
  $('#img-tombofterror').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#tombofterror').removeClass("bottom");
  $('#tombofterror').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});

$( '#pane-rasteriser').click(function() {
  $('#img-rasteriser').removeClass("top");
  $('#img-rasteriser').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#rasteriser').removeClass("bottom");
  $('#rasteriser').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});


$( '#pane-raytracer').click(function() {
  $('#img-raytracer').removeClass("top");
  $('#img-raytracer').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#raytracer').removeClass("bottom");
  $('#raytracer').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});


$( '#pane-robot').click(function() {
  $('#img-robot').removeClass("top");
  $('#img-robot').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#robot').removeClass("bottom");
  $('#robot').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});

$( '#pane-animation').click(function() {
  $('#img-animation').removeClass("top");
  $('#img-animation').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#animation').removeClass("bottom");
  $('#animation').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});

$( '#pane-freezebox').click(function() {
  $('#img-freezebox').removeClass("top");
  $('#img-freezebox').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#freezebox').removeClass("bottom");
  $('#freezebox').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});



$( '#pane-geddit').click(function() {
  $('#img-geddit').removeClass("top");
  $('#img-geddit').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#geddit').removeClass("bottom");
  $('#geddit').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});






$( '#pane-myenvironment').click(function() {
  $('#img-myenvironment').removeClass("top");
  $('#img-myenvironment').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#myenvironment').removeClass("bottom");
  $('#myenvironment').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});
