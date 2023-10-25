import { HomeProps } from './Home.types';
import rocket from '../../../../assets/rocket.png'
import * as S from './Home.styles';

export const Home = ({ isOpen }: HomeProps) => {
  return (
    <>
      <S.Home id='home'>
        <S.HomeContainer>
          <S.HomeContent>
            <S.HomeTitle>Transformando ideias em experiências <S.HomeTitleStrong>digitais incríveis.</S.HomeTitleStrong> </S.HomeTitle>
            <S.HomeDescription>Desenvolvedor front-end</S.HomeDescription>
          </S.HomeContent>

          <S.HomeImage isOpen={isOpen}>
            <img src={rocket} alt="" />
          </S.HomeImage>
        </S.HomeContainer>
      </S.Home>
    </>
  )
}