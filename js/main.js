var target_date = new Date().getTime();

const circleType = new CircleType(document.getElementById('bulka_text'));
circleType.radius(500).dir(1);

var days, hours, minutes, seconds;
var countdown = document.getElementById("tiles");

getCountdown();

setInterval(function () {
    getCountdown();
}, 1000);

function getCountdown() {
    target_date = new Date().getTime();
    
    var current_date = new Date().getTime();
    var seconds_left = (current_date - target_date) / 1000;

    days = pad(parseInt(seconds_left / 86400));
    seconds_left = seconds_left % 86400;

    hours = pad(parseInt(seconds_left / 3600));
    seconds_left = seconds_left % 3600;

    minutes = pad(parseInt(seconds_left / 60));
    seconds = pad(parseInt(seconds_left % 60));

    countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>";
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

