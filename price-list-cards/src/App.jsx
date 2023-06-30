import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/priceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-600'>Hello from Tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
