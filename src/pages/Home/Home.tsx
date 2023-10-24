import { HomeProps } from './Home.types';
import rocket from '../../assets/rocket.png'
import * as S from './Home.styles';

export const Home = ({ isOpen }: HomeProps) => {
  return (
    <>
      <S.Home id='home'>
        <S.HomeContainer>
          <S.HomeContent>
            <S.HomeTitle>Gabriel <S.HomeTitleStrong>Santana</S.HomeTitleStrong> </S.HomeTitle>
            <S.HomeDescription>Developer</S.HomeDescription>
          </S.HomeContent>

          <S.HomeImage isOpen={isOpen}>
            <img src={rocket} alt="" />
          </S.HomeImage>
        </S.HomeContainer>
      </S.Home>

      <S.Teste>

      </S.Teste>
    </>
  )
}