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

})
