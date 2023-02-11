// Iterate with JavaScripts While Loops

function contagemRegressiva (max, min) {
    let contagem = [];
    let i = max; // valor inicial de "i"

    while (i >= min){ // enquanto "i" for igual ou maior que "min"
        contagem.push(i); // coloque "i" na array "contagem";
        i--; // diminua -1 de "i";
    }
} // 

function contagemProgressiva (min, max) {
    let i = min; // 
    let contagemProgressiva = [];

    while (i <= max) {
        contagemProgressiva.push(i);
        i++;
    }
} 

console.log(contagemProgressiva(0, 10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(contagemRegressiva(10, 0)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]