function goBack() {
    window.history.back()
}
document.addEventListener('DOMContentLoaded', function() {
    barra = document.querySelectorAll('.barra')
    button = document.querySelectorAll(".button")
    frequencia_menu = document.querySelector('.frequencia')
    console.log(frequencia_menu.innerHTML)
    botao = document.querySelector('.botao_menu')
    fechado = botao.src 
    aberto = fechado.replace('fechado','aberto')
    menu = document.querySelector('.barra_menu')

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
            frequencia_menu.innerHTML = 'Frequência das tarefas'
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
            frequencia_menu.innerHTML = ''
        }
    })
})