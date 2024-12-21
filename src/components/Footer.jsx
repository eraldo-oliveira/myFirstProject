
function Footer() {
    return (
      <>
        <footer className="bg-[#028C6A] p-6 mt-auto text-white">
          <div className="container mx-auto">
            <ul className="flex flex-col items-center justify-center gap-4 md:hidden">
              <li className="hover:text-[#D1EDE1] font-bold"><a href="/">HOME</a></li>
              <li className="hover:text-[#D1EDE1] font-bold"><a href="/add-location"><i class="fa-solid fa-plus"></i> LOCALIZAÇÃO</a></li>
              <li className="hover:text-[#D1EDE1] font-bold"><a href="/the-traveler">O VIAJANTE</a></li>
            </ul>
    
            <div className="text-white justify-items-center">
              <p className="hidden md:block text-lg">Desenvolvido por: Eraldo Junior</p>
              <p className="hidden md:block text-lg">&copy; 2024 Todos os direitos reservados.</p>
              <p className="hidden md:block">
                <i class="fa-brands fa-instagram text-lg mr-2"></i>
                <i class="fa-brands fa-x-twitter text-lg mr-2"></i>
                <i class="fa-brands fa-whatsapp text-lg"></i>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  
  