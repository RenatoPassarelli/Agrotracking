document.addEventListener('DOMContentLoaded', function() {
    // Tipo de tarefas 
    tipo = document.querySelector('.padrao')   
    cargo = document.querySelector('.cargo')
    sub = document.querySelector('.sub')
    datas = document.querySelectorAll('.data')
    adicionar = document.querySelector('.confirma')

    adicionar.addEventListener('click', function(){
        if(tipo.value.trim()<=0){
            tipo.style.borderColor = 'red'
        }
        if(cargo.value.trim()<=0){
            cargo.style.borderColor = 'red'
        }
        if(sub.value.trim()<= 0){
            sub.style.borderColor = 'red'
        }
        for (data of datas){
            if(data.value.trim()<= 0){
                data.style.borderColor = 'red'
            }
        }
    })

    })
    




