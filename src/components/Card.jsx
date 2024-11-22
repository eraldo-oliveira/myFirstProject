
function Card() {
    return (
      <>
        <main>
          {/*  Area Cards */}
          <section>
            <div className="container mx-auto bg-red-600 p-6">
                  <div className="grid md:grid-cols-3 gap-8">
                      {/* CARD */}
                      <div className="bg-blue-600 overflow-hidden rounded-xl">
                          <div>
                          <figure className="flex justify-center">
                          <img 
                          className="w-full h-full object-cover rounded-xl p-1"
                          src="./images/berlin.png" 
                          alt="img-city" 
                          />
                          </figure>
                          </div>
                          <div className="flex flex-col">
                          <span className="">Berlin - Alemanha</span>
                          <span className="">12-07-2021</span>
                          </div>
                      </div>
                      {/* CARD */}
                      <div className="bg-blue-600 overflow-hidden rounded-xl">
                          <div>
                          <figure className="flex justify-center">
                          <img 
                          className="w-full h-full object-cover rounded-xl p-1"
                          src="./images/berlin.png" 
                          alt="img-city" 
                          />
                          </figure>
                          </div>
                          <div className="flex flex-col">
                          <span className="font-">Berlin - Alemanha</span>
                          <span className="">12-07-2021</span>
                          </div>
                      </div>
                      {/* CARD */}
                      <div className="bg-blue-600 overflow-hidden rounded-xl">
                          <div>
                          <figure className="flex justify-center">
                          <img 
                          className="w-full h-full object-cover rounded-xl p-1"
                          src="./images/berlin.png" 
                          alt="img-city" 
                          />
                          </figure>
                          </div>
                          <div className="flex flex-col">
                          <span className="">Berlin - Alemanha</span>
                          <span className="">12-07-2021</span>
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