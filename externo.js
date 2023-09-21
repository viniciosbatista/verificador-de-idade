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
                if (idade <= 5 ){
                    // bebe
                    img.setAttribute = 'src','imagens/bebemenino.jpg'
                }
                else if (idade > 5 && idade <= 10){
                    // criança
                }
                else if (idade > 10 && idade <= 15){
                    // adolesente
                }
                else if (idade > 15 && idade <= 25 ){
                    // homem
                } else if (idade > 25 && idade <= 50 ){
                    // velho
                }
                else{
                    // idoso
                }
                    

            }else if (sex[1].checked){
                genero = 'Mulher'
            }
            resultado.innerHTML = `temos ${genero} com ${idade} anos`
            resultado.appendChild(img)
        }
        
    }