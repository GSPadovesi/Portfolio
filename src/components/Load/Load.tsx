import * as S from './Load.styles'
import Logo from '../../../public/g.svg'

export const Load = () => {
  return (
    <S.Load>
      <S.LoadContent>
        <img src={Logo} alt="" />
      </S.LoadContent>
    </S.Load>
  )
}