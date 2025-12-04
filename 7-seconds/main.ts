function Animacion () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Heart)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    bluetooth.uartWriteNumber(elapsed / 1000)
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.InBackground)
    for (let index = 0; index < 3; index++) {
        Animacion()
    }
})
let elapsed = 0
let start = 0
bluetooth.startUartService()
basic.showIcon(IconNames.No)
