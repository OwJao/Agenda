var tarefa = document.getElementById('txt')
var contador = localStorage.getItem("contador")
//localStorage.setItem("contador", 0)
//^ Serve para zerar o contador
function adicionarProximoNumero() {
    contador++
    localStorage.setItem("contador", contador)
}

function adicionar() {
    if (tarefa.value != "") {
        let item = document.createElement('p')
        let lista = document.getElementById('lista')
        let riscado = false
        item.innerHTML = `— ${tarefa.value}.`
        localStorage.setItem(`pointer${contador}`, tarefa.value)
        lista.appendChild(item)
        tarefa.value = ""
        item.setAttribute('class', 'pointer')
        item.style.width = ('fit-content')
        item.title = 'Clique uma vez para riscar ou duas vezes para excluir!'
        item.id = `pointer${contador}`//
        item.addEventListener('click', function () {
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
        item.addEventListener('dblclick', function () {
            lista.removeChild(item)
            localStorage.removeItem(item.id)

        })
    } else {
        alert('[ERRO] Digite um nome para a tarefa!')
    }
    adicionarProximoNumero()
}

function CarregarPagina() {
    for (let i = 0; i <= contador; i++) {
        if (localStorage.getItem(`pointer${i}`) != null) {
            let item = document.createElement('p')
            let lista = document.getElementById('lista')
            let riscado = false
            item.innerHTML = `— ${localStorage.getItem(`pointer${i}`)}.`
            lista.appendChild(item)
            tarefa.value = ""
            item.setAttribute('class', 'pointer')
            item.style.width = ('fit-content')
            item.title = 'Clique uma vez para riscar ou duas vezes para excluir!'
            item.id = `pointer${i}`//
            item.addEventListener('click', function () {
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
            item.addEventListener('dblclick', function () {
                lista.removeChild(item)
                localStorage.removeItem(`pointer${i}`)
            })
        }
    }
}    

window.onload = CarregarPagina();

//Precisei do Kenay para utilizar o localStorage.
