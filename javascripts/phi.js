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
    topPadding  = 0.11 * ((blockHeight < windowHeight) ? blockHeight : windowHeight);
    bottomPadding = 2 * topPadding;
    vdg[i].style.paddingTop = topPadding;
    if (vdg[i].classList.contains('multicolumn')) {
      blockWidth  = vdg[i].clientWidth;
      vdg[i].style.MozColumnGap = vdg[i].style.webkitColumnGap = vdg[i].style.columnGap = 0.11 * blockWidth + "px";
    }

    // collapse bottom padding for stacked VDGs
    if (vdg[i].classList.contains("nofooter")) {
      vdg[i].style.paddingBottom = 0;
    } else {
      vdg[i].style.paddingBottom = bottomPadding;
    }
  }

  // Process elements of the Tschichold canon
  var tsc = document.getElementsByClassName("tschichold");
  i = tsc.length;
  while (i--) {
    if (tsc[i].classList.contains('multicolumn')) {
      blockWidth = tsc[i].clientWidth;
      tsc[i].style.MozColumnGap = tsc[i].style.webkitColumnGap = tsc[i].style.columnGap = 0.11 * blockWidth + "px";
    }

    // collapse bottom padding for stacked Tschicholds
    if (tsc[i].classList.contains("nofooter")) {
      tsc[i].style.paddingBottom = 0;
    }
    if (tsc[i].classList.contains("noheader")) {
      tsc[i].style.paddingTop = 0;
    }
    // TODO. DRYify, just use CSS to collapse anything with nofooter.
  }

  var gdm = document.getElementsByClassName('golden-margins');
  i = gdm.length;
  while (i--) {
    blockHeight = gdm[i].clientHeight;
    topPadding = 0.191 * ((blockHeight < windowHeight) ? blockHeight : windowHeight);
    if (!gdm[i].classList.contains('noheader')) {
      gdm[i].style.paddingTop = topPadding;
    }
    if (!gdm[i].classList.contains('nofooter')) {
      gdm[i].style.paddingBottom = topPadding;
    }
  }
}

/**
 * Add event listener for window resize; adjust CSS properties accordingly
 */
if (window.addEventListener) {
  window.addEventListener('resize', canonify, false);
  window.addEventListener('load', canonify, false);
} else if (window.attachEvent) {
  window.attachEvent('onresize', canonify);
  window.attachEvent('onload', canonify);
}