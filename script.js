// cursor in page
var elBall = document.getElementById('ball');

document.addEventListener ('mousemove', function(ev) {
    elBall.style.transform = 'translateY(' + (ev.clientY+8.5) + 'px)';
    elBall.style.transform += 'translateX(' + (ev.clientX-28) + 'px)';
}, false);


var elBallDot = document.getElementById('ball-dot');

document.addEventListener ('mousemove', function(ev) {
    elBallDot.style.transform = 'translateY(' + (ev.clientY+8) + 'px';
    elBallDot.style.transform += 'translateX(' + (ev.clientX-18.5) + 'px';
}, false);

var elBallCont = document.getElementById('ball-cont');

document.addEventListener ('mousemove', function(ev) {
    elBallCont.style.transform = 'translateY(' + (ev.clientY-70) + 'px)';
    elBallCont.style.transform += 'translateX(' + (ev.clientX-100) + 'px)';
}, false);

