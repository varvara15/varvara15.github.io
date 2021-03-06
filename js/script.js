$(document).ready(function() {
  $(".container").mCustomScrollbar();

  function hideEl () {
    $(".first-screen").css("display", "none");
  }
  function showOverlay () {
    $(".menu-item").css("cursor", "pointer");
    $(".menu-item").each(function(i) {
        var thisT = $(".overlay").slice(i, i + 1),
            prevT = $(".overlay").slice(0, i),
            nextT = $(".overlay").slice(i + 1);
        $(this).click(function() {
            thisT.toggleClass("open");
            prevT.removeClass("open");
            nextT.removeClass("open");
        });
    });
  }
    setTimeout(hideEl, 6300);
    setTimeout(showOverlay, 5800);
});
