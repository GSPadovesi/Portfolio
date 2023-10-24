import { useState } from 'react';
import { Hamburger } from './Hamburger/Hamburger';
import { NavbarProps } from './Navbar.types';
import sun from '../../assets/sol.png';
import moon from '../../assets/lua.png';
import * as S from './Navbar.styles';

export const Navbar = ({ isOpen, setIsOpen, isChecked, setIsChecked }: NavbarProps) => {

  const [navbar, setNavbar] = useState(false);

  const scrollToSection = (e: any) => {
    const target = e.target.dataset.target;
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  const changeTheme = () => {
    setIsChecked(!isChecked);
  }

  console.log(isChecked)

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
      <S.NavbarTitle>Meu <S.NavbarTitleStrong>Portfolio</S.NavbarTitleStrong></S.NavbarTitle>

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
          <S.WrapperSwitchDark isChecked={isChecked === true}>
            <img className='sun' src={sun} alt="Sol" />
            <img className='moon' src={moon} alt="Lua" />
            <S.ButtonSwitch isChecked={isChecked === true} />
          </S.WrapperSwitchDark>
        </S.LabelDark>
      </S.WrapperSwitch>

      <S.HamburgerContainer>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </S.HamburgerContainer>

      <S.Fade isOpen={isOpen} />
    </S.Navbar>
  )
}