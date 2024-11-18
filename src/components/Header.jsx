
function Header() {
    return (
      <>
        <nav className="flex p-6 bg-yellow-300 justify-center md:justify-between items-center">
          <div className="flex gap-5 items-center">
            <img className="w-10 h-10" src="" alt="Logo do blog" />
            <span className="text-red-800">Title</span>
          </div>

          <ul className="hidden md:flex gap-10">
              <li className="hover:text-red-500"><a href="/">Home</a></li>
              <li className="hover:text-red-500"><a href="/add-location">Add Location</a></li>
              <li className="hover:text-red-500"><a href="/the-traveler">The Traveler</a></li>
          </ul>
        </nav>

        
      </>
    );
  }
  
  export default Header;