'use strict'

const botaoTrocarBandeira = document.getElementById('trocar-img')

function trocarImg (){
    const img = document.getElementById('img').image
    document.documentElement.style.setProperty('--bg-img', Image)
}
botaoTrocarBandeira.addEventListener('click', trocarImg)
