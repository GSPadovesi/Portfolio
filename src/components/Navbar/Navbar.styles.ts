import styled, { css } from "styled-components";

interface NavItemsProps {
  isOpen?: boolean;
  isNavbar?: boolean;
  isChecked?: boolean;
}

export const Navbar = styled.nav<NavItemsProps>`
  ${({ isNavbar, isChecked }) => css`
    background-color: ${isNavbar && isChecked ? '#24282C' : isNavbar && !isChecked ? '#F2F5ED' : 'transparent'};
    box-shadow: ${isNavbar ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none'};
  `}
  position: fixed;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.6s ease;
  z-index: 30;

  @media(min-width: 1024px){
    padding: 2.4rem;
  }
`;

export const NavbarTitle = styled.h1<NavItemsProps>`
  ${({ isChecked, isNavbar }) => css`
    color: ${isNavbar === false ? '#F2F5ED' : !!isNavbar && !!isChecked ? '#F2F5ED' : '#24282C'};
  `}

  font-size: 22px;
  font-weight: 400;
`

export const NavbarTitleStrong = styled.span`
  font-weight: bold;
  font-size: 28px;
  color: #18D26F;
`

export const NavbarList = styled.ul<NavItemsProps>`
  ${({ isOpen }) => css`
    position: absolute;
    top: ${isOpen ? '300px' : '-700px'};
    right: ${isOpen ? '0' : '-100%'};
    width: ${isOpen ? '100%' : '0'};
  `}

  margin-right: auto;
  text-align: center;
  margin-left: auto;
  transition: all .6s ease;
  z-index: 20;
  cursor: pointer;

  @media(min-width: 768px) {
    position: initial;
    margin: 0;
    width: auto;
  }
`;

export const NavbarListItem = styled.li<NavItemsProps>`
  ${({ isChecked, isNavbar }) => css`
    color: ${isChecked ? '#F2F5ED' : '#24282C'};

    @media(min-width: 768px) {
      color: ${isNavbar === false ? '#F2F5ED' : !!isNavbar && !!isChecked ? '#F2F5ED' : '#24282C'};
    }
  `}

  display: block;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.5rem;
  margin-top: 16px;
  margin-right: 32px;

  @media(min-width: 768px) {
    display: inline-block;
    font-size: 1rem;
  }

  &:hover{
    color: #18D26F;
  }
`;

export const HamburgerContainer = styled.div`
  padding: 16px;

  @media(min-width: 768px) {
    display: none;
  }
`;

export const Fade = styled.div<NavItemsProps>`
  ${({ isOpen, isChecked }) => css`
    width: ${isOpen ? '100%' : '0'};
    height: ${isOpen ? '100vh' : '0'};
    top: ${isOpen ? '6rem' : '-700px'};
    right: ${isOpen ? '0' : '-1000px'};
    background-color: ${isChecked ? '#24282C' : '#F2F5ED'};
  `}

  position: absolute;
  /* background-color: #24282C; */
  transition: all 0.5s ease;
  border-radius: 0 0 0 50%;
  z-index: 10;
`

export const WrapperSwitch = styled.div`
  width: auto;
  gap: 20px;
  align-self: center;
  justify-self: center;

  &:first-child{
    margin-top: 20px;
  }

  @media(min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export const LabelDark = styled.label<any>`
`

export const InputDark = styled.input<any>`
  display: none;
`

export const WrapperSwitchDark = styled.div<NavItemsProps>`
  ${({ isChecked }) => css`
    background-color: ${isChecked ? '#18D26F' : '#485550'};
    border: ${isChecked ? '1px solid #F2F5ED' : '1px solid #000'};
      
    .moon{
      opacity: ${isChecked ? 0 : 1};
    }

    .sun{
      opacity: ${!!isChecked ? 1 : 0};
    }
  `}
  position: relative;
  width: 50px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid #000000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  >img{
    width: 15px;
    height: 15px;
  }

  .sun{
    position: absolute;
    top: 1px;
    left: 5px;
    transition: all 0.3s ease-in-out;
  }

  .moon{
    position: absolute;
    top: 1px;
    right: 5px;
    transition: all 0.3s ease-in-out;
  }
`

export const ButtonSwitch = styled.button<NavItemsProps>`
  ${({ isChecked }) => css`
    left: ${isChecked ? '30px' : '2px'};
    background-color: ${isChecked ? '#F2F5ED' : '#18D26F'};
  `}
  
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 1px;
  transition: all 0.3s ease-in-out;
  pointer-events: none;
`