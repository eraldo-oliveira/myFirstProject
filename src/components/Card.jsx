
function Card() {
    return (
      <main>
        {/*  Area Cards */}
        <section>
          <div className="container mx-auto flex flex-col mt-10 bg-gray-200 p-6">
                <div className="grid  md:grid-cols-3 gap-8">
                    {/* CARD */}
                    <div className="bg-orange-500  h-40 font-bold">
                        <img src="" alt="img-city" />
                        <span>Berlin</span>
                        <br />
                        <span>12-07-2021</span>
                    </div>
                    {/* CARD */}
                    <div className="bg-orange-500 h-40 font-bold">
                        <img src="" alt="img-city" />
                        <span>Berlin</span>
                        <br />
                        <span>12-07-2021</span>
                    </div>
                    {/* CARD */}
                    <div className="bg-orange-500  h-40 font-bold">
                        <img src="" alt="img-city" />
                        <span>Berlin</span>
                        <br />
                        <span>12-07-2021</span>
                    </div>
                </div>
            </div>
        </section>
      </main>
    );
  }
  
  export default Card;