'use strict'

const botaoTrocarBandeira = document.getElementById('trocar-img');
const inputPais = document.getElementById('img');
const body = document.body;

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
botaoTrocarBandeira.addEventListener('click', trocarImg);
