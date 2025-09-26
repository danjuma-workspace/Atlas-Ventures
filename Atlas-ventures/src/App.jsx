import { useState } from 'react'
// import favicon from '../src/assets/Cargo-Handling.jpg'

import './App.css'
import Navbar from "./Navbar"
import  Footer from "./Pages/Footer"
import Service from "./Pages/Service"
import About  from './Pages/About'
import Home from "./Pages/Home"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Footer/>
    </>
  )
}

export default App
