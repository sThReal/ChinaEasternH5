window.nickArr = [
  {
    type: 1,
    name: '飞行豪门',
    desc: '人是行走的向日葵,盛开是对理想的最大犒赏。为工作飞了这么多次，是时候为自己起飞了！',
      url:'https://shopping.ceair.com/app/act/a9161/index.html'
  }, {
    type: 2,
    name: '工作狂人',
    desc: '人是行走的向日葵,盛开是对理想的最大犒赏。为工作飞了这么多次，是时候为自己起飞了！',
        url:'https://vacations.ceair.com/App/Home/Activity?activityId=127&c=00013&Entry=1&c=81224'
  },
  {
    type: 3,
    name: '“一带一路”践行者',
    desc: '用旅程撰，写一部穿梭于一带一路间的史诗。先人用文明征服世界，咱用美食试试？',
      url:'https://shopping.ceair.com/NewHome/ChangeFoods',
  },
  {
    type: 4,
    name: '尝鲜大侠',
    desc: '不错过新的航线，不错过新的机型,好奇的世界不容错过，每一刻都在感受新生。',
      url:'https://vacations.ceair.com/app/home/ProductDetails?ProductID=310014688&c=81224',
  },
  {
    type: 5,
    name: '海岛达人',
    desc: '带上爱人，带上相机，带上18岁那年的思绪，飞向大海，春暖花开。',
      url:'http://shopping.ceair.com/detail/159303.html'
  },
  {
    type: 6,
    name: '和风旅人',
    desc: '晴空塔上的夜景，奈良小鹿的身影,在一衣带水的近邻，欣赏不一样的风景。',
    url:'https://vacations.ceair.com/app/home/ProductDetails?ProductID=310012403&utm_source=portal&utm_medium=banner&utm_term=&utm_content=&utm_campaign=guangfa&c=81224'
  },
  {
    type: 7,
    name: '御宅一族',
    desc: '2018，只想待在家；2019，快乐要出发！旅行能让你遇上更好的自己。',
      url:'https://hotels.ceair.com/',
  },
  {
    type: 8,
    name: '简单王者',
    desc: '说走就走，想飞就飞，要踏上旅途就会收获感动。选一条不平凡的路，找一个与众不同的自己把！',
      url:'http://shopping.ceair.com/act/a906/index.html',
  }
]
$.ajax({
  url: '../js/data/data3.json',
  method: 'GET',
  success: function (data) {
    console.log(data, 'server end json');
    window.type = data.page5.type;
    // 值机柜台
    bindDom('name', data.page1.name);
    bindDom('gender', data.gender == 'male' ? '先生' : '小姐');
    bindDom('joinDate', data.page1.joinDate);
    bindDom('totalFlight', data.page1.totalFlight);
    bindDom('totalIntegral', data.page1.totalIntegral);
    bindDom('spentIntegral', data.page1.spentIntegral);
    bindDom('level', data.page1.level);
    bindDom('domesticCityAmount', data.page1.domesticCityAmount);
    bindDom('internationalCityAmount', data.page1.internationalCityAmount);
    bindDom('airplaneModels', data.page1.airplaneModels);
    // 在云端1
    if (data.page2.hasData) {
      bindDom('disney', data.page2.disney);
      bindDom('firstClass', data.page2.firstClass);
      bindDom('businessClass', data.page2.businessClass);
      bindDom('mostOftenModel', data.page2.mostOftenModel);
    } else {
      $('.page11 .text2').show();
      $('.page11 .text1').hide();
    }

    // 在云端2
    if (data.page3.hasData) {
      bindDom('totalHours', data.page3.totalHours);
      bindDom('totalTimes', data.page3.totalTimes);
      bindDom('totalCost', data.page3.totalCost);
      bindDom('totalDistance', data.page3.totalDistance);
    } else {
      $('.page12 .no-font').show();
      $('.page12 .has-data').hide();
    }

    //地球页面 判断是否有走过城市
    if (data.page4.citys.length >= 1) {
      $("#page14_text_has_data").show()
      $("#page14_text_has_data").find(".num").html(data.page4.citys.length)
      var _t = data.page4.citys.slice(0, 5);
      var _st = _t.join("</br>");
      // alert(_st)
      $("#page14_text_has_data").find("._ht").html(_st)

    } else {
      $("#page14_text_no_data").show()
    }
    var personalDom = ``;
    var commonDom = ``;
    if(data.page5.type<7){
      commonDom = `
      <div class="main_title">
        <p>${data.page1.name}的</p>
        <p>的2018年度飞行报告</p>
      </div>
      <div class="content_text" style="height: 2.29rem;overflow: hidden;">
        <h3>2018总飞行里程</h3>
        <p><span>${data.page5.common.distance}</span>公里</p>
        <h3>2018总飞行时间</h3>
        <p><span>${data.page5.common.flightTime}</span>小时</p>
        <h3>2018总飞行次数</h3>
        <p><span>${data.page5.common.times}</span>次</p>
      </div>`;
    }else{
      commonDom = `
      <div class="main_title">
        <p>${data.page1.name}的</p>
        <p>的2018年度飞行报告</p>
      </div>
      <div class="content_text" style="height: 2.29rem;overflow: hidden;">
        <h3>2018东航会员平均⻜⾏里程</h3>
        <p><span>${data.page5.common.avgDistance}</span>公里</p>
        <h3>2018东航会员平均⻜行时间</h3>
        <p><span>${data.page5.common.avgTime}</span>小时</p>
      </div>`;
    }
    // 海报页
    switch (data.page5.type) {
      // 飞行豪门
      case 1:
        personalDom = `
          <div class="second_title">专属报告</div>
          <div class="second_text">
            <p>您是${data.page5.extra.level}会员</p>
            <p>并且乘坐头等舱/公务舱次数${data.page5.extra.firstClassTimes}次</p>
            <p>累积消费金额TOP${data.page5.extra.consumptionRatio*100}%</p>
          </div>`;
        $(".need_rolate .type_1").show();
        break;
      // 工作狂人
      case 2:
        personalDom = `
          <div class="second_title">专属报告</div>
          <div class="second_text">
            <p>2018年度最常⻜⾏目的地${data.page5.extra.mostOftenLine[0]}-${data.page5.extra.mostOftenLine[1]}</p>
            <p>乘坐该航线${data.page5.extra.times}次</p>
          </div>`;
          $(".need_rolate .type_2").show();
          break;
      // 一带一路
      case 3:
        personalDom = `
        <div class="second_title">专属报告</div>
        <div class="second_text">
          <p>2018年度，⻜抵⼀带⼀路沿线城市${data.page5.extra.times}次</p>
        </div>`;
          $(".need_rolate .type_3").show();
          break;
      // 尝鲜大侠
      case 4:
        personalDom = `
        <div class="second_title">专属报告</div>
        <div class="second_text">
          <p>2018年度，乘坐新开目的地${data.page5.extra.newPlaceTimes}次</p>
          <p>目的地为${data.page5.extra.destination}</p>
          <p>去过${data.page5.extra.numbers}个国家</p>
        </div>`;
          $(".need_rolate .type_4").show();
          break;
      // 海岛达人
      case 5:
        let islandDom = function(name){
          return `<p>${name}</p>`
        }
        let tempDom = ``;
        if(data.page5.extra.places<3){
          for(let n in data.page5.extra.places){
            tempDom+=islandDom(data.page5.extra.places[n])
          }
        }else{
          for(let n=0;n<3;n++){
            tempDom+=islandDom(data.page5.extra.places[n])
          }
          tempDom+=`<p>等${data.page5.extra.numbers}座</p>`;
        }
        personalDom = `
        <div class="second_title">专属报告</div>
        <div class="second_text">
          <p>2018年度，⻜往海岛${data.page5.extra.times}次</p>
          <p>去过的海岛有</p>
          ${tempDom}
        </div>`;
          $(".need_rolate .type_5").show();
          break;
      // 和风旅人
      case 6:
        personalDom = `
        <div class="second_title">专属报告</div>
        <div class="second_text">
          <p>2018年度共⻜往⽇本${data.page5.extra.times}次</p>
        </div>`;
          $(".need_rolate .type_6").show();
          break;
      // 御宅一族
      case 7:
        personalDom = `
        <div class="second_title">专属报告</div>
        <div class="second_text">
          <p>2018您的⻜⾏次数为0次</p>
        </div>`;
          $(".need_rolate .type_7").show();
          break;
      // 简单王者
      case 8:
        personalDom = `
        <div class="second_title">专属报告</div>
        <div class="second_text">
          <p>2018您的⻜行次数为${data.page5.extra.flightTimes}次</p>
        </div>`;
          $(".need_rolate .type_8").show();
          break;
    }
    // 赋值到页面
    // $('#page4_img .main_content').html('').append(commonDom+personalDom);
    $('#main_page_15 .main_content').html('').append(commonDom+personalDom);
    var _html = $("#cloneDom").html();
    $("#page_4_img").html(_html);
  }
})
function bindDom(name, val) {
  $(`[d-${name}]`).html(val);
}