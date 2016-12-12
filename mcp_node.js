var Mcp3008 = require('mcp3008.js'),
    adc = new Mcp3008(),
    channel = 2;


var readValue;
var maxValue = 0;
var minValue = 500;
var Voltage = 0;
var VRMS = 0;
var AmpsRMS = 0;

while(true){
  	



        var result1 =  getVPP()

	VRMS = (result1 / 2.0) * 0.707;
        AmpsRMS = (VRMS * 1000) / 185;
	console.log(AmpsRMS);




  
}

  function getVPP(){
  var result ;
  var readValue ;
  var maxValue =0;
  var minValue =1024;

  var time_now = new Date();
 var now = time_now.getMilliseconds();
  while(time_now.getMilliseconds() - now < 1000){
  
   adc.read(channel,function(val) {
    console.log("read value",val);
    readValue = val; 
    if(readValue > maxValue)
       maxValue = readValue
    if(readValue < minValue)
      minValue = readValue
   })
 }


  result = ((maxValue - minValue) * 5.0) / 1024.0

  return result;

}
