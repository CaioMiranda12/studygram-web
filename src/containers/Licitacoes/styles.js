import { Link } from 'react-router-dom'
import styled from 'styled-components'

import DireitoBg from '../../assets/direitoBg.jpg'

export const Container = styled.div``

export const DivStart = styled.div`
  height: 10vh;
  background-image: url(${DireitoBg});
  background-position: center;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #fff;
  font-size: 30px;
`

export const ButtonStart = styled.a`
  font-weight: bold;
  padding: 10px 30px 10px 30px;
  text-decoration: none;
  border: none;
  background-color: #ff8fd9;
  border-radius: 30px;
  font-size: 20px;
  cursor: pointer;
  box-shadow:
    0 8px 16px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const DivBody = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const DivConceito = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    width: 700px;
    margin-bottom: 10px;
  }

  p {
    width: 700px;
  }
`

export const DivPrincipios = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    width: 700px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 20px;
    width: 700px;
  }
`

export const DivTextosPrincipios = styled.div``

export const DivModalidddes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    width: 700px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 20px;
    width: 700px;
  }
`

export const DivProcedimentos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    width: 700px;
    margin-bottom: 10px;
  }

  p {
    margin-top: 20px;
    width: 700px;
  }
`

export const DivQuestoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    width: 700px;
    margin-bottom: 10px;
  }

  details {
    margin-top: 20px;
    width: 700px;

    button {
      display: flex;
      flex-direction: column;
    }
  }
`
export const ButtonAsk = styled.summary`
  background-color: #ffc3d5;
  width: max-content;
  padding: 10px;
  margin-bottom: 10px;
`

export const ButtonResposta = styled.summary`
  background-color: #ff8fd9;
  width: max-content;
  padding: 10px;
  margin-bottom: 10px;
`

export const DivItem = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
