import * as S from './Github.styles';
import Git from '../../assets/github.png'

export const Github = () => {
  return (
    <a href="https://github.com/GSPadovesi">
      <S.Wrapper>
        <img src={Git} alt="Github" />
      </S.Wrapper>
    </a>
  )
}