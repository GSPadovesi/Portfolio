import { useState } from 'react';
import { Hamburger } from './Hamburger/Hamburger';
import sol from '../../assets/sol.png';
import lua from '../../assets/lua.png';
import * as S from './Navbar.styles';

export const Navbar = ({ isOpen, setIsOpen }: any) => {

  const [navbar, setNavbar] = useState(false);
  const [checked, setChecked] = useState(true);

  const scrollToSection = (e: any) => {
    const target = e.target.dataset.target;
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  const changeTheme = () => {
    setChecked(!checked);
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
        <S.LabelDark for='change-theme' >
          <S.InputDark type='checkbox' name='change-theme' id='change-theme' onClick={changeTheme} />
          <S.WrapperSwitchDark isChecked={checked === true}>
            <img className='sun' src={sol} alt="Sol" />
            <img className='moon' src={lua} alt="Lua" />
            <S.ButtonSwitch isChecked={checked === true} />
          </S.WrapperSwitchDark>
        </S.LabelDark>
      </S.WrapperSwitch>
    </S.Navbar>
  )
}