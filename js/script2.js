document.addEventListener('DOMContentLoaded', function() {
    loc = window.location.pathname
    dir = loc.substring(0, loc.lastIndexOf('/'))
    fotos = dir + '/fotos/'
    input = document.querySelector('.barra_buscar')
    buscar = document.querySelector('.lupa')
    cab1 = document.querySelector('.cab1')
    cab2 = document.querySelector('.cab2')
    buscar.addEventListener('click', function(){
        minuscula = input.value.toLowerCase()
        if(minuscula == 'tarefas' ){
            cab1.style.height = '40rem'
            cab2.style.height = '0rem'
            input.value = ''
            input.style.borderColor = 'black'
        }
        else if(minuscula == 'colheita'){
            cab2.style.height = '40rem'
            cab1.style.height = '0rem'
            input.value = ''
            input.style.borderColor = 'black'
        }
        else{
            input.style.borderColor = 'red'
        }
    })
})
