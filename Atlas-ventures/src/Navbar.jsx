import React from "react";


//     const navItems = [
//     { id: "home", label: "Home" },
//     { id: "service", label: "Service" },
//     { id: "about", label: "About" },
//     { id: "contact", label: "Contact" },
    
//   ];
function Navbar(){
  return (
    <nav className='fixed w-full top-0 left-0 z-50 bg-[#0089F7] transition-all duration-300'>
        
        <div className='flex gap-20 lg:max-w-6xl max-md:px-6 lg:px-6 max-lg:max-w-2xl mx-auto py-5 items-center'>
              
              {/* Logo  */}
        
        <a
          href="/"
          className="text-3xl ml-5 text-white font-bold satisfy-regular hover:scale-105 transition-transform duration-300"
        >
          Atlas Ventures
        </a>
           <div className='ml-50 flex items-end gap-20 '>
            <a href="#home" className=" font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-blue-200 ">Home</a>
            <a href="#about" className="font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-blue-200 ">About Us</a>
            <a href="#services" className="font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-blue-200 ">Services</a>
            <a href="#contact" className="font-bold text-2xl text-white hover:scale-105 transition-transform duration-300 hover:text-blue-200 ">Contact</a>
            </div> 
            
        </div>
         
        
    </nav>
    
  );
}

export default Navbar;