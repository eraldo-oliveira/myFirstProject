
function Card() {
    return (
      <>
        <main>
          {/*  Area Cards */}
          <section>
            <div className="container mx-auto bg-gray-200 p-6">
                  <div className="grid md:grid-cols-3 gap-8">
                      {/* CARD */}
                      <div className="bg-white overflow-hidden rounded-xl shadow-lg">
                        <figure className="flex justify-center">
                          <img 
                            className="w-full h-full object-cover rounded-xl p-2"
                            src="./images/berlin.png" 
                            alt="Imagem da cidade de Berlin, Alemanha" 
                          />
                        </figure>
                        <div className="flex flex-col p-4">
                          <span className="font-semibold">Berlin - Alemanha</span>
                          <span>12-07-2021</span>
                        </div>
                      </div>
                      {/* CARD */}
                      <div className="bg-white overflow-hidden rounded-xl shadow-lg">
                        <figure className="flex justify-center">
                          <img 
                            className="w-full h-full object-cover rounded-xl p-2"
                            src="./images/berlin.png" 
                            alt="Imagem da cidade de Berlin, Alemanha" 
                          />
                        </figure>
                        <div className="flex flex-col p-4">
                          <span className="font-semibold">Berlin - Alemanha</span>
                          <span>12-07-2021</span>
                        </div>
                      </div>
                      {/* CARD */}
                      <div className="bg-white overflow-hidden rounded-xl shadow-lg">
                        <figure className="flex justify-center">
                          <img 
                            className="w-full h-full object-cover rounded-xl p-2"
                            src="./images/berlin.png" 
                            alt="Imagem da cidade de Berlin, Alemanha" 
                          />
                        </figure>
                        <div className="flex flex-col p-4">
                          <span className="font-semibold">Berlin - Alemanha</span>
                          <span>12-07-2021</span>
                        </div>
                      </div>
                  </div>
              </div>
          </section>
        </main>
      </>
    );
  }
  
  export default Card;