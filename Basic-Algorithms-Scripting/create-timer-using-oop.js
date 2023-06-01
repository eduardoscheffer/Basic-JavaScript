class Timer {
    constructor (sec) {
        this.segundo = sec;
        this.timer = null;
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.validaTimer();
            this.timerInSec(this.segundo);
            this.segundo++;
        }, 1000)
    }

    timerInSec(segundos) {
        let data = new Date(segundos * 1000);
        console.log(data.toLocaleTimeString('pt-br', {hour12: false, timeZone: 'GMT'}))
    }

    validaTimer() { // especifica quando parar (ou não)
        if (this.segundo === 10) clearInterval(this.timer);
    }
}

module.exports = Timer;