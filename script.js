




var currentPage;
var pageImage, greyImage, aboutImage, workImage, contactImage, blogImage;

$(document).ready(function() {
    aboutImage = new Image();
    workImage = new Image();
    contactImage = new Image();
    blogImage = new Image();
    pageImage = new Image();
    greyImage = new Image();

    currentUrl = location.pathname;

    greyImage.src = "images/bggrey.jpg";
    aboutImage.src = "images/bgabout.jpg";
    workImage.src = "images/bgwork.jpg";
    contactImage.src = "images/bgcontact.jpg";
    blogImage.src = "images/bgblog.jpg";

    currentPage = currentUrl.replace("/", "").replace(".php", "");
    if (currentPage == "") {
        currentPage = "about";
    }

    pageImage.src = "images/bg" + currentPage + ".jpg";

    $("#" + currentPage).addClass("current");

    if (currentPage == "about")
        swapImage(pageImage.src, 2000);
    else
        swapImage(pageImage.src, 0);
});

$("#about").hover(function() {
    swapImage(aboutImage.src, 800);
}, function() {
    swapImage(pageImage.src, 0);
});

$("#work").hover(function() {
    swapImage(workImage.src, 800);
}, function() {
    swapImage(pageImage.src, 0);
});

$("#contact").hover(function() {
    swapImage(contactImage.src, 800);
}, function() {
    swapImage(pageImage.src, 0);
});

$("#blog").hover(function() {
    swapImage(blogImage.src, 800);
}, function() {
    swapImage(pageImage.src, 0);
});


function swapImage(src, time) {
    $("#bg-back-image").attr("src", src);

    $("#bg-front").fadeOut(time, function() {
        $("#bg-front-image").attr("src", $("#bg-back-image").attr("src"));
        $("#bg-front").css({display: 'block', opacity: 1});
    });


}
