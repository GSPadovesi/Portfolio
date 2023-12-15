import { Iconcircle } from '../../../../components/Iconcircle/Iconcircle';
import { SkillsProps } from './Skills.types';
import js from '../../../../assets/js.png';
import * as S from './Skills.styles';


export const Skills = ({ isChecked }: SkillsProps) => {
  return (
    <S.Skills id='skills'>
      <S.WrapperTeste>
        <Iconcircle isChecked={isChecked} image={js} title={'Javascript'} subtitle={'Programação'} />
      </S.WrapperTeste>
    </S.Skills>
  )
}