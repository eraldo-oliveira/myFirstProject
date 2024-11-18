

function HomePage() {
  return (
    <>
      <section className="relative w-full h-96 bg-cover bg-center">
        <img className="w-full h-full object-cover" src="./images/image.png" alt="Imagem de Destaque"/> 
        <div className="absolute inset-0"></div> 
        <div className="absolute bottom-0 right-0 p-14 text-white">
          <h1 className="text-3xl md:text-5xl font-bold">Bem-vindo ao Site</h1>
        </div>
      </section>

      
    </>
  );
}

export default HomePage;
