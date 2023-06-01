const timerInSec = (sec) => {
    let data = new Date(sec * 1000);
    console.log(data.toLocaleTimeString('pt-br', {hour12: false, timeZone: 'GMT'}));
} 

// timerInSec(1);
// // 00:00:01
let seconds = 0
let timer;

const startTimer = () => {

    timer = setInterval(() => {
        if(seconds >= 10) clearInterval(timer);
        timerInSec(seconds);
        seconds++;

    }, 1000)
    
}

startTimer();

if(seconds === 10) clearInterval(timer);
