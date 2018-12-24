/**
 * 数据结构
 * 如没有，则传0，但key要传过来
 */
var data = {
  "page1":{
    "name":"赵先生",
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
    "extra":{}
  },
  // 您的飞行次数为
  "page5":{
    "type":2,     
    "extra":{
      "flightTimes":2
    }
  },
  // 头等舱/公务舱次数
  "page5":{
    "type":3,     
    "extra":{
      "firstClassTimes":20
    }
  },
  // 最常飞行航线
  "page5":{
    "type":4,     
    "extra":{
      "mostOftenLine:":["上海","香港"],
      "times":9
    }
  },
  // 一带一路次数
  "page5":{
    "type":5,     
    "extra":{
      "times":3
    }
  },
  // 新航线
  "page5":{
    "type":6,     
    "extra":{
      "line":["大阪","香港"],
      "times":3,
      "numbers":2
    }
  },
  // 海岛
  "page5":{
    "type":7,     
    "extra":{
      "times":9,
      "places":["XX岛","xX岛"]
    }
  },
  // 日本次数
  "page5":{
    "type":8,     
    "extra":{
      "times":5
    }
  }

}