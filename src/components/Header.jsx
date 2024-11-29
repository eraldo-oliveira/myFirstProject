
function Header() {
    return (
      <>
        <header>
          <nav className="bg-red-200">
            <div className="container mx-auto flex p-6 justify-center md:justify-between items-center">
              <div className="">
                <div className="flex items-center">
                  <span className="text-black">MY EXEMPLE TITLE</span>
                </div>
              </div>
                <ul className="hidden md:flex gap-10">
                  <li className="hover:text-red-500">
                    <a href="/">HOME</a>
                  </li>
                  <li className="hover:text-red-500">
                    <a href="/add-location"><i class="fa-solid fa-plus"></i> LOCATION</a>
                  </li>
                  <li className="hover:text-red-500">
                    <a href="/the-traveler">ABOUT ME</a>
                  </li>
                </ul>
              </div>
          </nav>
        </header>
      </>
    );
  }
  
  export default Header;