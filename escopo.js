// escopo léxico leva em consideração onde a função foi declarada, não onde ela foi executada.

const escopo = 'fora';

function fala() {
    const escopo = 'dentro';
    console.log(escopo);
}

function usaFala() {
    const escopo = 'função';
    fala();
}

usaFala();
