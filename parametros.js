function funcao1() {
    let soma = 0;

    for (let a of arguments) {
        soma += a;
    }

    console.log(soma);
}

funcao1(10, 3, 6, 8, 7);

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3);

function funcao3(a = 0, b = 0, c = 0) {
    console.log(a + b + c)
}

funcao3();
funcao3(2);
funcao3(2, 3);
funcao3(2, 3, 10);
funcao3(2, undefined, 10);

function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

const obj = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 20
};

funcao4(obj);

function funcao5([v1, v2, v3]) {
    console.log(v1, v2, v3);
}

funcao5(['Luiz', 'Miranda', 30]);

const conta = (operador, acumulador, ...numeros) => {
    for (let num of numeros) {
        if (operador === '+') acumulador += num;
        if (operador === '-') acumulador -= num;
        if (operador === '*') acumulador *= num;
        if (operador === '/') acumulador /= num;
    }

    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
conta('*', 1, 2, 3, 4, 5);
conta('-', 0, 20, 30, 40, 50);
conta('/', 1, 2, 3, 4, 5);
