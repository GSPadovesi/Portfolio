import styled from 'styled-components';

export const Projects = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #485550;
  padding: 32px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  @media(min-width: 1024px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`



export const ProjectsWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  >img{
    display: none;
    
    @media(min-width: 1024px){
      display: block;
      width: 80px;
      height: 80px;
      animation: animate 1s ease-in-out infinite;
      margin-bottom: 32px;
    }
  }

  @keyframes animate {
    50%{
      transform: translateY(-20%);
    }
  }

`

export const ProjectsTitle = styled.h1`
  color: #F2F5ED;
  font-size: 25px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;

  @media(min-width: 768px){
    font-size: 32px;
  }

  @media(min-width: 1024px){
    font-size: 35px;
    text-align: left;
  }

  @media(min-width: 1440px){
    font-size: 45px;
  }
`


export const ProjectsParagraph = styled.p`
  color: #F2F5ED;
  font-size: 20px;
  font-weight: 200;
  text-align: center;
  margin-top: 32px;
  font-family: monospace;

  @media(min-width: 768px){
    font-size: 30px;
  }

  @media(min-width: 1024px){
    margin-left: 10px;
  }
`

export const ProjectsSocial = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;  
  margin-top: 32px;
  gap: 32px;

  >img{
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`

export const ProjectsContentImg = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  >img{
    width: 80px;
    height: 80px;
    margin-top: 32px;
  }
`
