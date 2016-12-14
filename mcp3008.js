

var Mcp3008 = require('mcp3008.js'),
    adc = new Mcp3008(),
    channel = 2;


var mVperAmp = 66; // use 100 for 20A Module and 66 for 30A Module
var RawValue= 0;
var ACSoffset = 512; 
var Voltage = 0;
var Amps = 0;



	
	adc.poll(channel,1000, function (value) {
		RawValue = value - ACSoffset;
Voltage = (RawValue / 1023.0) * 5000; // Gets you mV
Amps = Voltage/ mVperAmp;


//console.log("Raw Value = " ); // shows pre-scaled value 
//console.log(RawValue); 
//console.log("\t mV = "); // shows the voltage measured 
//console.log(Voltage,3); // the '3' after voltage allows you to display 3 digits after decimal point
console.log("\t Amps = "); // shows the voltage measured 
console.log(Amps); // the '3' after voltage allows you to display 3 digits after decimal point

});
	



