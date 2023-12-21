import { Iconcircle } from '../../../../components/Iconcircle/Iconcircle';
import { SkillsProps } from './Skills.types';
import { ThreeComponent } from '../../../../components/Earth/Earth';
import JS from '../../../../assets/js.png';
import HTML from '../../../../assets/html-5.png';
import CSS from '../../../../assets/css-3.png';
import TS from '../../../../assets/TS.png';
import JAVA from '../../../../assets/java.png';
import SQL from '../../../../assets/mysql.png';
import AFRAME from '../../../../assets/aframe.png';
import MONGODB from '../../../../assets/mongodb.png';
import GRAPHQL from '../../../../assets/graphql.png';
import * as S from './Skills.styles';

export const Skills = ({ isChecked }: SkillsProps) => {

  return (
    <S.Skills id='skills'>
      <S.SkillsContainer>
        <S.SkillsItems>
          <S.SkillsTitle>Habilidades</S.SkillsTitle>
          <S.SkillsItem>
            <Iconcircle isChecked={isChecked} image={JS} isColor='#D5A105' title='Javascript' subtitle='Linguagem de programação' />
            <Iconcircle isChecked={isChecked} image={HTML} isColor='#FF4C1E' title='HTML5' subtitle='Linguagem de marcação' />
            <Iconcircle isChecked={isChecked} image={CSS} isColor='#0054EB' title='CSS3' subtitle='Cascading Style Sheets' />
          </S.SkillsItem>
          <S.SkillsItem>
            <Iconcircle isChecked={isChecked} image={TS} isColor='#1976D2' title='Typescript' subtitle='Linguagem de programação' />
            <Iconcircle isChecked={isChecked} image={JAVA} isColor='#DB380E' title='Java' subtitle='Linguagem de programação' />
            <Iconcircle isChecked={isChecked} image={SQL} isColor='#FDAD17' title='MySQL' subtitle='Linguagem SQL' />
          </S.SkillsItem>
          <S.SkillsItem>
            <Iconcircle isChecked={isChecked} image={AFRAME} isColor='#EE295F' title='Aframe' subtitle='Linguagem de programação / 3D' />
            <Iconcircle isChecked={isChecked} image={MONGODB} isColor='#57A656' title='MongoDB' subtitle='Banco de dados não relacional' />
            <Iconcircle isChecked={isChecked} image={GRAPHQL} isColor='#E10098' title='GraphQL' subtitle='Linguagem de consulta' />
          </S.SkillsItem>
        </S.SkillsItems>
        <S.SkillsCanva>
          <ThreeComponent />
        </S.SkillsCanva>
      </S.SkillsContainer>
    </S.Skills>
  )
}