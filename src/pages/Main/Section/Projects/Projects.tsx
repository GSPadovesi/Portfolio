import Foguete from '../../../../assets/foguete.png'
import * as S from './projects.styles'

export const Projects = () => {
  return (
    <S.Projects id='projects'>
      <S.ProjectsWrapper>
        <img src={Foguete} alt="Icone de um foguete" />
        <S.ProjectsTitle>EM CONSTRUÇÃO</S.ProjectsTitle>
        <S.ProjectsParagraph>Este é o meu portfólio espacial, e ele está atualmente em construção. Em breve, você poderá explorar os projetos e conquistas que ultrapassam as estrelas!</S.ProjectsParagraph>
        <S.ProjectsSocial>
          <img src={Foguete} alt="Icone de um foguete" />
          <img src={Foguete} alt="Icone de um foguete" />
          <img src={Foguete} alt="Icone de um foguete" />
          <img src={Foguete} alt="Icone de um foguete" />
        </S.ProjectsSocial>
      </S.ProjectsWrapper>
      <S.ProjectsContentImg>
        <img src={Foguete} alt="Icone de um foguete" />
      </S.ProjectsContentImg>
    </S.Projects>
  )
};