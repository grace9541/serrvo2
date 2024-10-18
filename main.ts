let angle = 0
input.onButtonPressed(Button.A, function () {
    angle += -10
})
input.onButtonPressed(Button.B, function () {
    angle += 10
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P9, angle)
})
