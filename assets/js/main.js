var tarefa = document.getElementById('txt')
var contador = localStorage.getItem("contador")
//localStorage.setItem("contador", 0)
//^ Serve para zerar o contador, mas será preciso apagar as tarefas criadas no localStorage do navegador.
function adicionarProximoNumero() {
    contador++
    localStorage.setItem("contador", contador)
}

function adicionar() {
    if (tarefa.value !== "") {
        let item = document.createElement('p');
        let lista = document.getElementById('lista');
        item.innerHTML = `— ${tarefa.value}.`;
        localStorage.setItem(`pointer${contador}`, tarefa.value);
        lista.appendChild(item);
        tarefa.value = "";
        item.setAttribute('class', 'pointer');
        item.style.width = 'fit-content';
        item.title = 'Clique uma vez para riscar ou duas vezes para excluir!';
        item.id = `pointer${contador}`;

        // Atualiza o estado riscado
        atualizarEstadoRiscado(item, item.id);

        adicionarProximoNumero();
    } else {
        alert('[ERRO] Digite um nome para a tarefa!');
    }
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
            atualizarEstadoRiscado(item, item.id);
            function adicionar() {
                if (tarefa.value !== "") {
                    let item = document.createElement('p');
                    let lista = document.getElementById('lista');
                    item.innerHTML = `— ${tarefa.value}.`;
                    localStorage.setItem(`pointer${contador}`, tarefa.value);
                    lista.appendChild(item);
                    tarefa.value = "";
                    item.setAttribute('class', 'pointer');
                    item.style.width = 'fit-content';
                    item.title = 'Clique uma vez para riscar ou duas vezes para excluir!';
                    item.id = `pointer${contador}`;
            
                    // Atualiza o estado riscado
                    atualizarEstadoRiscado(item, item.id);
            
                    adicionarProximoNumero();
                } else {
                    alert('[ERRO] Digite um nome para a tarefa!');
                }
            }
        }
    }
}    

// função riscar salva inicio
function atualizarEstadoRiscado(item, id) {
    let riscado = localStorage.getItem(`riscado${id}`) === 'true';

    if (riscado) {
        item.style.textDecoration = 'line-through';
    } else {
        item.style.textDecoration = 'none';
    }

    item.addEventListener('click', function () {
        if (item.style.textDecoration === 'line-through') {
            item.style.textDecoration = 'none';
            localStorage.setItem(`riscado${id}`, 'false');
            item.title = 'Clique uma vez para riscar ou duas vezes para excluir!';
        } else {
            item.style.textDecoration = 'line-through';
            localStorage.setItem(`riscado${id}`, 'true');
            item.title = 'Clique uma vez para retirar o risco ou duas vezes para excluir!';
        }
    });

    item.addEventListener('dblclick', function () {
        let lista = document.getElementById('lista');
        lista.removeChild(item);
        localStorage.removeItem(id);
        localStorage.removeItem(`riscado${id}`);
    });
}
// função riscar salva fim

window.onload = CarregarPagina();

//Precisei da ajuda do meu amigo Kenay com o localStorage.

//começo do caderno
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('txtanotacoes');
    const pageElement = document.getElementById('page');
    const arrowLeft = document.querySelector('.arrow1');
    const arrowRight = document.querySelector('.arrow2');
    let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;

    function carregarPagina(pagina) {
        currentPage = pagina;
        pageElement.textContent = `Página ${currentPage}`;
        textarea.value = localStorage.getItem(`pagina${currentPage}`) || '';
        // Atualiza a visibilidade da seta esquerda
        if (currentPage > 1) {
            arrowLeft.classList.add('show');
        } else {
            arrowLeft.classList.remove('show');
        }
    }

    function salvarPagina() {
        localStorage.setItem(`pagina${currentPage}`, textarea.value);
    }

    function navegarPagina(direcao) {
        salvarPagina();
        let novaPagina = currentPage + direcao;
        if (novaPagina < 1) novaPagina = 1; // Impede números de página negativos
        carregarPagina(novaPagina);
        localStorage.setItem('currentPage', novaPagina);
    }

    // Carregar a página atual quando a página é carregada
    carregarPagina(currentPage);

    // Adicionar event listeners para as setas
    arrowLeft.addEventListener('click', () => navegarPagina(-1));
    arrowRight.addEventListener('click', () => navegarPagina(1));

    // Salvar o conteúdo quando a página é descarregada
    window.addEventListener('beforeunload', salvarPagina);
});
//final do caderno

//Tive uma extrema ajuda do Chat-GPT não criação dessa função de caderno