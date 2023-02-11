// SISTEMAS DE GASTOS FAMILIAR //
/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
   
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo. */
 
let family = {
    incomes: [150, 1000],
    expenses: [150, 350, 50, 48.85, 140, 411,26]
};
 
function sum (array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total;
} // Função que soma os números de uma array;
 
let sumIncomes = sum(family.incomes);
let sumExpenses = sum(family.expenses);
let balance = sumIncomes - sumExpenses;
 
function balanceFamily () {
    if (balance < 0) {
        return "O seu saldo é negativo: " + balance.toFixed(2);
    }   else {
        return "O seu saldo é positivo: " + balance.toFixed(2);
    }
}
 
console.log(balanceFamily()); // O seu saldo é negativo: -25.85;