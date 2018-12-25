




window.nickArr = [
    {
        
    },{

    }
]
$.ajax({
  url:'js/data.json',
  method:'GET',
  success:function(data){
    console.log(data,'server end json');
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
  }
})
function bindDom(name,val){
  $(`[d-${name}]`).html(val);
}