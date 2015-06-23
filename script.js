
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
});


$( '#pane-heatmap').click(function() {
  $('#img-heatmapnews').removeClass("top");
  $('#img-heatmapnews').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#heatmapnews').removeClass("bottom");
  $('#heatmapnews').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});

$( '#pane-myenv').click(function() {
  $('#img-myenvironment').removeClass("top");
  $('#img-myenvironment').addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $('#myenvironment').removeClass("bottom");
  $('#myenvironment').addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
});
