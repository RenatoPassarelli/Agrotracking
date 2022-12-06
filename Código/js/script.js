function goBack() {
    window.history.back()
}
document.addEventListener('DOMContentLoaded', function() {

    //Menu lateral

    barra = document.querySelectorAll('.barra')
    button = document.querySelectorAll(".button")
    botao = document.querySelector('.botao_menu')
    fechado = botao.src 
    aberto = fechado.replace('fechado','aberto')

    botao.addEventListener('click', function(event) {
        if (botao.src == fechado){
            botao.src = aberto
            for(opcao of barra) {
                opcao.style.width = "12rem"
                pagina = opcao.querySelectorAll('a')
                for(pgn of pagina){
                    pgn.style.width = '12rem'
                }
            }
            
        }
        else if (botao.src == aberto){
            botao.src = fechado
            for(opcao of barra) {
                opcao.style.width = "0rem"
                pagina = opcao.querySelectorAll('a')
                for(pgn of pagina){
                    pgn.style.width = '0rem'
                }
            }
            
        }
    })

    prof = document.querySelectorAll('.msg-usuario')
    i = 0
    while (i<(prof.length)){
        nome = prof[i].querySelectorAll('h2')
        nome[0].innerHTML = 'Funcionário x'
        
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

        hora = "08:0"+ x + ' 07 de Dezembro'
        horário[i].innerHTML = hora
        i+=1
        x+=1
    }

})
