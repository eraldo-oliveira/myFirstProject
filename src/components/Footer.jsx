
function Footer() {
    return (
      <footer className="bg-red-200 p-6 mt-auto">
        <div className="container mx-auto px-5">
          <ul className="flex flex-col items-center justify-center gap-4 md:hidden">
            <li className="hover:text-red-500"><a href="/">Home</a></li>
            <li className="hover:text-red-500"><a href="/add-location">Add Location</a></li>
            <li className="hover:text-red-500"><a href="/the-traveler">The Traveler</a></li>
          </ul>
  
          <div className="text-black justify-items-center">
            <p className="hidden md:block">&copy; 2024 Website. All Rights Reserved.</p>
            <p className="hidden md:block">Contacts</p>
            <p className="hidden md:block">Social Media</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
  