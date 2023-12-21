import { IconcircleProps } from './Iconcircle.types';
import * as S from './Iconcircle.styles';

export const Iconcircle = ({ isChecked, image, title, subtitle, isColor }: IconcircleProps) => {

  console.log(isColor)

  return (
    <S.Iconcircle isColor={isColor} isChecked={isChecked}>
      <S.WrapperContent>
        <img src={image} />
        <S.Title>{title} <S.Span>{subtitle}</S.Span> </S.Title>
      </S.WrapperContent>
    </S.Iconcircle>
  )
}