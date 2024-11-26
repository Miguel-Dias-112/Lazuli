import './FasesView.css'
function FasesView() {
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
                [1,2,3,4,5,6].map((item, index) => {
                  return (
                    <div className='CarroselItem' key={index}>
                      <div className='Ball'></div>
                      <p>Fase {item}</p>
                      <button>Start</button>
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
