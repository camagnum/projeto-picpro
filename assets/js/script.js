// 1 ADICIONAR IDS NOS BOTÕES
// 2 SELECIONAR OS BOTÕES
// 3 INTERCEPTAR O EVENTO DE CLIQUE
// 4 RECUPERAR O ID ADICIONADO


// SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes");

// ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener('click', identificarOpcoes)

// EXECUTANDO AÇÃO DEPOIS DO CLIQUE
function identificarOpcoes(event) {
    
    // IDENTIFICANDO ONDE OCORREU O CLIQUE
    const element = event.target;

    // VERIFICANDO SE É UM LI
    if (element.tagName === "LI"){

        // RECUPERANDO O ID
        const id = element.id;

        // SELECIONANDO UMA SEÇÃO ATRAVÉS DE UM ID
        const escolhaUsuario = document.querySelector(`div[data-id="${id}"]`);
        
        // REMOVENDO CLASSE 'SHOW'
        removeClasseShow();

        // ADICIONANDO CLASSE 'SHOW'
        escolhaUsuario.classList.add("show")
    }
}

// REMOVER CLASSE 'SHOW' DE TODAS AS DIVS
function removeClasseShow() {
    const divs = document.querySelectorAll(".secaoTransacao .container div")

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.remove("show")
    }
}