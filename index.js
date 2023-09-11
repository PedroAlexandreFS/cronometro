var sec = 0;
var min = 0;
var hr = 0;
var interval;

function startTempo() {
   interval = setInterval(time,1000)
}

function time() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
    }
    if (min == 60) {
        min = 0
        hr++
    }
    document.getElementById('numeros').innerHTML =twoZero(hr) + ':' +twoZero(min) + ':' + twoZero(sec);
}

function twoZero(digit) {
    if (digit < 10) {
        return ('0' + digit);
    } else {
        return (digit);
    }
}


function stopTempo() {
    clearInterval(interval)
}

function restart() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('numeros').innerHTML ='00:00:00';
}

