import styled from "styled-components";

export const ProgressStyled = styled.div<any>`
  height: 6px;
  width: ${({ width }) => width};
  background: #3b94e4;
  position: absolute;
  top: 0;
  left: 0;
`;
