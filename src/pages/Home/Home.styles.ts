import styled, { css } from 'styled-components';
import space from '../../assets/space.jpg'

interface HomeProps {
  isOpen: boolean;
}

export const Home = styled.section`
  padding: 32px;
  width: 100%;  
  height: 100vh;
  background-image: url(${space});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 32px;

  @media(min-width: 1024px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const HomeContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeImage = styled.div<HomeProps>`
  ${({ isOpen }) => css`
    z-index: ${isOpen ? '-1' : '0'};
  `}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 32px;
  
  >img{
    width: 100px;
    height: 100px;
    animation: rocket 5s infinite;
  }

  @keyframes rocket {
    50%{
      transform: translateY(-20%);
      /* transform: scale(2); */
    }
  }

  @media(min-width: 768px){
    >img{
      width: 200px;
      height: 200px;
    }
  }

  @media(min-width: 1024px){
    >img{
      width: 300px;
      height: 300px;
    }
  }

  @media(min-width: 1440px){
    >img{
      width: 400px;
      height: 400px;
    }
  }

  @media(min-width: 1920px){
    >img{
      width: 500px;
      height: 500px;
    }
  }
`

export const HomeTitle = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 400;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  /* text-align: center; */
  /* margin-bottom: 16px; */

  @media(min-width: 768px){
    font-size: 5rem;
  }

  @media(min-width: 1024px){
    font-size: 7rem;
  -webkit-text-stroke-width: 2px;

  }

  @media(min-width: 1440px){
    font-size: 9rem;
  }
`

export const HomeTitleStrong = styled.span`
  font-weight: bold;
  color: #18D26F;
  font-size: 4.5rem;
  /* margin-left: px; */

  @media(min-width: 768px){
    font-size: 6rem;
  }

  @media(min-width: 1024px){
    font-size: 8rem;
  }

  @media(min-width: 1440px){
    font-size: 10rem;
  }
`

export const HomeDescription = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;

  @media(min-width: 768px){
    font-size: 2rem;
  }

  @media(min-width: 1024px){
    font-size: 2.5rem;
  }

  @media(min-width: 1440px){
    font-size: 3rem;
  }
`


export const Teste = styled.section`
  width: 100%;
  height: 200vh;
  background-color: grey;
`