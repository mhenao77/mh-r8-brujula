let angulo = 0
basic.clearScreen()
basic.forever(function () {
    angulo = input.compassHeading()
    if (angulo >= 315 && angulo < 360 || angulo >= 0 && angulo < 45) {
        basic.showString("N")
    } else if (angulo >= 45 && angulo < 135) {
        basic.showString("E")
    } else if (angulo >= 135 && angulo < 225) {
        basic.showString("S")
    } else if (angulo >= 255 && angulo < 315) {
        basic.showString("O")
    }
})
