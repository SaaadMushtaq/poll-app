import styled from "styled-components";

type OptionsLayoutProps = {
  templateColumns?: string;
  gridGap?: string;
};
export const OptionsLayout = styled.div<OptionsLayoutProps>`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-gap: ${({ gridGap }) => gridGap || "20px"};
  justify-content: center;
  z-index: 1;

  .ant-rate {
    color: var(--fk-theme-color);
  }
  .ant-rate-star-first,
  .ant-rate-star-second {
    color: #fff;
  }
  .ant-rate-star-first,
  .ant-rate-star-full .ant-rate-star-second {
    color: inherit !important;
  }
  .fk-correct-answer-text {
    text-align: center;
  }
`;
