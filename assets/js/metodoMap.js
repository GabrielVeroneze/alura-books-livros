function aplicarDesconto(livros) {
    const desconto = 0.3
    
    // O método map vai invocar a função callback para cada objeto do array livros
    const livrosClone = livros.map(livro => {
        return {
            ...livro,   // Faz uma cópia do objeto 'livro'
            preco: livro.preco - (livro.preco * desconto)   // Altera o valor da chave 'preco'
        }
    })

    // Retorna um novo array de objetos com o desconto aplicado
    return livrosClone
}