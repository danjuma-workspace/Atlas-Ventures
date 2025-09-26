import React from 'react'
import serviceImage from '../assets/Freight-Forwarding.jpg'

const Service = () => {
  return (
    <section id='services' className='mb-30'>
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 ml-6 items-center">
          <div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Services</h3>
            <ul className="space-y-2 text-lg ">
              <li>✔ Import and Export Customs Clearance</li>
              <li>✔ Freight Forwarding</li>
              <li>✔ Ocean Freight</li>
              <li>✔ Cargo Handling</li>
              <li>✔ Warehousing and Export Packing</li>
              <li>✔ Logistics</li>
            </ul>
          </div>
         
            <div>
           <img src={serviceImage} alt="" className='relative w-full  md:max-w-lg rounded-lg shadow-md w-full transform hover:scale-100 transition-transform duration-300' />
            
            
        </div>
            
    </div>
    
  </section>
    
  )
}

export default Service