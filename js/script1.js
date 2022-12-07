document.addEventListener('DOMContentLoaded', function() {
    loc = window.location.pathname
    dir = loc.substring(0, loc.lastIndexOf('/'))
    fotos = dir + '/fotos'
    // Tipo de tarefas 
    tarefas = document.querySelector('.tarefas')
    add_tarefa = document.querySelector('.add_tarefa')
    fundo = document.querySelector('.fundo')
    inputs = document.querySelectorAll('input')
    opcoes = document.querySelector('.opcoes')
    adicionar = document.querySelector('.confirma')
    cancela = document.querySelector('.cancela')
    a = opcoes.querySelector('a')
    tarefa_concluida = document.querySelector('.tarefa_concluida')

    add_tarefa.addEventListener('click', function(){
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
            nova_tarefa_nome.innerHTML = tipo

            checkbox = document.createElement('img')
            checkbox.classList.add('checkbox')
            checkbox.src = fotos + '/box.png'
            afazer = checkbox.src
            concluir = checkbox.src.replace('box','checkbox')
            checkbox.addEventListener('click',function(){
                if (checkbox.src == afazer){
                    checkbox.src = concluir
                }
                else if (checkbox.src == concluir){
                    checkbox.src = afazer
                }
                
            })

            trash = document.createElement('img')
            trash.src = fotos + '/trash.png'
            trash.addEventListener('click', function(){
                nova_tarefa.remove()
            })

            icones = document.createElement('ul')

            
            icones.appendChild(checkbox)
            icones.appendChild(trash)
            nova_tarefa_nome.appendChild(icones)
            nova_tarefa.appendChild(nova_tarefa_nome)

            nova_tarefa_cargo = document.createElement('h4')
            nova_tarefa_cargo.classList.add('setor')
            nova_tarefa_cargo.innerHTML = 'Responsável: ' + cargo
            nova_tarefa.appendChild(nova_tarefa_cargo)

            tarefas.appendChild(nova_tarefa)
            fundo.style.height = '0rem'
            checkbox_lista = document.querySelectorAll('.checkbox')
            for (input of inputs){
                input.value = ''
            }
        }
        
    })
    
    cancela.addEventListener('click', function(){
        fundo.style.height = '0rem'
        for (input of inputs){
            input.value = ''
        }
    })

    })





