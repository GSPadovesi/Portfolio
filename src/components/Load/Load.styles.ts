import styled from "styled-components";

export const Load = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #485550;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadContent = styled.div`
  position: relative;
  width: 100px;
  background-color: #24282C;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  z-index: 5;
  /* cursor: pointer; */

  &::before {
    content: "";
    position: absolute;
    inset: -10px 0px;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(315deg, #18D26F, #24282C);
    animation: animar 5s linear infinite;
  }

  &::after{
    content: "";
    position: absolute;
    inset: 6px;
    background-color: #485550;
    /* background-color: #24282C; */
    border-radius: 50%;
    z-index: 1;
  }

  >img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    color: #F2F5ED;
    z-index: 10;
  }

  @keyframes animar {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
`

