import { Route, Routes } from 'react-router-dom'
import './App.css'
import PaginaInicial from './Componentes/paginaInicial/PaginaInicial'
import FaseVariavel from './Componentes/FasesVariavel/FaseVariavel'
function App() {

  return (
    <Routes>
      <Route  path="/lazuli/" element={<PaginaInicial></PaginaInicial>}/>
      <Route  path="/lazuli/B" element={<h1>B</h1>}/>
      <Route  path="/lazuli/C" element={<h1>C</h1>}/>
      <Route  path="/lazuli/FaseVariavel" element={<FaseVariavel></FaseVariavel>}/>
  </Routes>
  )
}

export default App
