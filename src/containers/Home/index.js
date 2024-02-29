import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import ImgCarrousel from '../../assets/img-direito-vertical.avif'
import {
  Container,
  DivStart,
  DivButtons,
  DivCarrousel,
  ItemCarrousel
} from './styles'

function Home() {
  const navigate = useNavigate()

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <DivStart>
        <h1>Direito</h1>
        <h1>Administrativo II</h1>
        <DivButtons>
          <button onClick={() => navigate('/professora')}>Professora</button>
          <button onClick={() => navigate('/monitora')}>Monitora</button>
        </DivButtons>
      </DivStart>

      <DivCarrousel>
        <Carousel itemsToShow={3} breakPoints={breakPoints}>
          <ItemCarrousel>
            <div>
              <h2>CAP. 1</h2>
              <img src={ImgCarrousel} />
            </div>
            <button onClick={() => navigate('/1')}>Licitações</button>
          </ItemCarrousel>

          <ItemCarrousel>
            <div>
              <h2>CAP. 2</h2>
              <img src={ImgCarrousel} />
            </div>
            <button>Contratos</button>
          </ItemCarrousel>

          <ItemCarrousel>
            <div>
              <h2>CAP. 3</h2>
              <img src={ImgCarrousel} />
            </div>
            <button>Sanções</button>
          </ItemCarrousel>

          <ItemCarrousel>
            <div>
              <h2>CAP. 4</h2>
              <img src={ImgCarrousel} />
            </div>
            <button>Servidor Público</button>
          </ItemCarrousel>

          <ItemCarrousel>
            <div>
              <h2>CAP. 5</h2>
              <img src={ImgCarrousel} />
            </div>
            <button>Agentes Públicos</button>
          </ItemCarrousel>

          <ItemCarrousel>
            <div>
              <h2>CAP. 6</h2>
              <img src={ImgCarrousel} />
            </div>
            <button>Bens Públicos</button>
          </ItemCarrousel>
        </Carousel>
      </DivCarrousel>
    </Container>
  )
}

export default Home
