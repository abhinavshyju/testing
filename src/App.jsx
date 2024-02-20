import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScreen from './Pages/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SportsResult from './Pages/SportsResult'
import Layout from './Pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} > 
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/sports' element={<SportsResult/>}/>
      </Route>
    </Routes>
       {/* <HomeScreen/> */}
    </BrowserRouter>
  
 
  )
}

export default App
