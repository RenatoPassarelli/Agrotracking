document.addEventListener('DOMContentLoaded', function() {
    enviar = document.querySelector('.botao-enviar')
    input = document.querySelector('.entrada-msg')
    msg_painel = document.querySelector('.msg-panel')
    enviar.addEventListener('click',function(){
        mensagem = document.createElement('p')
        mensagem.innerHTML = input.value

        bolha_resposta = document.createElement('div')
        bolha_resposta.classList.add('bolha-resposta')

        bolha_resposta.appendChild(mensagem)

        msg_titulo = document.createElement('div') 
        msg_titulo.classList.add('msg-titulo-invertida')

        nome = document.createElement('h2')
        horario = document.createElement('h3')
        
        nome.innerHTML = 'Eu'
        horario.innerHTML = "08:07" + ' 07/12'

        msg_titulo.appendChild(nome)
        msg_titulo.appendChild(horario)

        msg_resposta = document.createElement('section')
        msg_resposta.classList.add('msg-resposta')
        msg_resposta.appendChild(msg_titulo)
        msg_resposta.appendChild(bolha_resposta)

        msg_painel.appendChild(msg_resposta)
        input.value = ''

    })

    prof = document.querySelectorAll('.msg-usuario')
    perfil = document.querySelector('.perfil')
    console.log(perfil)
    i = 0
    while (i<(prof.length)){
        nome = prof[i].querySelectorAll('h2')
        nome[0].innerHTML = perfil.innerHTML
        
        i+=1
    }

    eu = document.querySelectorAll('.msg-resposta')
    i = 0
    while (i<(eu.length)){
        re = eu[i].querySelectorAll('h2')
        re[0].innerHTML = 'Eu'
        i+=1
    }

    i = 0
    horário = document.querySelectorAll('h3')
    x = 0
    while (i<(horário.length)){

        hora = "08:0"+ x + ' 07/12'
        horário[i].innerHTML = hora
        i+=1
        x+=1
    }
})