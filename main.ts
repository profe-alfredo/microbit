input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.compassHeading()))
})
basic.showString("Sensors")
basic.forever(function () {
    basic.showString("A: Temp, B: Compás")
})
