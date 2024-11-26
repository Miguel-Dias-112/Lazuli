import './FaseVariavel.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
function FaseVariavel() {

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
        <aside>y</aside>
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
                    <p>Notas do grande mago</p>
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
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
            </Swiper>
        </main>
    </div>
  
  )
}

export default FaseVariavel
