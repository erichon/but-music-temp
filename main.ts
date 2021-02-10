basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.compassHeading())
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature())
    }
})
