const botoes = document.querySelectorAll('.navegacao__botao')

botoes.forEach(botao => {
    // O evento de clique chama a função 'filtrarLivros' para cada botao
    botao.addEventListener('click', event => filtrarLivros(event.target.value))
})

// recebe como parâmetro o valor do botao clicado ('front-end', 'back-end', 'dados', 'disponivel')
function filtrarLivros(categoria) {
    // Se a categoria for igual 'disponivel' cria um novo array com os livros que possuir a quantidade maior que zero
    // Senão, cria um novo array com os livros que possuir o valor da categoria igual o do parâmetro categoria
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria === categoria)

    // Exibe os livros filtrados na tela
    exibirLivros(livrosFiltrados)
}