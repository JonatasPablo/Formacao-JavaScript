// Declaração de função

// function minhaFuncao(param){
//     // bloco de codigo
// }

// minhaFuncao("param");

// expressão de função

//const soma = function(num1, num2) {return num1 + num2};
//console.log(soma(2,2));

// Difereça principal: HOISTING

console.log(apresentar());
function apresentar(){
    return "Olá";
}

const soma = function(num1, num2) {return num1 + num2};
console.log(soma(2,8));
