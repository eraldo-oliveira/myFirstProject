import Card from "../components/Card";

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section>
        <div className="container mx-auto relative w-full h-full bg-cover bg-center">
          <img
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
            src="./images/main.png"
            alt="Imagem de Destaque"
          />
        </div>
      </section>

      <Card />
  
    </main>
  );
}

export default HomePage;