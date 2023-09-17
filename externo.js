let ano = new Date()
let anoatual = ano.getFullYear()
let nascimento = document.getElementById('nasci')
let botao = document.getElementById('bt')
botao.addEventListener('click',verificar)
let resultado = document.getElementById('res')

    function verificar(){
        alert('ola')
    }