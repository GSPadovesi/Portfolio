import * as S from './Iconcircle.styles';
import js from '../../assets/js.png'

export const Iconcircle = ({ isChecked }: any) => {
  return (
    <S.Iconcircle isChecked={isChecked}>
      <S.WrapperContent>
        <img src={js} alt="Javascript" />
        <S.Title>Javascript <S.Span>Programação</S.Span></S.Title>
      </S.WrapperContent>
    </S.Iconcircle>
  )
}