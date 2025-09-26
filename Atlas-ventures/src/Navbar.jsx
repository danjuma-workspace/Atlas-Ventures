import React from "react";


//     const navItems = [
//     { id: "home", label: "Home" },
//     { id: "service", label: "Service" },
//     { id: "about", label: "About" },
//     { id: "contact", label: "Contact" },
    
//   ];
function Navbar(){
  return (
    <nav className='max-w-10xl mx-auto fixed w-full top-0 left-0 z-50 bg-red-500 transition-all duration-300'>
        
        <div className='max-w-6xl mx-auto flex justify-between items-center p-4'>
              
              {/* Logo  */}
        
        <a
          href="/"
          className="text-xl ml-5 text-white font-bold satisfy-regular hover:scale-105 transition-transform duration-300"
        >
          Atlas Ventures
        </a>
           <div className='hidden md:flex space-x-6 ml-50 flex items-end gap-20 font-monteserrat'>
            <a href="#home" className=" font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-black ">Home</a>
            <a href="#about" className="font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-black ">About Us</a>
            <a href="#services" className="font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-black ">Services</a>
            <a href="#contact" className="font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-black ">Contact</a>
            </div> 
            {/* Mobile menu button */}
          <button className="md:hidden bg-white text-blue-600 px-2 py-1 rounded" 
          
          >
            ☰
          </button>
  
        </div>
         
        
    </nav>
    
  );
}

export default Navbar;