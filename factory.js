function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto) {
            return `${this.nomeCompleto} está falando sobre ${assunto}.`
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const i = this.peso / (this.altura ** 2);
            return i.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
console.log(p1.imc);
p1.nomeCompleto = 'Stefano Paulo';
console.log(p1.fala('JS'));

console.log(p1.nome);
console.log(p1.sobrenome);

const p2 = criaPessoa('Maria', 'Oliveira', 1.6, 50);
console.log(p2.imc);
console.log(p2.fala('PHP'));
