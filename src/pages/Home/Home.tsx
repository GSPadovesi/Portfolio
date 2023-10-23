import * as S from './Home.styles';
import rocket from '../../assets/foguete.png'

export const Home = ({ isOpen }: any) => {
  return (
    <S.Home>
      <S.HomeContainer>
        <S.HomeContent>
          <S.HomeTitle>Gabriel</S.HomeTitle>
          <S.HomeTitleStrong>Santana</S.HomeTitleStrong>
          <S.HomeDescription>Developer</S.HomeDescription>
        </S.HomeContent>

        <S.HomeImage isOpen={isOpen}>
          <img src={rocket} alt="" />
        </S.HomeImage>
      </S.HomeContainer>
    </S.Home>
  )
}