import styled, { css } from 'styled-components';

export const Wrapper = styled.div<any>`
  ${({ isChecked }) => css`
    background-color: ${isChecked ? '#24282C' : '#F2F5ED'};
  `}
  
  position: fixed;
  bottom: -42px;
  right: -58px;
  transform: rotate(-45deg);
  z-index: 1000;
  padding: 4px 48px 48px;
  transition: all .6s ease;
  cursor: pointer;

  >img{
    width: 50px;
    height: 50px;
  }

  &:hover{
    >img{
      animation: rotate 2s infinite;
    }
  }

  @keyframes rotate {
    from{ 
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
`