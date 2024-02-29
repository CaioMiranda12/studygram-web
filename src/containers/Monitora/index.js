import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import MonitoraImg from '../../assets/marina.jfif'
import {
  Container,
  DivStart,
  DivMain,
  DivCarrousel,
  ItemCarrousel
} from './styles'

function Monitora() {
  const navigate = useNavigate()

  return (
    <Container>
      <DivStart>
        <div></div>
        <h1>Monitora da Disciplina</h1>
        <div>
          <button onClick={() => navigate('/')}>Inicio</button>
        </div>
      </DivStart>

      <DivMain>
        <img src={MonitoraImg} />
        <div>
          <h1>Marina Lima</h1>
          <p>
            Olá! Me chamo Marina e estou atualmente no 7° semestre do curso de
            Direito do Centro Universitário Farias Brito (FbUni), como Bolsista
            Integral (100%). Em 2023, fui estagiária do Ministério Público do
            Estado do Ceará (MPCE) e, neste momento, atuo como estagiária na
            Defensoria Pública da União (DPU). Também sou Mestre Nacional de
            Xadrez e Membro da Sociedade de Debates da Unifor.
          </p>

          <button>Tirar Dúvidas</button>
        </div>
      </DivMain>
    </Container>
  )
}

export default Monitora
