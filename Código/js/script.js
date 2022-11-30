function goBack() {
    window.history.back()
}
document.addEventListener('DOMContentLoaded', function() {
menu = document.getElementsByClassName(".button")
console.log(menu)
botao = document.querySelector('.botao_menu')
fechado = botao.src 
aberto = fechado.replace('fechado','aberto')
header = document.querySelector("header")

botao.addEventListener('click', function(event) {
    if (botao.src == fechado){
        botao.src = aberto
        menu.style.width= '12rem'
    }
    else if (botao.src == aberto){
        botao.src = fechado
        menu.style.width = '0rem'
    }
})
})