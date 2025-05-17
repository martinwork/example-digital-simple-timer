let pin = DigitalPin.P0
images.iconImage(IconNames.No).showImage(0, 0)
while (pins.digitalReadPin(pin) == 0) {
	
}
images.iconImage(IconNames.Square).showImage(0)
while (pins.digitalReadPin(pin) == 1) {
	
}
let timeLow = input.runningTimeMicros()
images.iconImage(IconNames.SmallSquare).showImage(0, 0)
while (pins.digitalReadPin(pin) == 0) {
	
}
let timeHigh = input.runningTimeMicros()
let time = timeHigh - timeLow
/**
 * To time a low pulse...
 * 
 * Wait for high
 * 
 * Wait for low
 * 
 * Record time of start of pulse
 * 
 * Wait for high
 * 
 * Record time of end of pulse
 * 
 * Calculate time difference
 * 
 * Display the pulse duration in milliseconds
 * 
 * Press RESET to measure another pulse
 */
basic.forever(function () {
    basic.showNumber(time / 1000)
    basic.pause(200)
})
