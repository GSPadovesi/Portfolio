import { useState } from 'react';
import { Hamburger } from './Hamburger/Hamburger';
import * as S from './Navbar.styles';

export const Navbar = ({ isOpen, setIsOpen }: any) => {

  const [navbar, setNavbar] = useState(false);

  const scrollToSection = (e: any) => {
    const target = e.target.dataset.target;
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <S.Navbar isNavbar={navbar}>
      <S.NavbarTitle>Gabriel <S.NavbarTitleStrong>Santana</S.NavbarTitleStrong></S.NavbarTitle>
      <S.HamburgerContainer>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </S.HamburgerContainer>
      <S.Fade isOpen={isOpen} />
      <S.NavbarList isOpen={isOpen}>
        <S.NavbarListItem onClick={scrollToSection} data-target="home">Home</S.NavbarListItem>
        <S.NavbarListItem onClick={scrollToSection} data-target="home">Projects</S.NavbarListItem>
        <S.NavbarListItem onClick={scrollToSection} data-target="home">Skills</S.NavbarListItem>
        <S.NavbarListItem onClick={scrollToSection} data-target="home">About</S.NavbarListItem>
        <S.NavbarListItem onClick={scrollToSection} data-target="home">Contact</S.NavbarListItem>
      </S.NavbarList>
      <S.WrapperSwitch>
        <S.LabelDark for='change-theme'>
          <S.InputDark type='checkbox' name='change-theme' id='change-theme' />
          <S.WrapperSwitchDark>
            <img src="" alt="" />
            <img src="" alt="" />
            <button></button>
          </S.WrapperSwitchDark>
        </S.LabelDark>
      </S.WrapperSwitch>
    </S.Navbar>
  )
}