import styled from 'styled-components'

import DireitoBg from '../../assets/direitoBg.jpg'

export const Container = styled.div``

export const DivStart = styled.div`
  height: 10vh;
  background-image: linear-gradient(
    180deg,
    #71454a 0,
    #6e3e48 10%,
    #6a3747 20%,
    #662f46 30%,
    #602745 40%,
    #591f44 50%,
    #511744 60%,
    #481045 70%,
    #3e0b46 80%,
    #330948 90%,
    #25094a 100%
  );
  background-position: center;

  display: flex;
  justify-content: space-around;
  align-items: center;

  color: #fff;
  font-size: 30px;

  button {
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
  }
`

export const DivMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 90vh;
  background-image: linear-gradient(
    180deg,
    #ffc0a9 0,
    #ffb5a6 16.67%,
    #ffa9a2 33.33%,
    #f29d9d 50%,
    #de9297 66.67%,
    #cc8891 83.33%,
    #bb7f8b 100%
  );

  h1 {
    font-size: 50px;
  }

  img {
    width: 400px;
    border-radius: 50px;
  }

  p {
    width: 700px;
    font-style: italic;
  }

  button {
    margin-top: 20px;
    font-size: 30px;
    background-image: linear-gradient(
      180deg,
      #fffc9d 0,
      #f1eb85 25%,
      #d8d86c 50%,
      #bec653 75%,
      #a6b53c 100%
    );
    border: none;
    border-radius: 21px;
    padding: 10px;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.8;
  }

  button:active {
    opacity: 0.6;
  }
`
