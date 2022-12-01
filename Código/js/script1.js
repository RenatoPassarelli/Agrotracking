document.addEventListener('DOMContentLoaded', function() {
    loc = window.location.pathname
    dir = loc.substring(0, loc.lastIndexOf('/'))
    index = dir + '/Index.html'
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
                if (input == inputs[0]){
                    tipo = input.value
                }
                if (input == inputs[1]){
                    cargo = input.value
                }
                if (input == input[2]){
                    data_inicio = input.value
                }
                if (input == input[3]){
                    data_fim = input.value
                }
                if (input == input[4]){
                    subtarefa = input.value
                }
                t += 1
            }
        }    

        if(t == inputs.length){
            nova_tarefa = document.createElement('li')
            nova_tarefa.classList.add('tarefa')
            
            nova_tarefa_nome = document.createElement('p')
            nova_tarefa_nome.classList.add('setor')
            nova_tarefa_nome.style.color = '#b10f0f'
            nova_tarefa_nome.type = 'checkbox'
            nova_tarefa_nome.innerHTML = tipo
            nova_tarefa.appendChild(nova_tarefa_nome)

            nova_tarefa_cargo = document.createElement('h4')
            nova_tarefa_cargo.classList.add('setor')
            nova_tarefa_cargo.innerHTML = 'Responsável: ' + cargo
            nova_tarefa.appendChild(nova_tarefa_cargo)

            console.log(nova_tarefa)

            a.href = index
        }
    })
    })





