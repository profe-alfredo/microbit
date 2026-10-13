datalogger.onLogFull(function () {
    capturar_datos = false
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    capturar_datos = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "",
    "",
    ""
    )
})
input.onButtonPressed(Button.B, function () {
    capturar_datos = false
    basic.showIcon(IconNames.No)
})
let capturar_datos = false
capturar_datos = false
basic.showIcon(IconNames.Heart)
datalogger.setColumnTitles(
"Temperatura",
"Sonido",
"Luz"
)
loops.everyInterval(60000, function () {
    if (true) {
        datalogger.log(
        datalogger.createCV("Temperatura", input.temperature()),
        datalogger.createCV("", 0),
        datalogger.createCV("", 0)
        )
        basic.clearScreen()
    }
})
