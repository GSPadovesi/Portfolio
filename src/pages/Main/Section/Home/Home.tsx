import { HomeProps } from './Home.types';
import Typical from 'react-typical'
import rocket from '../../../../assets/rocket.png'
import * as S from './Home.styles';

export const Home = ({ isOpen }: HomeProps) => {
  return (
    <>
      <S.Home id='home'>
        <S.HomeContainer>
          <S.HomeContent>
            <S.HomeTitle>Transformando ideias em experiências </S.HomeTitle>
            <S.HomeTitleStrong>digitais incríveis.</S.HomeTitleStrong>
            <S.HomeDescription><Typical loop={1} steps={['Olá, tudo bem ? 😁', 1000, 'Meu nome é Gabriel', 1000, 'Desenvolvedor front-end', 1000]} wrapper='p' /></S.HomeDescription>
            {/* <S.HomeDescription>Desenvolvedor front-end</S.HomeDescription> */}
          </S.HomeContent>

          <S.HomeImage isOpen={isOpen}>
            <img src={rocket} alt="" />
          </S.HomeImage>
        </S.HomeContainer>
      </S.Home>
    </>
  )
}