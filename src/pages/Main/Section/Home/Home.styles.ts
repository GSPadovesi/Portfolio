import styled, { css } from 'styled-components';
import space from '../../../../assets/space.jpg'

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

  @media(min-width: 1024px){
    align-items: flex-start;
    text-align: left;
    margin-left: 32px;
  }
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
  margin-top: 82px;
  
  >img{
    width: 200px;
    height: 200px;
    animation: rocket 5s infinite;
  }

  @keyframes rocket {
    50%{
      transform: translateY(-20%);
    }
  }

  @media(min-width: 768px){
    >img{
      width: 350px;
      height: 350px;
    }
  }

  @media(min-width: 1024px){
    >img{
      width: 400px;
      height: 400px;
    }
  }

  @media(min-width: 1440px){
    >img{
      width: 450px;
      height: 450px;
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
  color: #F2F5ED;
  font-size: 32px;
  font-weight: 400;
  font-family: 'Courier New', Courier, monospace;

  @media(min-width: 768px){
    font-size: 42px;
  }

  @media(min-width: 1024px){
    font-size: 52px;
  }

  @media(min-width: 1440px){
    font-size: 62px;
  }
`

export const HomeTitleStrong = styled.span`
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  color: #18D26F;
  font-size: 36px;

 @media(min-width: 768px){
    font-size: 46px;
  }
  @media(min-width: 1024px){
    font-size: 56px;
  }
  
  
  @media(min-width: 1440px){
    font-size: 66px;
  }
`

export const HomeDescription = styled.p`
  color: #F2F5ED;
  font-size: 20px;
  text-align: left;

  @media(min-width: 768px){
    font-size: 30px;
  }

  @media(min-width: 1024px){
    margin-left: 10px;
  }
`