import React from 'react'
import aboutImage from "../assets/Imports-clearing-and-Forwarding.webp"

const About = () => {
  return (

        <section id='about' className='mb-30'>
            <div >
        <h1 className='text-5xl font-bold text-red-500 ml-140'>About Us</h1>
        <p className="text-black  font-bold ml-143 flex items-center space-x-2 mb-4">
             <span className=''>Clearing and Forwarding</span>
          </p>
        <div className='flex justify-between'>
                <div>
                    <img src={aboutImage} alt="" className='relative w-full mr-10 ml-20 md:max-w-lg transform hover:scale-105 transition-transform duration-300'/>
                </div>
        <div>
            
          <h4 className="text-2xl md:text-3xl font-bold mb-6 pl-10 pr-12 hover:text-blue-500 cursor-pointer">
            We make imports & exports simple!
          </h4>
          <p className="text-gray-600 leading-relaxed mb-4">
            As the most efficient clearing agent in Nigeria, we act as <br /> your guide
            through the often complicated import and <br />export process. Each step of
            the way we act on your <br />behalf, clearing your goods through Nigeria Customs, <br />
            ensuring compliance, paying duties and tariffs, <br /> and shipping your goods
            to their final destination.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our logistics experts take great pride in helping <br />importers and exporters
            at all levels. From startups <br /> to large industries, we handle each with care.<br />
            We make the customs brokerage process worry-free and simple.
          </p>
        </div>
        </div>
        
       
        
    </div>
        </section> 
    
  )
}

export default About