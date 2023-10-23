import { useCallback } from "react"
import * as S from "./Hamburger.styles"

export const Hamburger = ({ setIsOpen, isOpen }: any) => {
  const onClick = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  return (
    <S.HamburgerContainer isOpen={isOpen} onClick={onClick}>
      <S.Hamburger isOpen={isOpen} />
    </S.HamburgerContainer>
  )
}