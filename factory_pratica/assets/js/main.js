function criaCalculadora() {
    return {
        dispaly: document.querySelector('.display'),
        btnClear: document.querySelector('btn-clear'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.dispaly.addEventListener('keyup', e => {
                if (e.keyCode === 13) this.realizaConta();
            });
        },

        realizaConta() {
            let conta = this.dispaly.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    this.clearDisplay();
                    return;
                }

                this.dispaly.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                this.clearDisplay();
                return;
            }
        },

        clearDisplay() {
            this.dispaly.value = '';
        },

        apagaUm() {
            this.dispaly.value = this.dispaly.value.slice(0, -1);
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.dispaly.value += valor;
        }
    };
}

const calculadora = criaCalculadora();

calculadora.inicia();
