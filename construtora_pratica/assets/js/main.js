function Calculadora() {
        const dispaly = document.querySelector('.display');
        
        this.inicia = () => {
            cliqueBotoes();
            pressionaEnter();
        };

        const pressionaEnter = () => {
            dispaly.addEventListener('keyup', e => {
                if (e.keyCode === 13) this.realizaConta();
            });
        };

        const realizaConta = () => {
            let conta = dispaly.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    clearDisplay();
                    return;
                }

                return dispaly.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                clearDisplay();
                return;
            }
        };

        const clearDisplay = () => {
            return dispaly.value = '';
        };

        const apagaUm = () => {
            return dispaly.value = dispaly.value.slice(0, -1);
        };

        const cliqueBotoes = () => {
            document.addEventListener('click', (e) => {
                const el = e.target;
                
                if (el.classList.contains('btn-num')) {
                    btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    realizaConta();
                }
            });
        };

        const btnParaDisplay = (valor) => dispaly.value += valor;
}

const calculadora = new Calculadora;;

calculadora.inicia();
