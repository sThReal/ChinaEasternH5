(function(doc, win) {
  var docEl = doc.documentElement,
    size = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      console.log('-------', clientWidth);


      // alert(clientWidth);
      if (clientWidth >= 750) {
        docEl.style.fontSize = '100px';
      } else {
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      }


      // alert(docEl.style.fontSize);
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

function getQueryString(name) { 
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
  var r = window.location.search.substr(1).match(reg); 
  if (r != null) return unescape(r[2]); 
  return null; 
} 