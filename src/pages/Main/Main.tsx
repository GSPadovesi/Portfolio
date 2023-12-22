import { Home } from "./Section/Home/Home"
import { MainProps } from "./Main.types"
import { Skills } from "./Section/Skills/Skills"
import { Projects } from "./Section/Projects/Projects"

export const Main = ({ isOpen, isChecked }: MainProps) => {
  return (
    <>
      <Home isOpen={isOpen} />
      <Skills isChecked={isChecked} />
      <Projects />
    </>
  )
}