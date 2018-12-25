// loading
var load = document.getElementById("loading");
var imgPath = "img/";
var myVideo = document.getElementById("video");
var loadingPage = (function () {
  var imgSources = ['loading/1.png', 'loading/2.png', 'loading/3.png', 'loading/cloud_1.png',
  'loading/cloud_2.png','loading/plane_line.png','loading/plane.png'];
  for (var i = 0; i < imgSources.length; i++) {
    imgSources[i] = (imgPath + imgSources[i]);
  };
  var loadImage = function (path, callback) {
    var img = new Image();
    img.onload = function () {
      img.onload = null;
      callback(path);
    }
    img.src = path;
  }

  var imgLoader = function (imgs, callback) {
    var len = imgs.length, i = 0;
    while (imgs.length) {
      loadImage(imgs.shift(), function (path) {
        callback(path, ++i, len);
      })
    }
  }
  var rateNum = document.getElementById("loading_rate");
  // var bar = document.getElementById("bar");
  var percent = 0;
  imgLoader(imgSources, function (path, curNum, total) {
    percent = parseInt((curNum / total).toFixed(2) * 100);
    console.log(percent);
    $('.loading .percent').html(`${percent}%`);
    $('.plane_color').css('opacity',percent/100);
    if (percent == 100) {
      $('.loading .percent').html(`100%`);
      clearInterval(loadingInterval);
      $('.loading .txt').html(`点击进入`);
      $('.loading').on('click',function(e){
        $('.loading').fadeOut();
        $('#video').css({
          width:'7.5rem',
          height:'15rem',
          'z-index':'2'
        });
        if (myVideo.paused) {
          myVideo.play();
        }
        var endVideo = function () {
          $('.loadingAndVideo').fadeOut();
          $('.page5').fadeIn();
        }
        myVideo.addEventListener("ended", endVideo);
      })
      setTimeout(function () {
        // 加载后的逻辑代码
      }, 500);
    }
  });
})();
var loadingTimes = 0;
var loadingTxt = ['.', '..', '...'];
var loadingInterval = setInterval(function () {
  $('.loading .txt').html(`Loading${loadingTxt[loadingTimes]}`);
  loadingTimes < 3 && loadingTimes++;
  if (loadingTimes == 3) {
    loadingTimes = 0;
  }
}, 800)

document.addEventListener('DOMContentLoaded', function () {
  function audioAutoPlay() {
    var audio = document.getElementById('BGM');
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
      audio.play();
    }, false);
    // console.log(111)
  }
  // audioAutoPlay();
})