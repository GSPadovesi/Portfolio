import * as S from './Github.styles';
import Git from '../../assets/github.png'

export const Github = ({ isChecked }: any) => {
  return (
    <a href="https://github.com/GSPadovesi">
      <S.Wrapper isChecked={isChecked}>
        <img src={Git} alt="Github" />
      </S.Wrapper>
    </a>
  )
}