import {  } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Blockchain from './components/Blockchain'
import Cards from './components/Cards'

function App() {

  return (
    <div className='w-full px-0'>
      <Navbar />
      <Hero />
      <Analytics />
      <Blockchain />
      <Cards />
    </div>
  )
}

export default App
