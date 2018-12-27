// loading
var load = document.getElementById("loading");
var imgPath = "img/";
var myVideo = document.getElementById("video");
var audio = document.getElementById('BGM');
var loadingPage = (function () {
  var imgSources = ['loading/cloud_1.png','loading/cloud_2.png','loading/plane_line.png','loading/plane.png','arrow.png',
'page5/bg.jpg','page5/buildings.png','page_end/bottom_end_btn_07.png','page_end/canvas_logo_03.png',
'page_end/page_end_aircraft_02.png','page_end/page_end_bg.jpg','page_end/page_end_btn_03.png',
'page_end/page_end_lady_02.png','page_end/page_end_reco_02.png','page_end/page_end_text_bg_11.png','page_end/page_end_title_03.png',
'page_end/page_end_watch_05.png','page_end/person_type_07.png','page9/bg11.jpg','page9/cloud-1.png','page9/cloud-2.png',
'page9/cloud-3.png','page9/cloud-4.png','page9/page9-bg2.jpg','page9/page9-box.png','page9/page9-door.png',
'page9/page9-light.png','page9/page9-panel.png','page9/page9-stewardess.png','page9/page10-bg.jpg','page9/page10-plane.png',
'page9/page10-shd.png','page9/page11-bg.jpg','page9/page11-cloud.png','page9/page11-plane.png','page9/page12-cloud.png',
'page14/bgsky.jpg','page14/page_14_aircraft.png','page14/page_14_bg.jpg','page14/page_14_building.png','page14/page_14_click_03.png',
'page14/page_14_earth.png'];
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
    // console.log(percent);
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
          height:'13.34rem',
          'z-index':'2'
        });
        if (myVideo.paused) {
          myVideo.play();
        }
        var endVideo = function () {
          $('.loadingAndVideo').fadeOut(1500);
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
    audio.play();
    $(".music_play").show().addClass("xz");
    document.addEventListener("WeixinJSBridgeReady", function () {
      audio.play();
      $(".music_play").show().addClass("xz");
    }, false);
    // console.log(111)
  }
  audioAutoPlay();
})
$(".music_play").on("click",function () {
  if(window.musicStart){
    audio.pause();
    $(".music_play").removeClass("xz");
    window.musicStart = false;
  }else{
    audio.play();
    $(".music_play").addClass("xz");
    window.musicStart = true;
  }
})