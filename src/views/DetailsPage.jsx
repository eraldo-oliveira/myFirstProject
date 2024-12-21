import { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";

function LocationDetailsPage({ params }) {
  const [details, setDetails] = useState([]);
  const [weather, setWeather] = useState(null); 

  useEffect(() => {
    // Realiza a requisição para buscar o arquivo JSON
    fetch("/data/cardList.json")
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.filter((value) => {
          return value.slug === params.citySlug;
        });
        setDetails(filterData); // Atualiza o estado com os dados do local
      });
  }, [params.citySlug]); // A dependência vai garantir que a busca seja feita sempre que o parâmetro mudar

  useEffect(() => {
    // Se detalhes não tiver dados (ainda) ou não houver cidade, não faz sentido buscar o clima
    if (details.length === 0 || !details[0]?.city) return;

    const apiKey = "cb3b612359b393ff6a260254d1516fa0";
    const cityName = details[0].city;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`;

    // Requisição para a API do OpenWeatherMap
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data); // Atualiza o estado com as condições meteorológicas
      })
      .catch((error) => {
        console.error("Erro ao buscar dados meteorológicos:", error);
      });
  }, [details]); // O efeito roda toda vez que os detalhes da cidade mudam

  return (
    <main>
      {details.map((detail) => (
        <section key={detail.id} className="bg-[#D1EDE1]">
          {/* Nome da cidade, país e data da visita */}
          <div className="container mx-auto p-6 w-full max-w-screen-lg">
            <div className="bg-[#7BC5AE] text-white p-4 rounded-lg text-center">
              <h1 className="text-2xl md:text-3xl font-bold">
                {detail.city} - {detail.country}
              </h1>
              <p className="mt-1 text-lg md:text-xl"><i class="fa-solid fa-plane-arrival"></i> - Chegada: {detail.datein}</p>
              <p className="mt-1 text-lg md:text-xl"><i class="fa-solid fa-plane-departure"></i> -  Saída: {detail.dateout}</p>
            </div>
          </div>

          <ImageSlider />

          {/* Descrição do Local e Condições Meteorológicas */}
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4 lg:mt-6">
              {/* Descrição do Local */}
              <div className="bg-white p-6 rounded-lg shadow-lg lg:mb-6 lg:ml-40">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Descrição de {detail.city}
                </h2>
                <p className="text-justify text-lg">{detail.description}</p>
              </div>

              {/* Condições Meteorológicas */}
              <div className="bg-[#D1EDE1] flex items-center justify-center h-full mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Condições Meteorológicas
                  </h2>
                  {weather ? (
                    <ul className="text-lg space-y-2">
                      <li>
                        <strong>Temperatura:</strong> {Math.round(weather.main.temp)}°C
                      </li>
                      <li>
                        <strong>Descrição:</strong> {weather.weather[0].description}
                      </li>
                      <li>
                        <strong>Umidade:</strong> {Math.round(weather.main.humidity)}%
                      </li>
                      <li>
                        <strong>Vento:</strong> {Math.round(weather.wind.speed)} km/h
                      </li>
                    </ul>
                  ) : (
                    <p>Carregando as condições meteorológicas...</p>
                  )}
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

