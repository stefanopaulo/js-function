function retornaFuncao() {
    const escopo = 'dentro';

    return function() {
        return escopo;
    }
}

const funcao = retornaFuncao();

console.log(funcao());
