var counter = 10;
window.setInterval(function () {
    counter--;
    if (counter >= 0) {
        document.getElementById("start").innerHTML = counter;
    }
    if (counter === 0) {
        clearInterval(counter);
    }
}, 1000);

window.setInterval('start()', 10000);
function start() {
    window.location.reload();

}
