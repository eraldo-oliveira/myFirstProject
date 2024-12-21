

function TheTravelerPage() {
    return (
        <>
          <main className="bg-[#D1EDE1]">
            {/* Área do Viajante */}
            <section className="container mx-auto p-8 ">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Foto Viajante */}
                <div className="w-full md:w-2/5 lg:w-1/5 mb-6 md:mb-0">
                  <div class="flex items-center justify-center h-full">
                    <img 
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                      src="./images/image.png" 
                      alt="Foto do Viajante"
                    />
                  </div>
                </div>

                {/* Texto sobre o Viajante */}
                <div className="w-full md:w-4/5">
                  <h1 className="text-3xl font-bold text-black mb-4">Sobre o Viajante</h1>
                  <p className="text-lg text-justify text-black">
                  Este viajante tem uma paixão por explorar o mundo e conhecer novas culturas. Com uma curiosidade insaciável e uma vontade de aprender, ele já percorreu diversos continentes, descobrindo lugares incríveis e conhecendo pessoas inspiradoras. Sua jornada é marcada por momentos únicos, que ele compartilha com todos aqueles que têm a sorte de cruzar seu caminho. O amor pela diversidade e pela aventura é o que o motiva a seguir em frente, sempre em busca de algo novo, seja uma paisagem desconhecida ou uma história fascinante de um local remoto.

                  Ele não se contenta apenas com as belezas turísticas mais famosas, mas busca imergir nas culturas locais, entender os hábitos e tradições de cada povo. Sua viagem não é apenas física, mas também uma jornada de autodescoberta. A cada novo destino, ele se transforma, levando consigo memórias, aprendizagens e, principalmente, amizades que surgem ao longo do caminho.

                  Ao longo dos anos, ele se tornou um contador de histórias, capaz de capturar a essência de cada lugar visitado. Com seu olhar atento, ele vê a beleza nas pequenas coisas: o sorriso genuíno de um desconhecido, o cheiro do mercado local, o som das ruas agitadas ou o silêncio das montanhas solitárias. Ele não apenas observa, mas vive intensamente cada experiência.

                  Apesar de tantas aventuras e de tantos lugares deslumbrantes, este viajante não coleciona souvenirs tradicionais. Em vez disso, ele carrega em seu coração as conexões que estabeleceu, as lições que aprendeu e o respeito profundo pelas culturas que teve o privilégio de conhecer. A cada novo amanhecer, ele se reinventa, ciente de que o mundo está cheio de possibilidades e de que cada passo dado é uma oportunidade de crescer.

                  Sua jornada é repleta de desafios, mas também de momentos de pura magia. Seja enfrentando dificuldades em terras desconhecidas ou compartilhando uma refeição simples com um novo amigo, ele percebe que a verdadeira riqueza de suas viagens está nas experiências e nos laços humanos que constrói. É um viajante que não apenas descobre o mundo, mas também a si mesmo, deixando-se ser transformado pela vastidão e pela diversidade que encontra em cada canto do planeta.                
                  </p>
                </div>
              </div>
            </section>
          </main>
        </>
    );
}

export default TheTravelerPage;


