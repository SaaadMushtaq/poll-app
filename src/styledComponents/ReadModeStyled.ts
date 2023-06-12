import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  grid-gap: 0.4rem;
  margin: 0.3rem 0.3rem 20px 0.3rem;
  svg {
    fill: var(--fk-theme-color);
    width: 35px;
    height: 35px;
  }
`;

export const ModeStyled = styled.div`
  font-size: 1rem;
  font-weight: normal;
  color: black;
  z-index: 1;
  margin: 0.5rem 0;
`;
