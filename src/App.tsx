import './App.css'
import { Route, Routes } from 'react-router-dom'
import Characters from './pages/Characters'
import Locations from './pages/Locations'
import Episodes from './pages/Episodes'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export default function App(): JSX.Element {
  return (
    <div className="App">
      <header>
        <h1 className='text-3xl text-slate-900 font-semibold'>Rick and Morty App</h1>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
