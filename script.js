setInterval(function () {
    let time = new Date();
    let Hours = time.getHours();
    if (Hours == 0) {
        Hours = 12;
    } else if (Hours > 12) {
        Hours = Hours - 12
    }
    if (Hours.toString().length == 1) {
        Hours = "0" + Hours
    }
    let Minutes = time.getMinutes();
    if (Minutes.toString().length == 1) {
        Minutes = "0" + Minutes
    }
    let Seconds = time.getSeconds();
    if (Seconds.toString().length == 1) {
        Seconds = "0" + Seconds
    }
    document.getElementById("time").innerText = " " + Hours + " : " + Minutes + " : " + Seconds
}, 7)