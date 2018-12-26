window.nickArr = [
    {
        type:1,
        name:'飞行豪门',
        desc:'人是行走的向日葵,盛开是对理想的最大犒赏。为工作飞了这么多次，是时候为自己起飞了！',
    },{
        type:2,
        name:'工作狂人',
        desc:'人是行走的向日葵,盛开是对理想的最大犒赏。为工作飞了这么多次，是时候为自己起飞了！',
    },
    {
        type:3,
        name:'“一带一路”践行者',
        desc:'用旅程撰，写一部穿梭于一带一路间的史诗。先人用文明征服世界，咱用美食试试？',
    },
    {
        type:4,
        name:'尝鲜大侠',
        desc:'不错过新的航线，不错过新的机型,好奇的世界不容错过，每一刻都在感受新生。',
    },
    {
        type:5,
        name:'海岛达人',
        desc:'带上爱人，带上相机，带上18岁那年的思绪，飞向大海，春暖花开。',
    },
    {
        type:6,
        name:'和风旅人',
        desc:'晴空塔上的夜景，奈良小鹿的身影,在一衣带水的近邻，欣赏不一样的风景。',
    },
    {
        type:7,
        name:'御宅一族',
        desc:'2018，只想待在家；2019，快乐要出发！旅行能让你遇上更好的自己。',
    },
    {
        type:8,
        name:'简单王者',
        desc:'说走就走，想飞就飞，要踏上旅途就会收获感动。选一条不平凡的路，找一个与众不同的自己把！',
    }
]
$.ajax({
  url:'../js/data.json',
  method:'GET',
  success:function(data){
    console.log(data,'server end json');
    // 值机柜台
    bindDom('name',data.page1.name);
    bindDom('gender',data.gender=='male'?'先生':'小姐');
    bindDom('joinDate',data.page1.joinDate);
    bindDom('totalFlight',data.page1.totalFlight);
    bindDom('totalIntegral',data.page1.totalIntegral);
    bindDom('spentIntegral',data.page1.spentIntegral);
    bindDom('level',data.page1.level);
    bindDom('domesticCityAmount',data.page1.domesticCityAmount);
    bindDom('internationalCityAmount',data.page1.internationalCityAmount);
    bindDom('airplaneModels',data.page1.airplaneModels);
    // 在云端1
    if(data.page2.hasData){
        bindDom('disney',data.page2.disney);
        bindDom('firstClass',data.page2.firstClass);
        bindDom('businessClass',data.page2.businessClass);
        bindDom('mostOftenModel',data.page2.mostOftenModel);
    }else{
        $('.page11 .text2').show();
        $('.page11 .text1').hide();
    }
    
    // 在云端2
    if(data.page3.hasData){
        bindDom('totalHours',data.page3.totalHours);
        bindDom('totalTimes',data.page3.totalTimes);
        bindDom('totalCost',data.page3.totalCost);
        bindDom('totalDistance',data.page3.totalDistance);
    }else{
        $('.page12 .no-font').show();
        $('.page12 .has-data').hide();
    }
    
    //地球页面 判断是否有走过城市
    if(data.page4.citys.length>=1){
        $("#page14_text_has_data").show()
        $("#page14_text_has_data").find(".num").html(data.page4.citys.length)
        var _t = data.page4.citys.slice(0,5);
        var _st = _t.join("</br>");
        // alert(_st)
        $("#page14_text_has_data").find("._ht").html(_st)

    }else{
        $("#page14_text_no_data").show()
    }
  }
})
function bindDom(name,val){
  $(`[d-${name}]`).html(val);
}