import styled from "styled-components";

export const Skills = styled.section`
  padding: 0px 32px;
  width: 100%;
  height: 80vh;
  background-color: #000;
`

export const SkillsTitle = styled.h1`
  color: #F2F5ED;
  font-size: 25px;
  font-weight: 400;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;

  @media(min-width: 768px){
    font-size: 32px;
  }

  @media(min-width: 1024px){
    font-size: 35px;
  }

  @media(min-width: 1440px){
    font-size: 45px;
  }
`

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media screen {
    @media(min-width: 1024px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export const SkillsItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
  width: 100%;
  height: auto;

  @media screen {
    @media(min-width: 1024px){
      margin: 0;
    }
  }
`

export const SkillsCanva = styled.div`
  width: 100%;
  height: 100%;
`

