/*global window, document*/

function canonify() {

  // Set golden rectangle (horizontal) height
  var h = document.getElementsByClassName("golden-rect-horiz");
  var i = h.length;
  while (i--) {
    h[i].style.height = h[i].clientWidth / 1.618;
  }

  // Set golden rectangle (vertical) height
  var v = document.getElementsByClassName("golden-rect-vert");
  i = v.length;
  while (i--) {
    v[i].style.height = v[i].clientWidth * 1.618;
  }

  // Process elements of the Van de Graaf canon.
  var vdg = document.getElementsByClassName("vandegraaf");
  i = vdg.length;
  var windowHeight = window.innerHeight;
  var blockHeight, topPadding, bottomPadding;

  while (i--) {
    blockHeight = vdg[i].clientHeight;
    topPadding  = 0.11 * ((blockHeight < windowHeight) ? blockHeight : windowHeight);
    bottomPadding = 2 * topPadding;
    vdg[i].style.paddingTop = topPadding;
    if (
      vdg[i].nextElementSibling && (
        vdg[i].nextElementSibling.classList.contains("vandegraaf") ||
        vdg[i].nextElementSibling.classList.contains("row")
      )
    ) {
      // collapse bottom padding for stacked VDGs
      vdg[i].style.paddingBottom = 0;
    } else {
      vdg[i].style.paddingBottom = bottomPadding;
    }
  }

}

if (window.addEventListener) {
  window.addEventListener('resize', canonify, false);
  window.addEventListener('load', canonify, false);
} else if (window.attachEvent) {
  window.attachEvent('onresize', canonify);
  window.attachEvent('onload', canonify);
}