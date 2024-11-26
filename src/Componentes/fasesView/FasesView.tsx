import { useNavigate } from 'react-router-dom'
import './FasesView.css'
function FasesView() {
  const nav = useNavigate()
  function goFase(nomeFase: string){
      nav('/lazuli/fases/'+nomeFase)
  }
  return (
    <div className='FasesCtn'>
        <header>
            <button className='Icon'>
                Icon
            </button>
            <h1>
                Lazuli
            </h1>
        </header>
        <main>
            <h1>Selecione uma fase</h1>
            <div className='CarroselCtn' >
              {
                ["Variavel",]
                .map((item, index) => {
                  return (
                    <div className='CarroselItem' key={index}>
                      <div className='Ball'></div>
                      <p>Fase {item}</p>
                      <button onClick={
                          ()=>{
                              goFase(item)
                          } 
                      }>Start</button>
                    </div>
                  )
                })
              }
            </div>
        </main>
    </div>
  
  )
}

export default FasesView
