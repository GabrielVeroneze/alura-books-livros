const botaoOrdenarPreco = document.querySelector('#BotaoOrdenarPreco')

botaoOrdenarPreco.addEventListener('click', ordenarPrecoLivros)

function ordenarPrecoLivros() {
    // Cria uma copia do array livros para que o método sort() não modifique o array original    
    const livrosClone = [...livros]
    
    const livrosOrdenados = livrosClone.sort((a, b) => {
        return a.preco - b.preco
    })

    exibirLivros(livrosOrdenados)
}