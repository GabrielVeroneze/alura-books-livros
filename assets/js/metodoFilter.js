const botoes = document.querySelectorAll('.navegacao__botao')

botoes.forEach(botao => {
    botao.addEventListener('click', event => filtrarLivros(event.target.value))
})

function filtrarLivros(categoria) {
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    
    exibirLivros(livrosFiltrados)
    
    if (categoria == 'disponivel') {
        const valorTotal = calculaValorTotal(livrosFiltrados)
        exibirValorTotalLivros(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivros(valorTotal) {

    elementoComValorTotalLivros.innerHTML = `
        <div class="mensagem">
            <p class="mensagem__texto">Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}