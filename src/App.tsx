import { Route, Routes } from 'react-router-dom'
import './App.css'
import FasesView from './Componentes/fasesView/FasesView'
import PaginaInicial from './Componentes/paginaInicial/PaginaInicial'
import FaseVariavel from './Componentes/FasesVariavel/FaseVariavel'
function App() {

  return (
        
      <Routes>
          <Route  path="/lazuli/" element={<PaginaInicial></PaginaInicial>}/>
          <Route  path="/lazuli/fases" element={<FasesView></FasesView>}/>
          <Route  path="/lazuli/C" element={<h1>C</h1>}/>
      </Routes>
    
  )
}

export default App
