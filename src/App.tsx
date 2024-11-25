import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route  path="/lazuli/" element={<h1>A</h1>}/>
      <Route  path="/lazuli/B" element={<h1>B</h1>}/>
      <Route  path="/lazuli/C" element={<h1>C</h1>}/>
  </Routes>
  )
}

export default App
