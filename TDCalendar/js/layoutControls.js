function startStopTimer() {
    var timerStartButton = $("#timer-start-btn");
    var timerStopButton = $("#timer-stop-btn");
    var timerStarted = timerStartButton.is(":visible");
    if (timerStarted) {
        timerStartButton.hide();
        timerStopButton.show();
    } else {
        timerStartButton.show();
        timerStopButton.hide();
    }
}