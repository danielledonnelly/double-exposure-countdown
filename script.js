// Reveal Livestream Countdown
document.getElementById("reveal-countdown").innerHTML = "0d 0h 0m 0s";
// The livestream is already out but the way I had this set up originally made it keep resetting so it's just permanently set to 0 now.

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
