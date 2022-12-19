// A $( document ).ready() block.
$(document).ready(function () {
  var gallery = $(".gallery a").simpleLightbox({
    /* options */
    sourceAttr: "href",
    nav: true,
    rel: false,
  });
});
