input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
    basic.pause(1000)
})
basic.showString("Sensors")
basic.showString("A: Temp, B: Compas")
basic.forever(function () {
	
})
