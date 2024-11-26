import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Card } from './components/Card'
import Fetch from './components/fetch'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Navbar/>
     <Hero/>
     <Fetch/>
     <Card/>
     <Footer/>
     
    </div>
  )
}
export default App
