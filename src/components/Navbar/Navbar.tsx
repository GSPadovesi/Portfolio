import { Hamburger } from './Hamburger/Hamburger';
import * as S from './Navbar.styles';

export const Navbar = ({ isOpen, setIsOpen }: any) => {

  const scrollToSection = (e: any) => {
    const target = e.target.dataset.target;
    const element = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  console.log(isOpen, setIsOpen)

  return (
    <S.Navbar>
      <S.NavbarTitle>Estou <S.NavbarTitleStrong>Pensando</S.NavbarTitleStrong></S.NavbarTitle>
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
    </S.Navbar>
  )
}