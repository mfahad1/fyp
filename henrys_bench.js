
var Mcp3008 = require('mcp3008.js'),
    adc = new Mcp3008(),
    channel = 2;


//var sensorIn = A0;
var mVperAmp = 66; // use 100 for 20A Module and 66 for 30A Module


var Voltage = 0;
var VRMS = 0;
var AmpsRMS = 0;

Voltage = getVPP();
VRMS = (Voltage/2.0) *0.707;
AmpsRMS = (VRMS * 1000)/mVperAmp;
console.log(AmpsRMS);
console.log(" Amps RMS");

function getVPP()
{
    var result;

    var readValue;             //value read from the sensor
    var maxValue = 0;          // store max value here
    var minValue = 1024;          // store min value here

  //  uint32_t start_time = millis();
    adc.poll(channel,1000, function (value) {
        readValue = analogRead(sensorIn);
        // see if you have a new maxValue
        if (readValue > maxValue)
        {
            /*record the maximum sensor value*/
            maxValue = readValue;
        }
        if (readValue < minValue)
        {
            /*record the maximum sensor value*/
            minValue = readValue;
        }
    }

    // Subtract min from max
    result = ((maxValue - minValue) * 5.0)/1024.0;

    return result;
}