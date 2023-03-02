let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

buscarLivrosDaAPI ()

async function buscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()

    let livrosComDesconto = aplicarDesconto(livros)

    exibirLivros(livrosComDesconto)
}