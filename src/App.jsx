import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import HeroComponent from './components/HeroComponent';
import ServicesComponent from './components/ServicesComponent';
import HostingComponent from './components/HostingComponent';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarComponent />
    <HeroComponent/>
  <ServicesComponent/>
      <HostingComponent />
      <Footer/>
    
  </>
  )
}

export default App
