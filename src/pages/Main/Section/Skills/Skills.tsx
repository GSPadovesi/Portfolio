import { Iconcircle } from '../../../../components/Iconcircle/Iconcircle';
import { SkillsProps } from './Skills.types';
import { ThreeComponent } from '../../../../components/Earth/Earth';
import { useRef } from 'react';
import JS from '../../../../assets/js.png';

import * as S from './Skills.styles';

export const Skills = ({ isChecked }: SkillsProps) => {




  return (
    <S.Skills id='skills'>
      <S.SkillsContainer>
        <S.SkillsItems>
          <S.SkillsTitle>Skills</S.SkillsTitle>
          <Iconcircle isChecked={isChecked} image={JS} title='Javascript' subtitle='Programação' />
        </S.SkillsItems>
        <S.SkillsCanva>
          <ThreeComponent />
        </S.SkillsCanva>
      </S.SkillsContainer>
    </S.Skills>
  )
}