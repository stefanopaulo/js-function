function Pessoa(nome, sobrenome) {
    // atributos públicos

    this.nome = nome;
    this.sobrenome = sobrenome;

    // atributos e métodos privados

    const ID = 365;

    const metodoIntero = () => {

    };

    // método público

    this.metodo = () => {
        console.log('Sou um método');
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log( p1.nome);
console.log(p2.nome);

p1.metodo();
