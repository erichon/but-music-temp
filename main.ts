basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.EigthNote)
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("T=")
        basic.showNumber(input.temperature())
    }
})
