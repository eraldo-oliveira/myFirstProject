
function Footer() {
    return (
      <footer className="bg-yellow-300 p-6 mt-auto">
        <div className="flex justify-center">
          <ul className="flex flex-col items-center gap-4 md:hidden">
            <li className="hover:text-red-500"><a href="/">Home</a></li>
            <li className="hover:text-red-500"><a href="/about">Add Location</a></li>
            <li className="hover:text-red-500"><a href="/contact">The Traveler</a></li>
          </ul>
  
          <div className="text-red-800">
            <p className="hidden md:block">&copy; 2024 Website. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
  