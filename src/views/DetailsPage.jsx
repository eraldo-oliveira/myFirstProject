import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";

function LocationDetailsPage({params}) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    // Realiza a requisição para buscar o arquivo JSON
    fetch('/data/cardList.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        const filterData = data.filter(value => {
            return value.slug == params.citySlug
        })
        setDetails(filterData); // Atualiza o estado com os dados
      });
  }, []); // O array vazio significa que o efeito ocorre apenas uma vez


  return (
    <main>
        {details.map((details) => (
        <section key={details.id} className="bg-gray-100">
            {/* Nome da cidade, país e data da visita */}
            <div className="container mx-auto p-6 w-96">
                <div className="bg-blue-600 text-white p-4 rounded-lg text-center">
                    <h1 className="text-2xl font-bold">{details.city} - {details.country}</h1>
                    <p className="mt-1 text-lg">Data da visita: {details.date}</p>
                </div>
            </div>

            <ImageSlider/>

            {/* Descrição do Local e Condições Meteorológicas */}
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-20">
                    {/* Descrição do Local */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Descrição de {details.city}</h2>
                            <p className="text-justify">
                                {details.description}
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
         ))}
    </main>
  );
}

export default LocationDetailsPage;
