let ano = new Date()
let anoatual = ano.getFullYear()
let nascimento = document.getElementById('nasci')
let botao = document.getElementById('bt')
botao.addEventListener('click',verificar)
let resultado = document.getElementById('res')

    function verificar(){
        if (nascimento.value == 0 || nascimento.value > anoatual){
            alert(`[ERRO] verifique os DADOS`)
        }else{
            let idade = anoatual - Number(nascimento.value)
            let sex = document.getElementsByName('sexo')
            genero = ''
            let img = document.createElement('img')
            img.setAttribute('id','foto')
                if (sex[0].checked){
                    genero = 'Homem'
                    if (idade < 5 ){
                        // bebe
                        img.setAttribute('src','imagens/bebemenino.jpg')
                    }
                    else if (idade <= 10){
                        // criança
                        img.setAttribute('src','imagens/menino.jpg')
                    }
                    else if (idade <= 15){
                        // adolesente
                        img.setAttribute('src','imagens/rapaz.jpg')
                    }
                    else if (idade <= 25 ){
                        // homem
                        img.setAttribute('src','imagens/homem.jpg')
                    }else if (idade <= 50 ){
                        // velho
                        img.setAttribute('src','imagens/velho.jpg')
                    }
                    else{
                        // idoso
                        img.setAttribute('src','imagens/idoso.jpg')
                    }
                        

                }else if (sex[1].checked){
                    genero = 'Mulher'
                    if (idade < 5){
                        // bebe
                        img.setAttribute('src','imagens/bebemenina.jpg')
                    }else if (idade <= 10){
                        // menina
                        img.setAttribute('src','imagens/menina.jpg')
                    }else if (idade <= 15){
                        // moça
                        img.setAttribute('src','imagens/moça.jpg')
                    }else if (idade <= 25){
                        // mulher
                        img.setAttribute('src','imagens/mulher.jpg')
                    }else if (idade <= 50){
                        // velha
                        img.setAttribute('src','imagens/velha.jpg')
                    }else{
                        // idoso
                        img.setAttribute('src','imagens/idosa.jpg')
                    }
                }
            resultado.innerHTML = `${genero} com ${idade} anos`
            resultado.appendChild(img)
        }
        
    }