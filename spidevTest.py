import spidev
from time import sleep

#Establish SPI device on Bus 0, Device 0

spi = spidev.SpiDev()
spi.open(0,0)

def getAdc(channel):
#Check it is a valid channel
 if((channel >3) or (channel <0)):
  return -1
 #Perform SPI transaction and store returned bits in 'r'
 r = spi.xfer([1, (8+channel) << 4, 0])

#Filter data bits from returned bits
 adcOut = ((r[1]&3) << 8) + r[2]
 percent = int(round(adcOut/10.24))

#Print out 0-1023 value and percentage
 print("ADC Output: {0:4d} Percentage: {1:3d}%".format(adcOut,percent))
 sleep(0.1)

#Loop

while True:
 getAdc(0)
