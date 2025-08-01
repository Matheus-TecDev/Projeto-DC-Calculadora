let elementoResultado= document.querySelector('.js-resultado');
let botoesPadroes= document.querySelectorAll('.js-btn-padroes');
let botaoResultado= document.querySelector('.js-btn-igual');
let botaoAC= document.querySelector('.js-btn-ac');
let botaoMaisMenos= document.querySelector('.js-btn-mais-menos');
let botaoDeletar= document.querySelector('.js-btn-del');


function adicionarElementoAoInputResultado(numeroDigitado) {
    verificarSimboloDuplicado(numeroDigitado);
    if (verificarSimboloInicial(numeroDigitado));
    elementoResultado.value += numeroDigitado;
}

function executarCalculo (){
    try {
        elementoResultado.value = eval(elementoResultado.value);
    } catch (error) {
        elementoResultado.value = "Erro";
    }
}

function limparResultado (){
    elementoResultado.value = "";
}

function inverterSinal (){
    if (Number(elementoResultado.value)) {
    elementoResultado.value = ele
    mentoResultado.value * -1;
    }
}

function deletarUltimoNumero (){
    elementoResultado.value = elementoResultado.value.slice(0, -1);
}

function verificarSimboloDuplicado(numeroDigitadoRecebidoPorParametro) {
    let ultimoValorNoInputResultado = 
    elementoResultado.value[elementoResultado.value.length - 1]

    if (
    ultimoValorNoInputResultado && 
    !Number(ultimoValorNoInputResultado ) && 
    !Number(numeroDigitadoRecebidoPorParametro) &&
    ultimoValorNoInputResultado != 0 &&
    numeroDigitadoRecebidoPorParametro != 0
    ) {
        deletarUltimoNumero()
    }
}
function verificarSimboloInicial(numeroDigitadoRecebidoPorParametro) {
    if (!elementoResultado.value == 0 && 
    !Number(numeroDigitadoRecebidoPorParametro) 
    ){
        return true;
    }
}

function gerenciarEscutadores() {
    botoesPadroes.forEach((elementoCorrente) => {
        elementoCorrente.addEventListener("click", () => {
            let valorDoElementoClicado = elementoCorrente.dataset.valor;
            adicionarElementoAoInputResultado(valorDoElementoClicado);
        });
    });

    botaoResultado.addEventListener('click', () => {
        executarCalculo();
    });

    botaoAC.addEventListener('click', () => {
        limparResultado();
    });

    botaoMaisMenos.addEventListener('click', () => {
        inverterSinal();
    });

    botaoDeletar.addEventListener('click', () => {
        deletarUltimoNumero();
    });
}
gerenciarEscutadores();