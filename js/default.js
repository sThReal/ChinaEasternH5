(function(doc, win) {
  var docEl = doc.documentElement,
    size = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      console.log('-------', clientWidth);
      if (clientWidth >= 750) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }
    };
  if (!doc.addEventListener) return;
  win.addEventListener('resize', size, false);
  doc.addEventListener('DOMContentLoaded', size, false);
})(document, window);

function remToPx(rem) {
  return parseInt(rem / 750 * document.documentElement.clientWidth * 100);
}

function pxToRem(px) {
  return parseFloat(px * 750 / document.documentElement.clientWidth / 100);
}