var Mcp3008 = require('mcp3008.js'),
  adc = new Mcp3008(),
  channel = 2;

var Vdd = 5

var AMultiplier = (Vdd/1024) ;
var Currentreal = 0;
var hzCounter = 0;
var acReadings = [];


adc.poll(channel,1 ,function (value) {
  hzCounter++;
  acReadings.push(value * value);
  if(hzCounter == 20){
    var sumReading = 0;
    var avgReading = 0;
    acReadings.forEach(function (valueReading) {
      sumReading+= valueReading;
    })
    avgReading = Math.sqrt(sumReading / hzCounter) ;
    console.log("avg reading",avgReading)
  }

  // Currentreal  = AMultiplier * (value - (512))
  // console.log("Vreal :: ",Currentreal );
});
