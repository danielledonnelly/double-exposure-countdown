// Reveal Livestream Countdown
var revealCountdownDate = new Date(); 
var currentDay = revealCountdownDate.getDay(); 
var targetDay = 4; // 
var targetTime = 13.5 * 60 * 60 * 1000;

var daysToAdd = targetDay - currentDay >= 0 ? targetDay - currentDay : 7 - currentDay + targetDay;
revealCountdownDate.setDate(revealCountdownDate.getDate() + daysToAdd);
revealCountdownDate.setHours(13, 30, 0, 0);

var revealCountdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = revealCountdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var countdownText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(revealCountdown);
        countdownText = "0d 0h 0m 0s";
    }

    document.getElementById("reveal-countdown").innerHTML = countdownText;
}, 1000);



// Game Release Countdown
var gameCountdownDate = new Date("October 29, 2024 00:00:00").getTime();

var gameCountdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = gameCountdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("game-countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(gameCountdown);
        document.getElementById("game-countdown").innerHTML = "EXPIRED";
    }
}, 1000);
