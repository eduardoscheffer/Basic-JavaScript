// objeto com as unidades somente em numeros inteiros
// basicamente multiplicar por 100 cada valor de moeda
const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {

  let changeSum = (cash * 100) - (price * 100) // troco (multiplicado por 100 pra pegar a unidade que esta sendo trabalhada conforme currencyUnit)  
  let changeSumCheck = changeSum; // cópia de changeSum porque changeSum vai ser alterada futuramente
  let change = []; // inicia o troco que será uma array
  let status = ''; // inicia o status que será uma string

  let cidSum = 0; // variavel que vai receber todo o valor da caixa registradora
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse(); // filtra a array cid pra pegar só valores diferentes de 0 e reverter a array pra começar do maior valor

  // calculo pra ver se tem dinheiro suficiente pra dar o troco:
  filteredCid.forEach(elem => {
    let curr = elem[0]; // currency da array
    let currSum = elem[1] * 100; // valor da currency
    cidSum += currSum; // calcula o valor total que temos na caixa registradora
    let amount = 0;
    while (changeSum >= currencyUnit[curr] && currSum > 0) {
      amount += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }
  });

  if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';
    }
    return { 'status': status, 'change': change }

}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])) // { status: 'INSUFFICIENT_FUNDS', change: [] }
