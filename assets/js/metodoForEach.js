const elementoParaInserirLivros = document.querySelector('#livros')

function exibirLivros(listaDeLivros) {

    elementoParaInserirLivros.innerHTML = ''

    listaDeLivros.forEach(livro => {
        const disponibilidade = livro.quantidade > 0 ? '' : 'livros--indisponivel'

        elementoParaInserirLivros.innerHTML += `
            <div class="livros__card ${disponibilidade}">
                <img class="livros__imagem" src="${livro.imagem}" alt="${livro.alt}">
                <h2 class="livros__titulo">
                    ${livro.titulo}
                </h2>
                <p class="livros__descricao">${livro.autor}</p>
                <p class="livros__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="livros__tags">
                    <span class="livros__tag">${livro.categoria}</span>
                </div>
            </div>
        `
    })
}