import styled from "styled-components";

export const QuestionsStyled = styled.section<{ type?: any }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .errMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 14px;
    margin: 15px 0;
  }
  .ant-divider-horizontal.ant-divider-with-text::before,
  .ant-divider-horizontal.ant-divider-with-text::after {
    border-top: 3px dashed rgba(0, 0, 0, 0.16);
    top: unset;
  }
`;
