import styled, { css } from "styled-components";

export const Iconcircle = styled.div<any>`
  ${({ isChecked }) => css`
    background-color: ${isChecked ? '#24282C' : '#F2F5ED'};
`}
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    inset: -10px 140px;
    background: linear-gradient(315deg, #18D26F, #24282C);
  }
`
