/**
 * 数据结构
 * 如没有，则传0，但key要传过来
 * 2018-12-24 新增：加入时间，以及最后生成海报的二维码链接地址
 */
var data = {
  "page1":{
    "name":"赵先生",
    "joinDate":"2018年7月18日",
    "totalFlight":100,
    "totalIntegral":54332,
    "spentIntegral":23456,
    "level":"黄金",
    "domesticCityAmount":20,
    "internationalCityAmount":10,
    "airplaneModels":5
  },
  "page2":{
    "disney":2,
    "firstClass":10,
    "businessClass":20,
    "mostOftenModel":"波音757"
  },
  "page3":{
    "totalHours":453,
    "totalTimes":30,
    "totalCost":9870,
    "totalDistance":29384
  },
  "page4":{
    "citys:":["西安","大理","墨尔本","纽约","维加斯"]
  },
  // 9种type分别对应9个情况，此处分别列出可能情况，实际上只传一种给我
  // 御宅一族飞行次数为0
  "page5":{
    "type":1,
    "common":{
      "avgDistance":200,
      "avgTime":28
    },
    "extra":{},
    "qrcodeUrl":""
  },
  // 简单王者
  "page5":{
    "type":2,
    "common":{
      "avgDistance":200,
      "avgTime":28
    }, 
    "extra":{
      "flightTimes":2
    },
    "qrcodeUrl":""
  },
  // 飞行豪门
  "page5":{
    "type":3,     
    "common":{
      "distance":200,
      "flightTime":28,
      "times":9
    },
    "extra":{
      "level":"金卡",
      "firstClassTimes":20,
      "consumptionRatio":0.2,    //消费金额top，小数，不是百分比
      "integralRatio":0.3        //消费积分top
    },
    "qrcodeUrl":""
  },
  // 工作狂人，最常飞行航线
  "page5":{
    "type":4,   
    "common":{
      "distance":200,
      "flightTime":28,
      "times":9
    },  
    "extra":{
      "mostOftenLine:":["上海","香港"],   // 航线前者是出发地
      "times":9
    },
    "qrcodeUrl":""
  },
  // 一带一路次数
  "page5":{
    "type":5,     
    "common":{
      "distance":200,
      "flightTime":28,
      "times":9
    }, 
    "extra":{
      "times":3
    },
    "qrcodeUrl":""
  },
  // 尝鲜大侠
  "page5":{
    "type":6,
    "common":{
      "distance":200,
      "flightTime":28,
      "times":9
    },
    "extra":{
      "newPlaceTimes":5,      // 新开目的地次数
      "destination":'上海',
      "numbers":5             // 去过多少个国家
    },
    "qrcodeUrl":""
  },
  // 海岛
  "page5":{
    "type":7,  
    "common":{
      "distance":200,
      "flightTime":28,
      "times":9
    },   
    "extra":{
      "times":9,
      "places":["XX岛","xX岛"]
    },
    "qrcodeUrl":""
  },
  // 日本次数
  "page5":{
    "type":8,   
    "common":{
      "distance":200,
      "flightTime":28,
      "times":9
    },  
    "extra":{
      "times":5
    },
    "qrcodeUrl":""
  }

}