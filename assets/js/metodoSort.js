const botaoOrdenarPreco = document.querySelector('#botaoOrdenarPreco')

botaoOrdenarPreco.addEventListener('click', ordenarPrecoLivros)

function ordenarPrecoLivros() {
    // Cria uma copia do array de objetos 'livros' para que o método sort() não modifique o array original    
    const livrosClone = [...livros]
    
    // Ordena de forma crescente os objetos de livrosClone de acordo com o valor da sua propriedade preco 
    const livrosOrdenados = livrosClone.sort((a, b) => {
        return a.preco - b.preco
    })

    // Exibe na tela o os livros ordenados pelo preço
    exibirLivros(livrosOrdenados)
}