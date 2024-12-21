
function Header() {
    return (
      <>
        <header>
          <nav className="bg-[#028C6A]">
            <div className="container mx-auto flex p-6 justify-center md:justify-between items-center">
              <div className="">
                <div className="flex items-center">
                  <img src="/images/site.png" alt="logo do site" className="size-16 md:ml-12"/>
                </div>
              </div>
                <ul className="hidden md:flex gap-6 text-white">
                  <li className="hover:text-[#D1EDE1]">
                    <a href="/" className="text-lg font-medium">HOME</a>
                  </li>
                  <li className="hover:text-[#D1EDE1]">
                    <a href="/add-location" className="text-lg font-medium"><i class="fa-solid fa-plus"></i> LOCALIZAÇÃO</a>
                  </li>
                  <li className="hover:text-[#D1EDE1]">
                    <a href="/the-traveler" className="text-lg font-medium mr-12">O VIAJANTE</a>
                  </li>
                </ul>
              </div>
          </nav>
        </header>
      </>
    );
  }
  
  export default Header;