const nome = "Jonatas";
const idade = 2023 - 1995;
const cidadeNascimento = "Catanduva";

// const apresentacao = "Meu nome é " + nome + ", tenho " + idade + " anos e moro em " + cidadeNascimento + "/SP.";

// usando a template string, usa acento grave (`) no lugar das aspas duplas. Aceita quebra de linha, variavel colocada no formato ${}.

const apresentacao = `Meu nome é ${nome}, 
tenho ${idade} anos e moro em ${cidadeNascimento}/SP.`;

console.log(apresentacao);

a = []
b = 20
c = true 
d = ''


if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}


if (b === 20 && c != false && d == 0) {
    console.log('Verdade')
} else {
    console.log('Falso')
}


if (d) {
    console.log('Verdade')
} else {
    console.log('Falso')
}


if (b == '20') {
    console.log('Verdade')
} else {
    console.log('Falso')
}