import { Link } from "wouter";
import { useEffect, useState } from "react";

function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Realiza a requisição para buscar o arquivo JSON
    fetch('/data/cardList.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCards(data); // Atualiza o estado com os dados
      });
  }, []); // O array vazio significa que o efeito ocorre apenas uma vez


  return (
    <main>
      <section>
        <div className="container mx-auto bg-[#D1EDE1] p-6">
        <div className="text-center p-0 mb-8 mt-2">
          <h2 className="text-lg md:text-3xl font-bold text-black">
            <i class="fa-solid fa-arrow-down"></i> ÚLTIMOS LUGARES VISITADOS <i class="fa-solid fa-arrow-down"></i>
          </h2>
        </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Mapear os dados para gerar os cards */}
            {cards.map((card) => (
              <Link key={card.id} href={`details/${card.slug}`}>
                <div className="bg-white overflow-hidden rounded-xl shadow-lg">
                  <figure className="flex justify-center h-2/3">
                    <img
                      className="w-full h-[250px] object-cover rounded-xl p-2"
                      src={card.image}
                      alt={`Imagem da cidade de ${card.city}`}
                    />
                  </figure>
                  <div className="flex flex-col p-4 pt-1 text-center lg:text-xl">
                    <span className="font-semibold">{card.city} - {card.country}</span>
                    <span>
                      <i className="fa-regular fa-calendar"></i> {card.datein}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Card;
