document.addEventListener('DOMContentLoaded', function() {
    loc = window.location.pathname
    dir = loc.substring(0, loc.lastIndexOf('/'))
    // Tipo de tarefas 
    inputs = document.querySelectorAll('input')
    opcoes = document.querySelector('.opcoes')
    adicionar = document.querySelector('.confirma')
    a = opcoes.querySelector('a')

    adicionar.addEventListener('click', function(){
        t = 0
        for (input of inputs){
            if (input.value.trim() == 0){
                input.classList.add('error') 
            }
            else if(input.value.trim() != 0) {
                input.classList.remove('error')
                t += 1
            }
        }    
        if(t == inputs.length){
            a.href = dir + '/Index.html'
        }
    })

    })
    




