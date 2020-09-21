function soma(a, b) {
    return a + b;
}

const s1 = soma(2, 5);
console.log(s1);

function soma2(a, b) {
    console.log(a + b)
}

soma2(5, 3);
console.log(soma2(3, 2)); // retorno undefined

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Stefano', 'Paulo');
console.log(p1.nome);

function falaFrase(comeco) {
    return function falaResto(resto) {
        return comeco + ' ' + resto;
    }
}

const fala = falaFrase('Hello');
const resto = fala('Wolrd');

console.log(resto);

function multiplicador(m) {
    return function(n) {
        return n * m;
    }
}

const duplica = multiplicador(2);
const triplica = multiplicador(3);
const quadriplica = multiplicador(4);

console.log(duplica(5));
console.log(triplica(6));
console.log(quadriplica(3));
