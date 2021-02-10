basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature())
    }
})
