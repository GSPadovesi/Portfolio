import { Iconcircle } from '../../../../components/Iconcircle/Iconcircle';
import { SkillsProps } from './Skills.types';
import * as S from './Skills.styles';

export const Skills = ({ isChecked }: SkillsProps) => {
  return (
    <S.Skills id='skills'>
      <S.WrapperTeste>
        <Iconcircle isChecked={isChecked} />
      </S.WrapperTeste>
    </S.Skills>
  )
}