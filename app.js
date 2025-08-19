'use strict'

const botaoTrocarBandeira = document.getElementById('trocar-img');
const inputPais = document.getElementById('img');
const body = document.body;
const botaoAutomatico = document.getElementById('automatico');

const bandeiras = {
    "argentina": "./img/bandeira-argentina.avif",
    "brasil": "./img/bandeira-brasil.jpg",
    "bolívia": "./img/bandeira-bolivia.jpg",
    "chile": "./img/bandeira-chile.jpg",
    "colombia": "./img/bandeira-colombia.jpg",
    "equador": "./img/bandeira-equador.avif",
    "guiana": "./img/bandeira-guiana.jpg",
    "paraguai": "./img/bandeira-paraguai.jpg",
    "peru": "./img/bandeira-peru.jpg",
    "suriname": "./img/bandeira-suriname.jpg",
    "uruguai": "./img/bandeira-uruguai.jpg",
    "venezuela": "./img/bandeira-venezuela.jpg",
}

function trocarImg (){
    const nomePais = inputPais.value.toLowerCase();
    const urlBandeira = bandeiras[nomePais];

    if (urlBandeira) {
        body.style.backgroundImage = `url(${urlBandeira})`;
    }
}

// declarando variavel de intervalo automatico
let pararInterval;
let emModoAutomatico = false;
let indicePais = 0;

function alternarAutomatico(){
    if (emModoAutomatico) {
        // parar intervalo quando estiver em modo automatico
        clearInterval(pararInterval);
        botaoAutomatico.textContent = 'Automático';
        emModoAutomatico = false;
    } else{
        // modo automatico executando, criação do botao parar
        botaoAutomatico.textContent = 'Parar';
        emModoAutomatico = true;
        // pega os nomes dos paises e transforma em uma lista
        const paises = Object.keys(bandeiras);

        pararInterval = setInterval(() => {
            const paisAtual = paises[indicePais];
            const urlBandeira = bandeiras[paisAtual];

        body.style.backgroundImage = `url(${urlBandeira})`;
        //aparece os nomes dos paises ao trocar a bandeira
        inputPais.value = paisAtual.charAt(0).toUpperCase() + paisAtual.slice(1);
        indicePais++;

        //retorna todos os paises
        if (indicePais >= paises.length) {
            indicePais = 0;
         }
      }, 3000); //3 segundos
   }
}

botaoTrocarBandeira.addEventListener('click', trocarImg);
botaoAutomatico.addEventListener('click', alternarAutomatico);
