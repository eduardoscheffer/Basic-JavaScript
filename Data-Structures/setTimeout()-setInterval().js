setInterval()
// Se usa p/ passar uma função que irá executar c/ um delay entre as execuções;
// vai executar a função do 1º argumento a cada Xms passados no 2º argumento;
// setInterval() vai continuar a ser executada até que seja 'limpa';
// Ex:
let intervalID;
function repeatEverysecond() {
    intervalID = setInterval(sendMessage, 1000);
}

function sendMessage() {
    console.log('One second have passed');
}
// Quando repeatEverySecond() for invocada, vai chamar setInterval(). secondMessage vai ser executada a cada 1s (1000ms);

// #################################################################################### //

setTimeout()
// atrasa a execução de uma função fornecida por um tempo específico;
// vai executar a função do 1º argumento 1 vez após o tempo específico fornecido;
// Ex:
let timeOutID2;
function delayTimer() {
    timeOutID2 = setTimeout(delayedFunction, 3000);
}

function delayedFunction() {
    console.log('Three Seconds have passed');
}
// quando adelayTimer() for invocada, vai executar setTimeout(). Após 3 segundos (3000ms), vai ser executado delayedFunction();

// ######################################## //
clearInterval() && clearTimeout()
// funções nativas que param os eventos de timer: setIntervarl() e setTimeout();
// p/ pausar o timer se passa a mesma variável usada no timer;
// Ex:
function clearConsole() {
    clearTimeout(timeOutID2);
}