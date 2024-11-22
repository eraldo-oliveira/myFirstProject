

function AddLocationPage() {
    return (
      <>
        <main>
          {/* Área do Formulário */}
          <section>
            <div className="container mx-auto p-6">
              <div className="flex justify-center gap-8">
                {/* Formulário */}
                <div className="bg-blue-600 overflow-hidden rounded-xl p-6 w-full max-w-lg">
                  <h2 className="text-white text-2xl text-center mb-6">Adicionar Novo Local</h2>
  
                  {/* Formulário de adição */}
                  <form className="space-y-4">
                    {/* Campo Local */}
                    <div>
                      <label htmlFor="local" className="text-white block text-sm">Local</label>
                      <input
                        type="text"
                        id="local"
                        name="local"
                        className="w-full p-3 mt-1 rounded-lg bg-blue-200"
                        placeholder="Nome do local"
                      />
                    </div>
  
                    {/* Campo Data de Chegada */}
                    <div>
                      <label htmlFor="dataChegada" className="text-white block text-sm">Data de Chegada</label>
                      <input
                        type="date"
                        id="dataChegada"
                        name="dataChegada"
                        className="w-full p-3 mt-1 rounded-lg bg-blue-200"
                      />
                    </div>
  
                    {/* Campo Data de Saída */}
                    <div>
                      <label htmlFor="dataSaida" className="text-white block text-sm">Data de Saída</label>
                      <input
                        type="date"
                        id="dataSaida"
                        name="dataSaida"
                        className="w-full p-3 mt-1 rounded-lg bg-blue-200"
                      />
                    </div>
  
                    {/* Campo Comentário */}
                    <div>
                      <label htmlFor="comentario" className="text-white block text-sm">Comentário</label>
                      <textarea
                        id="comentario"
                        name="comentario"
                        rows="4"
                        className="w-full p-3 mt-1 rounded-lg bg-blue-200"
                        placeholder="Deixe seu comentário"
                      ></textarea>
                    </div>
  
                    {/* Botão Salvar */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-green-600 text-white p-3 rounded-lg w-full mt-4"
                      >
                        Salvar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
  
  export default AddLocationPage;

  