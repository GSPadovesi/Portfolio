import { HomeProps } from './Home.types';
import Typical from 'react-typical'
import rocket from '../../../../assets/rocket.png'
import * as S from './Home.styles';

export const Home = ({ isOpen }: HomeProps) => {

  const steps = [
    'Olá, tudo bem ? 😁', 1000,
    'Meu nome é Gabriel', 1000,
    'Desenvolvedor Web', 1000
  ]

  return (
    <>
      <S.Home id='home'>
        <S.HomeContainer>
          <S.HomeContent>
            <S.HomeTitle>Transformando ideias em experiências </S.HomeTitle>
            <S.HomeTitleStrong>digitais incríveis.</S.HomeTitleStrong>
            {/* <S.HomeDescription><Typical loop={1} steps={steps} wrapper='span' /></S.HomeDescription> */}
            <S.HomeDescription>Desenvolvedor Web</S.HomeDescription>
          </S.HomeContent>
          <S.HomeImage isOpen={isOpen}>
            <img src={rocket} alt="" />
          </S.HomeImage>
        </S.HomeContainer>
      </S.Home>
    </>
  )
}