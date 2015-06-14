function startStopTimer() {
    var timerButton = $("#timer-btn");
    console.log(timerButton.text());
    if (timerButton.text() == "Запустить таймер") {
        timerButton.text("Остановить таймер");
        setTimeout(function () { console.log("timer started") }, 1000);
    }
    if (timerButton.text() == "Остановить таймер") {
        timerButton.text("Запустить таймер");
        setTimeout(function () { console.log("timer stoped") }, 1000);
    }
}