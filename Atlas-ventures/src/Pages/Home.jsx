import React from 'react'
import homeImage from '../assets/Cargo-Handling.webp'

const Home = () => {
  return (
   <section id='home' >
     <div className='flex justify-between mt-10 mb-30 flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-12'>
        <div className='ml-15  mt-20 flex-1 text-center md:text-left'>
            <h4 className='text-black text-3xl'>We make imports & exports simple!</h4>
        <h2 className='font-bold text-5xl text-3xl md:text-4xl font-bold'>The only <span className='text-red-500 text-4xl font-bold'>Clearing Agent</span><br />
             <span className='text-red-500 text-4xl font-bold mb-10'>in Nigeria </span>you'll need.</h2>
        </div>
        
            <div className='flex-1 mt-6 md:mt-0'>
                <img src={homeImage} alt="" className='relative w-full mr-10 md:max-w-lg rounded-lg shadow-lg w-full transform hover:scale-105 transition-transform duration-300' />
            </div>
            
    </div>
  

   </section>
  )
}

export default Home;