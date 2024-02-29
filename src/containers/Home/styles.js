import styled from 'styled-components'

import DireitoBg from '../../assets/direitoBg.jpg'

export const Container = styled.div``

export const DivStart = styled.div`
  height: 40vh;
  background-image: url(${DireitoBg});
  background-position: center;

  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-size: 45px;
`

export const DivButtons = styled.div`
  display: flex;
  gap: 30px;
  button {
    height: 60px;
    width: 150px;
    border: none;

    border-radius: 30px;
    font-size: 20px;
    cursor: pointer;
    box-shadow:
      0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image: linear-gradient(
      180deg,
      #f693a4 0,
      #e9829a 25%,
      #d86c8f 50%,
      #c65785 75%,
      #b7457e 100%
    );
  }

  button:hover {
    opacity: 0.8;
  }

  button:active {
    opacity: 0.6;
  }
`

export const DivCarrousel = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #ffd679 0,
    #ffc776 12.5%,
    #fbb674 25%,
    #eca371 37.5%,
    #d8906c 50%,
    #c27e67 62.5%,
    #af6f62 75%,
    #9e645e 87.5%,
    #8f5a5a 100%
  );
`

export const ItemCarrousel = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  gap: 5px;

  div {
    h2 {
      text-align: center;
      font-size: 40px;
    }
  }

  img {
    width: 200px;
    border-radius: 20px;
  }

  button {
    background: #ff8fd9;
    height: 40px;
    border: none;
    border-radius: 20px;

    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }

  button:active {
    opacity: 0.6;
  }
`
