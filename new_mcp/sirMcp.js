/**
 * Created by Fahad on 12/18/2016.
 */
var Mcp3008 = require('mcp3008.js'),
  adc = new Mcp3008(),
  channel = 2;

var Vdd = 5000;

var AMultiplier = (Vdd/1023) ;
var Currentreal = 0;
var hzCounter = 0;
var acReadings = [];
var ampScale = 66;
var sensorLeakCurrent = 0.13;

adc.poll(channel,1 ,function (value) {
  hzCounter++;
  acReadings.push(value);
  if(hzCounter == 1000){
    var diffReading = 0;
    var avgReading = 0;
    
    var max =  Math.max.apply(Math,acReadings);
    var min =  Math.min.apply(Math,acReadings);
    diffReading = max - min;
   
    avgReading = (diffReading * 5.0) /1024.0 ;
//    console.log("avgR ::", avgReading);
    var vrms = (avgReading / 2) * 0.707;
    var ampsRms = (vrms * 1000) / 66;
    console.log("avg reading",ampsRms - sensorLeakCurrent);
    acReadings = [];
    hzCounter = 0;
    // Currentreal  = AMultiplier * (avgReading - (512))
    // Currentreal = Currentreal / ampScale;
    // console.log("Vreal :: ",Currentreal );
  }


});
