const botoes = document.querySelectorAll('.navegacao__botao')

botoes.forEach(botao => {
    // O evento de clique chama a função 'filtrarLivros' para cada botao
    botao.addEventListener('click', event => filtrarLivros(event.target.value))
})

// recebe como parâmetro o valor do botao clicado ('front-end', 'back-end', 'dados', 'disponivel')
function filtrarLivros(categoria) {
    // Se a categoria for igual 'disponivel' chama a função filtrarPorDisponibilidade(), senão, chama a função filtrarPorCategoria()  
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    
    // Exibe os livros filtrados na tela
    exibirLivros(livrosFiltrados)
    
    if (categoria == 'disponivel') {
        const valorTotal = calculaValorTotal(livrosFiltrados)
        exibirValorTotalLivros(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    // Retorna um novo array com os livros que possuir o valor da categoria igual o do parâmetro categoria
    return livros.filter(livro => livro.categoria === categoria)
}

function filtrarPorDisponibilidade() {
    // Retorna um novo array com os livros que possuir a quantidade maior que zero
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivros(valorTotal) {

    elementoComValorTotalLivros.innerHTML = `
        <div class="mensagem">
            <p class="mensagem__texto">Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}