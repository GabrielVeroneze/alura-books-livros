function aplicarDesconto(livros) {
    const desconto = 0.3
    
    const livrosClone = livros.map(livro => {
        return {
            ...livro,
            preco: livro.preco - (livro.preco * desconto)
        }
    })

    return livrosClone
}