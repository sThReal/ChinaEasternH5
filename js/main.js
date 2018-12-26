
;var page5 = new Hammer(document.querySelector(".page5"));
    page5.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    page5.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    $('.page5 .arrow').css('opacity', 1);
    $('.page5 .txt').css('opacity', 1);
    page5.on('swipeup', function (e) {
      console.log(e, 'page5向上');
      $('.page5 img').css({
        transform: 'translateY(200px)',
        opacity: 0
      })
      $('.page5').css('opacity',0);
      $('.page9').fadeIn(1500).addClass('animate');
      setTimeout(function () {
        // 值机柜台
        var page9 = new Hammer(document.querySelector(".page9"));
        page9.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        page9.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        // $('.page9 .arrow').css('opacity', 1);
        page9.on('swipeup', function (e) {
          console.log(e, 'page9向上');
          $('.page9').addClass('leave').fadeOut(1000);
          $('.page10').fadeIn().addClass('animate');
          // 停机坪
          setTimeout(function () {
            var page10 = new Hammer(document.querySelector(".page10"));
            page10.get('pan').set({ direction: Hammer.DIRECTION_ALL });
            page10.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            // $('.page10 .arrow').css('opacity', 1);
            page10.on('swipeup', function (e) {
              console.log(e, 'page10向上');
              $('.page10').fadeOut(1000);
              $('.page11').fadeIn(500).addClass('animate');
              $('.page11_12').show();
              $('.page11_12 img').addClass('animation')
              // 在云端1
              setTimeout(function () {
                var page11 = new Hammer(document.querySelector(".page11"));
                page11.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                page11.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
                // $('.page11 .arrow').css('opacity', 1);
                page11.on('swipeup', function (e) {
                  console.log(e, 'page11向上');
                  $('.page11').addClass('leave').fadeOut(1000);
                  $('.page12').fadeIn().addClass('animate');
                  // 在云端2
                  setTimeout(function () {
                    var page12 = new Hammer(document.querySelector(".page12"));
                    page12.get('pan').set({ direction: Hammer.DIRECTION_ALL });
                    page12.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
                    // $('.page12 .arrow').css('opacity', 1);
                    page12.on('swipeup', function (e) {
                      console.log(e, 'page12向上');
                      $('.page12').addClass('leave');
                      setTimeout(function(){
                        $('.page14').fadeIn(1000);
                        $('.page11_12').fadeOut(1000);
                        $('.page12').fadeOut(1000);
                          setTimeout(function () {
                              $('.page14 .aircraft').css({
                                  'animation': 'newAircraftSecond 9s 0s linear forwards infinite',
                                  '-webkit-animation': 'newAircraftSecond 9s 0s linear forwards infinite',
                              });
                          }, 1200)
                      },1500)
                      //确保飞机已经进入界面

                      $("#page_14_aircraft").click(function () {
                        console.log("aircraft leave~");
                        $('.page14 .aircraft').animate({
                          left: '7.5rem',
                          top: '-0.6rem',
                        }, 600);
                        $(".page14").find('.when_15_appear').fadeOut(500);
                        setTimeout(function () {
                          $("#main_page_15").fadeIn(800);
                        }, 500)
                      })
                        $("#eastern_recommend").click(function () {
                            $("#ad_layer").fadeIn(600);
                        })

                      $("#ad_layer").click(function () {
                          $("#ad_layer").fadeOut(600);
                      })   
                        
                      $("#checkout_img").click(function () {
                          window.loading = layer.open({
                              type: 2,
                              content: '生成中',
                              shadeClose:false,
                          });
                        if (window.base64ImgSrcAnother) {
                            setTimeout(function () {
                                layer.close(window.loading);
                            },200)
                          $("#page_absolute_4_img").fadeIn(500);
                          $("#page_absolute_4_img").find('img').attr("src", window.base64ImgSrcAnother);
                          return;
                        }
                        var canvas = document.createElement("canvas");
                        canvas.width = 750;
                        canvas.height = 1400;
                        var opts = {
                          canvas: canvas,                       // 将自定义canvas作为配置项
                          // useCORS: true,                        // 允许图片跨域
                        }
                        html2canvas(document.querySelector("#page_4_img"), opts).then(function (canvas) {
                          window.base64ImgSrc = canvas.toDataURL("image/jpeg", .92);
                          // console.log(window.base64ImgSrc);
                          $("#canvasImg").attr("src", window.base64ImgSrc)
                        }).then(function () {
                          console.log("生成base64图片源码~~!");
                          var canvas = document.createElement("canvas");
                          canvas.width = 750;
                          canvas.height = 1450;
                          var opts = {
                            canvas: canvas,                       // 将自定义canvas作为配置项
                            //                     useCORS: true,                        // 允许图片跨域
                          }
                          html2canvas(document.querySelector("#page_for_canvas"), opts).then(function (canvas) {
                            window.base64ImgSrcAnother = canvas.toDataURL("image/jpeg", .72);
                          }).then(function () {
                            setTimeout(function () {
                                layer.close(window.loading);
                            },200)
                              $("#page_absolute_4_img").fadeIn(500);
                            $("#page_absolute_4_img").find('img').attr("src", window.base64ImgSrcAnother);
                          })
                        })

                      });
                      $("#page_absolute_4_img").click(function (e) {
                        $("#page_absolute_4_img").fadeOut(500);
                      })
                    });
                  }, 5000)
                });
              }, 3000)
            });
          }, 3000)

        });
      }, 8000)
    });
