$(document).ready(function() {
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
    setTimeout(showOverlay, 5800);
});
