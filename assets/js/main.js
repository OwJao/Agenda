var tarefa = document.getElementById ('txt')
function adicionar() {
    if (tarefa.value != "") {
    let item = document.createElement('p', 'pointer')
    let lista = document.getElementById('lista')
    let riscado = false
    item.innerHTML = `— ${tarefa.value}.`
    lista.appendChild(item)
    tarefa.value = ""
    item.setAttribute('id', 'pointer')
    item.style.width = ('fit-content')
    item.title = 'Clique uma vez para riscar ou duas vezes para excluir!'
    item.addEventListener('click', function() {
        if (riscado == false) {
            item.style.textDecoration = 'line-through'
            riscado = true
            item.title = 'Clique uma vez para retirar o risco ou duas vezes para excluir!'
        } else {
            item.style.textDecoration = 'none'
            riscado = false
            item.title = 'Clique uma vez para riscar ou duas vezes para excluir!'
        }
        
    })
    item.addEventListener('dblclick', function() {
        lista.removeChild(item)
    })
    } else {
        alert('[ERRO] Digite um nome para a tarefa!')
    }
}

