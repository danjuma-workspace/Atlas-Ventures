import React from 'react'
import homeImage from '../assets/Cargo-Handling.webp'

const Home = () => {
  return (
   <section id='home' >
     <div className='flex justify-between mt-40 mb-30 '>
        <div className='ml-15  mt-20'>
            <h4 className='text-black text-3xl'>We make imports & exports simple!</h4>
        <h2 className='font-bold text-5xl'>The only <span className='text-blue-600 text-5xl font-bold'>Clearing Agent</span><br />
             <span className='text-blue-600 text-5xl font-bold'>in Nigeria </span>you'll need.</h2>
        </div>
        
            <div>
                <img src={homeImage} alt="" className='relative w-full mr-10 md:max-w-lg transform hover:scale-105 transition-transform duration-300' />
            </div>
            
    </div>
  

   </section>
  )
}

export default Home;