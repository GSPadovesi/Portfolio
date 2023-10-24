import styled, { css } from "styled-components";

interface NavItemsProps {
  isOpen?: boolean;
  isNavbar?: boolean;
  isChecked?: boolean;
}

export const Navbar = styled.nav<NavItemsProps>`
  ${({ isNavbar }) => css`
    background-color: ${isNavbar ? '#24282C' : 'transparent'};
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

export const NavbarTitle = styled.h1`
  color: #F2F5ED;
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
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: ${isOpen ? '100%' : '0'};
    transition: all .6s ease;
    z-index: 20;
    cursor: pointer;
  `}

  @media(min-width: 768px) {
    position: initial;
    margin: 0;
    width: auto;
  }
`;

export const NavbarListItem = styled.li`
  display: block;
  color: #F2F5ED;
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
  ${({ isOpen }) => css`
    width: ${isOpen ? '100%' : '0'};
    height: ${isOpen ? '100vh' : '0'};
    top: ${isOpen ? '6rem' : '-700px'};
    right: ${isOpen ? '0' : '-1000px'};
  `}
  position: absolute;
  background-color: #24282C;
  transition: all 0.5s ease;
  border-radius: 0 0 0 50%;
  z-index: 10;
`

export const WrapperSwitch = styled.div`
  width: auto;
  /* position: absolute; */
  /* right: px; */
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
  position: relative;
  /* padding: 6px; */
  background-color: #485550;
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
    opacity: 0;
  }

  .moon{
    position: absolute;
    top: 1px;
    right: 5px;
    transition: all 0.3s ease-in-out;
  }

  ${({ isChecked }) => isChecked && css`
    background-color: #18D26F;

    .moon{
      opacity: 0;
    }

    .sun{
      opacity: 1;
    }
  `}
`

export const ButtonSwitch = styled.button<any>`
  position: absolute;
  background-color: #F2F5ED;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 1px;
  left: 2px;
  transition: all 0.3s ease-in-out;
  pointer-events: none;

  ${({ isChecked }) => isChecked && css`
    left: 30px;
    background-color: #F2F5ED;
  `}
`