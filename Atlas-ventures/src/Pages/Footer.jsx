import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-[#0089F7] text-center pt-10 h-50'>
        <div className='flex gap-10 ml-130  mb-10'>
                                         <a href="#contact" className="w-10 h-10 bg-white   rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-facebook" className="text-lg"></ion-icon>
                                        </a>
                                        <a href="#contact" className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-instagram" className="text-lg"></ion-icon>
                                        </a>
                                        <a href="#contact" className="w-10 h-10 bg-white   rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-twitter" className="text-lg"></ion-icon>
                                        </a>
                                        <a href="#contact" className="w-10 h-10 bg-white  rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                                            <ion-icon name="logo-linkedin" className="text-lg"></ion-icon>
                                        </a>
        </div>
                                       
        <p className=' text-white '>© 2025 Atlas Ventures Limited - | All Rights Reserved.</p>
        <h5 className=' text-white'>Design by SummyTech</h5>
    </div>
  )
}

export default Footer