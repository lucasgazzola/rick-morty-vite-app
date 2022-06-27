import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Characters from './pages/Characters'
import Locations from './pages/Locations'
import Episodes from './pages/Episodes'
import Home from './pages/Home'

// import Character from './interfaces/character'
// import Location from './interfaces/location'
// import Episode from './interfaces/episode'


export default function App(): JSX.Element {

  return (
    <div className="App">
      <header>
        <h1 className='text-3xl text-slate-900 font-semibold'>Rick and Morty App</h1>
        <nav>
          <ul className='flex justify-center items-center gap-3'>
            <li>
              <Link to='/characters'>Characters</Link>
            </li>
            <li>
              <Link to='/locations'>Locations</Link>
            </li>
            <li>
              <Link to='/episodes'>Epidsodes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </div>
  )
}
