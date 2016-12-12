var Mcp3008 = require('mcp3008.js'),
    adc = new Mcp3008(),
    channel = 2;

var result = 0;
for(var i = 0; i<150;i++){
 adc.read(channel, function (value) {
 result += value;
  //console.log("value ::: ",value);

 });
}


setTimeout(function(){
//console.log("here",result);
result = result /150;
    result = (result/1023)*240;

    console.log(result);
},3000)

var Vdd = 3.3

var AMultiplier = (Vdd/1024) ;
var Vreal = 0;

//for(var i = 0; i<150;i++){
 adc.poll(channel,1000 ,function (value) {

  Vreal = AMultiplier * (value - (512))
  console.log("Vreal :: ",Vreal);
 });
//}
