
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokedexDetail from './components/PokedexDetail'
import ProtectedRoutes from './components/ProtectedRouter'
import { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'


function App() {

  const [night, setNight] =  useState(true)

  const modeNight = () => {
    setNight(!night)
  }

  useEffect(() => {
    document.body.style.transition = 'background-color 0.7s ease'; 
    document.body.style.backgroundColor = night ? 'white': '#2F2F2F' ;
  }, [night]);




  return (
      <HashRouter>

      <div className="containerDark">
        <label className='modeDark' >
          <h3>Mod</h3>
          <span className='iconsMode'> 
            {night? <MdLightMode className='sun'/> : <MdDarkMode className='moon'/>}
          </span>
          <input type="checkbox" id='mode' onClick={modeNight}/>
        </label>
      </div>
        
        <Routes>
          <Route path='/' element={<InputName/>}/>

          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokedex/>}/>
            <Route path='/pokedexdetail/:id' element={<PokedexDetail/>}/>
          </Route>
        </Routes>
      </HashRouter>

  )
}

export default App
