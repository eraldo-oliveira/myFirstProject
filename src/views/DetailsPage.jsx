

function LocationDetailsPage() {
  return (
    <main>
        <section className="bg-gray-100">
            {/* Cabeçalho com o nome da cidade, país e data da visita */}
            <div className="container mx-auto p-6 w-96">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                    <h1 className="text-2xl font-bold">Berlim, Alemanha</h1>
                    <p className="mt-1 text-lg">Data da visita: 27-11-2024</p>
                </div>
            </div>

            {/* Galeria de Imagens */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    <div className="w-full h-96 overflow-hidden">
                        <img src='./images/berlin.png' alt='Imagem de Berlim' className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Descrição do Local e Condições Meteorológicas */}
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Descrição do Local */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Descrição de Berlim</h2>
                            <p className="text-justify">
                                Berlim, a capital da Alemanha, é uma cidade rica em história e cultura. Famosa pelo Muro de Berlim, que dividiu a cidade durante a Guerra Fria, a cidade hoje é um símbolo de reunificação e modernidade. Além de ser um centro de arte, música e inovação, Berlim também possui marcos icônicos como a Porta de Brandemburgo, o Reichstag (parlamento) e a Ilha dos Museus.
                                <br />
                                A cidade oferece uma mistura única de passado e futuro, com bairros vibrantes, excelente vida noturna e muitos museus e galerias. Além disso, é um destino popular para turistas que buscam explorar sua rica herança cultural e histórica.
                            </p>
                    </div>

                    {/* Condições Meteorológicas */}
                    <div className="bg-gray-100">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto">
                            <h2 className="text-2xl font-semibold mb-4">Condições Meteorológicas</h2>
                                <ul>
                                    <li><strong>Temperatura:</strong> 10°C</li>
                                    <li><strong>Descrição:</strong> Nublado</li>
                                    <li><strong>Umidade:</strong> 80%</li>
                                    <li><strong>Vento:</strong> 15 km/h</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}

export default LocationDetailsPage;
