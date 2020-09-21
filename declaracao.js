// function declaration (hoisting)
falaOi();

function falaOi() {
    console.log('Oie');
}

// First-class objects (função é tratada como dado)

// function expression
const souUmDado = function () {
    console.log('Sou um dado.');
}

function executaFuncao(funcao) {
    funcao();
};

executaFuncao(souUmDado);

// Arrow Functions
const arrowFunction = () => console.log('Sou uma arrow function');

arrowFunction();

// dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};

obj.falar();
