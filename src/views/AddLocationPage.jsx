import React, { useState } from 'react';

function AddLocationPage() {
  // Usando useState para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    local: '',
    dataChegada: '',
    dataSaida: '',
    comentario: ''
  });

  // Função para capturar a mudança de valores nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Exibe os dados preenchidos no console
    console.log('Informações do Local:', formData);

    // Limpa o formulário 
    setFormData({
      local: '',
      dataChegada: '',
      dataSaida: '',
      comentario: ''
    });
  };

  return (
    <>
      <main>
        {/* Área do Formulário */}
        <section className="bg-[#D1EDE1]">
          <div className="container mx-auto p-12 ">
            <div className="flex justify-center gap-8">
              {/* Formulário */}
              <div className="bg-[#003E19] overflow-hidden rounded-xl p-6 w-full max-w-lg">
                <h2 className="text-white text-2xl text-center mb-6">Adicionar Novo Local</h2>

                {/* Formulário de adição */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Campo Local */}
                  <div>
                    <label htmlFor="local" className="text-white block text-sm">Local</label>
                    <input
                      type="text"
                      id="local"
                      name="local"
                      value={formData.local}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 rounded-lg bg-[#D1EDE1]"
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
                      value={formData.dataChegada}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 rounded-lg bg-[#D1EDE1]"
                    />
                  </div>

                  {/* Campo Data de Saída */}
                  <div>
                    <label htmlFor="dataSaida" className="text-white block text-sm">Data de Saída</label>
                    <input
                      type="date"
                      id="dataSaida"
                      name="dataSaida"
                      value={formData.dataSaida}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 rounded-lg bg-[#D1EDE1]"
                    />
                  </div>

                  {/* Campo Comentário */}
                  <div>
                    <label htmlFor="comentario" className="text-white block text-sm">Comentário</label>
                    <textarea
                      id="comentario"
                      name="comentario"
                      value={formData.comentario}
                      onChange={handleChange}
                      rows="4"
                      className="w-full p-3 mt-1 rounded-lg bg-[#D1EDE1]"
                      placeholder="Deixe seu comentário"
                    ></textarea>
                  </div>

                  {/* Botão Salvar */}
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-[#028C6A] text-white p-3 rounded-lg w-full mt-4"
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
