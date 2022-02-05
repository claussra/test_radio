input.onSound(DetectedSound.Loud, function () {
    radio.sendNumber(4)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.ThreeG, function () {
    radio.sendNumber(5)
})
radio.setGroup(255)
