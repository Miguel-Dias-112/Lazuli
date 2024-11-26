import { useNavigate } from 'react-router-dom'
import './PaginaInicial.css'

function PaginaInicial() {
    const nav = useNavigate()
    function Start(){
        nav('/lazuli/fases')
    }
    return (
        <div className='PagInicialCtn'>
            <header>
                <button className='Icon'>
                    Icon
                </button>
                <h1>
                    Lazuli
                </h1>
            </header>
            <aside>y</aside>
            <main>
                <div className='TextoCtn'>
                    <h2>Olá, seja bem-vindo!</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda iste expedita aut quo, vel, dolores nemo, illum molestias excepturi labore tenetur doloremque. Quia in similique aliquam dolores nobis! Repellat, itaque!</p>
                </div>
                <div className='StartCtn'>
                    <img >
                    </img>
                    <button onClick={Start}>Start</button>
                </div>
            </main>
        </div>
    
  )
}

export default PaginaInicial
