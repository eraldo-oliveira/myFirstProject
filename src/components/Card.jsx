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
      {/* Area Cards */}
      <section>
        <div className="container mx-auto bg-gray-200 p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mapear os dados para gerar os cards */}
            {cards.map((card) => (
              <Link key={card.id} href='details'>
                <div className="bg-white overflow-hidden rounded-xl shadow-lg">
                  <figure className="flex justify-center">
                    <img
                      className="w-full h-full object-cover rounded-xl p-2"
                      src={card.image}
                      alt={`Imagem da cidade de ${card.city}`}
                    />
                  </figure>
                  <div className="flex flex-col p-4">
                    <span className="font-semibold">{card.city} - {card.country}</span>
                    <span>
                      <i className="fa-regular fa-calendar"></i> {card.date}
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
