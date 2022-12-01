

document.addEventListener('DOMContentLoaded', function() {
     // Tipo de tarefas 
     tipos = document.querySelector('.tipos')
     tamanho_fechado = tipos.style.height
     tamanho_aberto = '5rem'
     seta = tipos.querySelector('.seta')
    
     seta.addEventListener('click', function(event) {
        if(tipos.style.height == tamanho_fechado){
            tipos.style.height = tamanho_aberto
            coluna = document.createElement('li')
            coluna.style.display = 'flex'
            coluna.style.flexDirection = 'column'
            secagem = document.createElement('ul')
            secagem.innerHTML = 'Secagem'
            colheita = document.createElement('ul')
            colheita.innerHTML = 'Colheita'
            coluna.appendChild(secagem)
            coluna.appendChild(colheita)
            tipos.appendChild(coluna)
        }
        else if (tipos.style.height == tamanho_aberto){
            tipos.style.height = tamanho_fechado
            tipos.removeChild(coluna)
        }
     })
})

