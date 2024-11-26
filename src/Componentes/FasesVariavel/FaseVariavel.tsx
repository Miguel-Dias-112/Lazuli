import './FaseVariavel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useState } from 'react';
type feitiço={
    nome:string
    dano:number
    custo:number
}
const feiticos:feitiço[]=[
    {
        nome:'Bola de Fogo',
        dano:30,
        custo:25
    },
    {
        nome:'Raio de Gelo',
        dano:20,
        custo:30
    },
    
    {
        nome:'Explosão Arcana',
        dano:10,
        custo:10
    }
]
function FaseVariavel() {
 
    const [Vida, setVida] = useState(100)
    const [Energia, setEnergia] = useState(100)
    
    function Atacar(dano:number, custo:number){
        if (Vida-dano<=0){
            alert('Você venceu')
            return
        }
        if (Energia<0){
            return
        }
        setVida(Vida-dano)
        setEnergia(Energia-custo)
    }
    return (
        <div className='FaseVariavelCtn'>
            <header>
                <button className='Icon'>
                    Icon
                </button>
                <h1>
                    Lazuli
                </h1>
            </header>
            <main>
            <Swiper
                className='SwiperCtn'
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <div className='LoreCtn'>
                        <p>"Uma variável é como um recipiente mágico capaz de armazenar informações. Ela pode guardar números, palavras, ou até feitços, dependendo do tipo de dado escolhido. Para conjurar uma variável, basta nomeá-la e definir o que ela conterá. É importante dar nomes claros para que o feitiço seja legível e reutilizável no futuro."</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='LoreCtn'>
                        <p>
                            Você é um aprendiz de mago e precisa disparar fetiços de variavel. Cada feitiço tem outras variaveis: nome, dano e custo de energia.
                            Para matar o dragão, você precisa de um feitiço que cause 100 de dano, porém sua energia é limitada, escolha com cuidado.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='GameplayCtn'>
                        <div className='energyBAR'>
                            <p>Energia {Energia}</p>
                            <p>Vida {Vida}</p>
                        </div>
                        <div className='Inimigo'>
                            <img></img>
                        </div>
                        <div className='magicBAR'>
                            {
                                feiticos.map((item, index) => {
                                    return (
                                        <div className='magick' onClick={()=>{
                                            Atacar(item.dano, item.custo)
                                        }} key={index}>
                                            <img></img>
                                            <p>Nome: {item.nome}</p>
                                            <p>Dano: {item.dano}</p>
                                            <p>Custo: {item.custo}</p>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </main>
        </div>
    )
}

export default FaseVariavel
