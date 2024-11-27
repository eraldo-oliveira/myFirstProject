

function TheTravelerPage() {
    return (
        <>
          <main>
            {/* Área do Viajante */}
            <section className="container mx-auto p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Foto Viajante */}
                <div className="w-full md:w-2/5 lg:w-1/5 mb-6 md:mb-0">
                  <div>
                    <img 
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                      src="./images/image.png" 
                      alt="Foto do Viajante"
                    />
                  </div>
                </div>

                {/* Texto sobre o Viajante */}
                <div className="w-full md:w-4/5">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">Sobre o Viajante</h1>
                  <p className="text-lg text-justify text-gray-700">
                    Este viajante tem uma paixão por explorar o mundo e conhecer novas culturas. 
                    Com uma curiosidade insaciável e uma vontade de aprender, ele já percorreu diversos continentes, 
                    descobrindo lugares incríveis e conhecendo pessoas inspiradoras. 
                    Sua jornada é marcada por momentos únicos, que ele compartilha com todos aqueles que têm a sorte de cruzar seu caminho.
                    Este viajante tem uma paixão por explorar o mundo e conhecer novas culturas. 
                    Com uma curiosidade insaciável e uma vontade de aprender, ele já percorreu diversos continentes, 
                    descobrindo lugares incríveis e conhecendo pessoas inspiradoras. 
                    Sua jornada é marcada por momentos únicos, que ele compartilha com todos aqueles que têm a sorte de cruzar seu caminho.
                    Este viajante tem uma paixão por explorar o mundo e conhecer novas culturas. 
                    Com uma curiosidade insaciável e uma vontade de aprender, ele já percorreu diversos continentes, 
                    descobrindo lugares incríveis e conhecendo pessoas inspiradoras. 
                    Sua jornada é marcada por momentos únicos, que ele compartilha com todos aqueles que têm a sorte de cruzar seu caminho.
                    Este viajante tem uma paixão por explorar o mundo e conhecer novas culturas. 
                    Com uma curiosidade insaciável e uma vontade de aprender, ele já percorreu diversos continentes, 
                    descobrindo lugares incríveis e conhecendo pessoas inspiradoras. 
                    Sua jornada é marcada por momentos únicos, que ele compartilha com todos aqueles que têm a sorte de cruzar seu caminho.
                    
                  </p>
                </div>
              </div>
            </section>
          </main>
        </>
    );
}

export default TheTravelerPage;


