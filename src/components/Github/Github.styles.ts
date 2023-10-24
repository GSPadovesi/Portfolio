import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: -42px;
  right: -58px;
  transform: rotate(-45deg);
  background-color: #24282C;
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