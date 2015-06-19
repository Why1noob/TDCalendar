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

function ownerSelect(sender) {
    var ownerName = sender.innerHTML;
    $("#owner-selector").text(ownerName);
    var caret = document.createElement("span");
    caret.className = "caret";
    document.getElementById("owner-selector").appendChild(caret);
    document.getElementById("Hidden1").value = ownerName;
}
