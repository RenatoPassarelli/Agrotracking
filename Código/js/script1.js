document.addEventListener('DOMContentLoaded', function() {
    loc = window.location.pathname
    dir = loc.substring(0, loc.lastIndexOf('/'))
    index = dir + '/Index.html'
    // Tipo de tarefas 
    tarefas = document.querySelector('.tarefas')
    teste = document.querySelector('.teste')
    fundo = document.querySelector('.fundo')
    inputs = document.querySelectorAll('input')
    console.log(inputs)
    opcoes = document.querySelector('.opcoes')
    adicionar = document.querySelector('.confirma')
    a = opcoes.querySelector('a')

    teste.addEventListener('click', function(){
        for (input of inputs){
            input.value = ''
        }
        fundo.style.height = '50rem'
    })
    adicionar.addEventListener('click', function(){
        t = 0
        for (input of inputs){
            if (input.value.trim() == 0 && input != inputs[4]){
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
                if (input == inputs[2]){
                    data_inicio = input.value
                }
                if (input == inputs[3]){
                    data_fim = input.value
                }
                if (input == inputs[4]){
                    subtarefa = input.value
                }
                t += 1
            }
        }    

        if(t >= 4){
            nova_tarefa = document.createElement('li')
            nova_tarefa.classList.add('tarefa')
            
            nova_tarefa_nome = document.createElement('p')
            nova_tarefa_nome.classList.add('setor')
            nova_tarefa_nome.style.color = '#b10f0f'
            checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            nova_tarefa_nome.innerHTML = tipo
            nova_tarefa_nome.appendChild(checkbox)
            nova_tarefa.appendChild(nova_tarefa_nome)

            nova_tarefa_cargo = document.createElement('h4')
            nova_tarefa_cargo.classList.add('setor')
            nova_tarefa_cargo.innerHTML = 'Responsável: ' + cargo
            nova_tarefa.appendChild(nova_tarefa_cargo)

            tarefas.appendChild(nova_tarefa)
            fundo.style.height = '0rem'
        }


    })
    })





