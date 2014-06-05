/*global window, document*/

/**
 *  Adjust CSS properties that can't be correctly set through CSS.
 *
 */

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
  var blockHeight, blockWidth, topPadding, bottomPadding;

  while (i--) {

    blockHeight = vdg[i].clientHeight;
    blockWidth  = vdg[i].clientWidth;
    topPadding  = 0.11 * ((blockHeight < windowHeight) ? blockHeight : windowHeight);
    bottomPadding = 2 * topPadding;
    vdg[i].style.paddingTop = topPadding;
    if (vdg[i].classList.contains('multicolumn')) {
      vdg[i].style.MozColumnGap = vdg[i].style.webkitColumnGap = vdg[i].style.columnGap = 0.11 * blockWidth + "px";
    }

    if (vdg[i].classList.contains("nofooter")) {
      // collapse bottom padding for stacked VDGs
      vdg[i].style.paddingBottom = 0;
    } else {
      vdg[i].style.paddingBottom = bottomPadding;
    }
  }

}

/**
 * Add event listener for window resize an adjust CSS
 * properties accordingly
 *
 */
if (window.addEventListener) {
  window.addEventListener('resize', canonify, false);
  window.addEventListener('load', canonify, false);
} else if (window.attachEvent) {
  window.attachEvent('onresize', canonify);
  window.attachEvent('onload', canonify);
}