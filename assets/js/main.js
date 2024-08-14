var tarefa = document.getElementById ('txt')
function adicionar() {
    if (tarefa.value != "") {
    let item = document.createElement('p', 'pointer')
    let lista = document.getElementById('lista')
    item.innerHTML = `— ${tarefa.value}.`
    lista.appendChild(item)
    tarefa.value = ""
    item.setAttribute('id', 'pointer')
    item.style.width = ('fit-content')
    item.addEventListener('click', function() {
        item.style.textDecoration = 'line-through'
    })
    } else {
        alert('[ERRO] Digite um nome para a tarefa!')
    }
}

