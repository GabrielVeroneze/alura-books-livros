const botoes = document.querySelectorAll('.navegacao__botao')

botoes.forEach(botao => {
    // O evento de clique chama a função 'filtrarLivros' para cada botao
    botao.addEventListener('click', event => filtrarLivros(event.target.value))
})

// recebe como parâmetro o valor do botao clicado ('front-end', 'back-end', 'dados')
function filtrarLivros(categoria) {
    // Cria um novo array com os livros que possuir o valor da categoria igual o do botao clicado
    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria)
    
    // Exibe os livros filtrados na tela
    exibirLivros(livrosFiltrados)
}