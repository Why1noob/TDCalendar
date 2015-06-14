function startStopTimer() {
    var timerButton = $("#timer-btn");
    if (timerButton.text() == "Запустить таймер") {
        timerButton.text = "Остановить таймер";
    }
    if (timerButton.text() == "Остановить таймер") {
        timerButton.text = "Запустить таймер";
    }
}