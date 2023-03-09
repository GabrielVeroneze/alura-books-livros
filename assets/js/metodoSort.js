const botaoOrdenarPreco = document.querySelector('#botaoOrdenarPreco')

botaoOrdenarPreco.addEventListener('click', ordenarPrecoLivros)

function ordenarPrecoLivros() {
    const livrosClone = [...livros]
    
    const livrosOrdenados = livrosClone.sort((a, b) => {
        return a.preco - b.preco
    })

    exibirLivros(livrosOrdenados)
}