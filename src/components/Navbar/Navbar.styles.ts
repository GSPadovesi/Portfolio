import styled, { css } from "styled-components";

interface NavItemsProps {
  isOpen: boolean;
}

export const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  padding: 2.4rem;
  background-color: #24282C;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarTitle = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
`

export const NavbarTitleStrong = styled.span`
  font-weight: bold;
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
    /* background-color: #24282C; */
    transition: all .6s ease;
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
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1.5rem;
  margin-top: 16px;

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
    position: absolute;
    background-color: #485550;
    width: ${isOpen ? '100%' : '0'};
    height: ${isOpen ? '100vh' : '0'};
    transition: all 0.5s ease;
    top: ${isOpen ? '8rem' : '-700px'};
    right: ${isOpen ? '0' : '-1000px'};
    border-radius: 0 0 0 50%;
    z-index: -1;
  `}
`