import { Iconcircle } from '../../../../components/Iconcircle/Iconcircle';
import { SkillsProps } from './Skills.types';
import { ThreeComponent } from '../../../../components/Earth/Earth';
import JS from '../../../../assets/js.png';
import * as S from './Skills.styles';

let Skill = [{
  row: [
    {
      title: 'Javascript',
      subtitle: 'Programação',
      image: JS,
    },
    {
      title: 'Javascript',
      subtitle: 'Programação',
      image: JS,
    },
  ],
  row2: [
    {
      title: 'Javascript',
      subtitle: 'Programação',
      image: JS,
    },
    {
      title: 'Javascript',
      subtitle: 'Programação',
      image: JS,
    },

  ]
}]

export const Skills = ({ isChecked }: SkillsProps) => {

  console.log(Skill)

  return (
    <S.Skills id='skills'>
      <S.SkillsContainer>
        <S.SkillsItems>
          <S.SkillsTitle>Habilidades</S.SkillsTitle>

          {Skill.map((item, index) => (
            <S.SkillsItem key={index}>
              {item.row.map((item, index) => (
                <Iconcircle key={index} isChecked={isChecked} image={item.image} title={item.title} subtitle={item.subtitle} />
              ))}
            </S.SkillsItem>

          ))}
          {/* {
            Skill.map((item, index) => {
              return (
                <S.SkillsItem key={index}>
                  {item.row.map((item, index) => {
                    return (
                      <Iconcircle key={index} isChecked={isChecked} image={item.image} title={item.title} subtitle={item.subtitle} />
                    )
                  })}
                </S.SkillsItem>
              )
            })
          } */}

          {/* <S.SkillsItem>
            <Iconcircle isChecked={isChecked} image={JS} title='Javascript' subtitle='Programação' />
            <Iconcircle isChecked={isChecked} image={JS} title='Javascript' subtitle='Programação' />
          </S.SkillsItem> */}
        </S.SkillsItems>
        <S.SkillsCanva>
          <ThreeComponent />
        </S.SkillsCanva>
      </S.SkillsContainer>
    </S.Skills>
  )
}