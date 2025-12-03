input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
    basic.pause(1000)
})
basic.showString("Sensors")
basic.forever(function () {
	
})
