import Card from "../components/Card";

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section>
        <div className="container mx-auto bg-red-300 relative w-full h-96 bg-cover bg-center">
          <img
            className="w-full h-full object-cover"
            src="./images/image.png"
            alt="Imagem de Destaque"
          />
          <div className="absolute inset-0"></div>
          <div className="absolute bottom-0 right-0 p-14 text-white">
            <span className="text-3xl md:text-5xl font-bold">
              Bem-vindo ao Site
            </span>
          </div>
        </div>
      </section>

      <Card />
  
    </main>
  );
}

export default HomePage;