





function goToPage(img, page) {
  return function() {
  $(img).removeClass("top");
  $(img).addClass("current");
  $('#projects').removeClass("current");
  $('#projects').addClass("bottom");

  $(page).removeClass("bottom");
  $(page).addClass("current");
  $('#home').removeClass("current");
  $('#home').addClass("top");
}
}

for (var i = 0; i < projects.length; i++) {
  
  pageDiv = `<div class="bottom slide" id="project`+i+`">` + `
      <div class="l-container">
          <div class="content">
            <h2 class="button-back"><i class="fa fa-chevron-up" aria-hidden="true"></i></h2>
            <p>`+projects[i][2]+`</p>
          </div>
      </div>
  </div>`

  paneDiv = `<div id="pane-project`+i+`" class="pane" style="background-image: url('images/`+projects[i][1]+`')">`+projects[i][0]+`</div>`

  imgDiv = `<div class="top slide" style="background-image: url('images/`+projects[i][1]+`')" id="img-project`+i+`">
        <div class="l-container">
            <h1>`+projects[i][0]+`</h1>
        </div>
    </div>`

  $(".l-panel-left").append(pageDiv);
  $(".l-panel-right").append(imgDiv);
  $("#projects").append(paneDiv);

  $('#pane-project'+i).click(goToPage('#img-project'+i, '#project'+i));
}

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
