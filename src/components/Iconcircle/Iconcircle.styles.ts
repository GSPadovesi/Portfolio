import styled, { css } from "styled-components";

export const Iconcircle = styled.div<any>`
  ${({ isChecked }) => css`
    background-color: ${isChecked ? '#24282C' : '#F2F5ED'};
  `}
  
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: -10px 30px;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(315deg, #18D26F, #24282C);
    animation: animar 5s linear infinite;
  }

  &::after{
    content: "";
    position: absolute;
    inset: 6px;
    background-color: #485550;
    border-radius: 50%;
    z-index: 1;
  }

  &:hover{
    &::before {
      inset: -10px 0px;
    }
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

export const WrapperContent = styled.div`
  position: absolute;
  inset: 30px;
  border: 6px solid #485550;
  z-index: 2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  user-select: none;

  >img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
  }

  ${Iconcircle}:hover &{
    >img{
      opacity: 0;
    }
  }
`

export const Title = styled.h2`
  font-size: 0.5em;
  text-align: center;
  color: #F2F5ED;
  font-weight: 600;
  letter-spacing: .05em;
  text-transform: uppercase;
  transition: all 0.5s ease-in-out;
  display: none;

  ${Iconcircle}:hover &{
    display: block;
  }
`

export const Span = styled.span`
  font-weight: 300;
  font-size: .75em;
`