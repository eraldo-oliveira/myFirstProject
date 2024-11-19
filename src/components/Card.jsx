
function Card() {
    return (
      <main>
        {/*  Area Cards */}
        <section>
          <div className="container mx-auto bg-red-600 p-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* CARD */}
                    <div className="container mx-auto bg-blue-600 h-60 font-bold rounded-xl">
                        <div className="flex justify-center p-6">
                        <img 
                        className="w-20 h-20 object-cover"
                        src="./images/berlim.png" 
                        alt="img-city" 
                        />
                        </div>
                        <span className="p-6">Berlin</span>
                        <br />
                        <span className="p-6">12-07-2021</span>
                    </div>
                    {/* CARD */}
                    <div className="bg-blue-600 h-60 font-bold rounded-xl">
                        <div className="flex justify-center p-6">
                        <img 
                        className="w-20 h-20 object-cover"
                        src="./images/berlim.png" 
                        alt="img-city" 
                        />
                        </div>
                        <span className="p-6">Berlin</span>
                        <br />
                        <span className="p-6">12-07-2021</span>
                    </div>
                    {/* CARD */}
                    <div className="bg-blue-600 h-60 font-bold rounded-xl">
                        <div className="flex justify-center p-6">
                        <img 
                        className="w-20 h-20 object-cover"
                        src="./images/berlim.png" 
                        alt="img-city" 
                        />
                        </div>
                        <span className="p-6">Berlin</span>
                        <br />
                        <span className="p-6">12-07-2021</span>
                    </div>
                </div>
            </div>
        </section>
      </main>
    );
  }
  
  export default Card;