import produtos from "../components/array.jsx";

export default function Cards() {
    console.log('Renderizando Cards');
    return (
        <>
            <main className="p-5 mb-24">
                <section>
                    <div className="produtos-container flex flex-col gap-5
                    md:flex-row md:grid md:grid-cols-3
                    ">
                        {produtos.map(produto => (
                            <div key={produto.id} className="produto-card flex flex-col gap-4 border p-4 rounded shadow-md bg-white">
                                <div>
                                    <img src={produto.imagem} alt={produto.personagem} className="flex m-auto h-64 object-cover rounded" />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xl text-center font-bold">{produto.titulo}</h2>
                                    <h4 className="text-lg text-center text-gray-500">{produto.subtitulo}</h4>
                                    <p className="text-gray-700 text-justify">{produto.descricao}</p>
                                </div>
                                
                                
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-lg">R$ {produto.preco.toFixed(2)}</span>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Comprar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}


