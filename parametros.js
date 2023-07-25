// Parâmetros de função
function soma(num1, num2) {
    return num1 + num2;
}

// console.log(soma(2,48));
// console.log(soma(Math.random()*10,48));
// console.log(soma(Math.random()*10,48));
// console.log(soma(Math.random()*10,48));
// console.log(soma(Math.random()*10,48));
// console.log(soma(Math.random()*10,48));

function dados(nome, idade){
    return `Meu nome é ${nome}, e minha idade é ${idade}`;
}

//console.log(dados(28,'Jonatas'));

function soma(num1, num2){
    return num1 + num2;
}

function multiplicacao(num1, num2){
    return console.log(num1 * num2);
}

multiplicacao(soma(4,5), soma(3,3));

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`);
   }
   
   cumprimentaPessoa('Jonatas');

function cumprimentar(){
    return 'Oi gente!'
   }
   
function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
cumprimentaPessoa('Jonatas') // “Oi gente! Meu nome é Paula”

function comParametro(param) {
    console.log(param);
}
comParametro();

