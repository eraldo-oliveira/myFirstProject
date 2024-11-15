
function Header() {
    return (
      <>
        <nav className="flex p-6 bg-yellow-300 justify-between">
            <div className="flex gap-5">
                <img className="" src="" alt="imagem" />
                <span className="text-red-200">Title</span>
            </div>

            <ul className="flex gap-10">
                <li className="">Home</li>
                <li className="">Add Location</li>
                <li className="">The Traveler</li>
            </ul>
        </nav>
      </>
    );
  }
  
  export default Header;