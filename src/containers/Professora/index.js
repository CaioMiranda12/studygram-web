import React from 'react'
import Carousel from 'react-elastic-carousel'
import { useNavigate } from 'react-router-dom'

import ProfImg from '../../assets/s200_leanne.holanda_de_paula_pessoa.jpg'
import {
  Container,
  DivStart,
  DivMain,
  DivCarrousel,
  ItemCarrousel
} from './styles'

function Professora() {
  const navigate = useNavigate()

  return (
    <Container>
      <DivStart>
        <div></div>
        <h1>Profesora da Disciplina</h1>
        <div>
          <button onClick={() => navigate('/')}>Inicio</button>
        </div>
      </DivStart>

      <DivMain>
        <img src={ProfImg} />
        <div>
          <h1>Leanne Araujo</h1>
          <p>
            Mestre em Direito Público pelo programa de pós-graduação da
            Universidade Federal do Ceará - UFC (2019).Especialista em Direito e
            Processo do Trabalho pela UniChristus (2017). Graduada em Direito
            pela Universidade de Fortaleza (2009). Advogada empregada pública do
            Banco do Nordeste do Brasil S.A. desde 2010, com atuação na área
            contenciosa e consultiva, com ênfase no Direito Administrativo e
            Direito Civil
          </p>

          <button>Tirar Dúvidas</button>
        </div>
      </DivMain>
    </Container>
  )
}

export default Professora
