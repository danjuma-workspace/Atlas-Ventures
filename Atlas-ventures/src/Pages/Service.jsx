import React from 'react'
import serviceImage from '../assets/Freight-Forwarding.jpg'

const Service = () => {
  return (
    <section id='services' className='mb-30'>
        <div>
            <h4 className='text-blue-500 font-bold text-5xl ml-150 mb-15 cursor-pointer hover:text-blue-400'>Services</h4>
    
         <div className='flex justify-between'>
         
        
         <div className='ml-15 mb-10'>
                <h4 className='text-2xl cursor-pointer text-blue-400 hover:text-blue-500'> -<ion-icon name="checkmark-circle-outline"></ion-icon>Import and Export Customs Clearance</h4>
                <h4 className='text-2xl cursor-pointer  text-blue-400 hover:text-blue-500'> -<ion-icon name="play-forward"></ion-icon>Frieght Forwarding</h4>
                <h4 className='text-2xl cursor-pointer  text-blue-400 hover:text-blue-500'>-Ocean Frieght</h4>
                <h4 className='text-2xl cursor-pointer  text-blue-400 hover:text-blue-500'>-<ion-icon name="cart"></ion-icon>Cargo Handling</h4>
                <h4 className='text-2xl cursor-pointer  text-blue-400 hover:text-blue-500' >-Warehousing and Export Packing</h4>
                <h4 className='text-2xl cursor-pointer  text-blue-400 hover:text-blue-500'>-<ion-icon name="car"></ion-icon>Logistics</h4>
            </div>

            <div>
           <img src={serviceImage} alt="" className='relative w-full mr-10 md:max-w-lg transform hover:scale-105 transition-transform duration-300' />
            
            
        </div>
            
    </div>
    </div>
    </section>
    
  )
}

export default Service