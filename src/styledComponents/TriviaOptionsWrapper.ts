import styled from "styled-components";

export const TriviaOptionsWrapper = styled.div<{
  padding: string;
  growVertically?: boolean;
}>`
  padding: ${({ padding = "unset" }) => padding};
  /* background-color: rgba(var(--fk-theme-red-color), var(--fk-theme-green-color), var(--fk-theme-blue-color), 0.06); */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  ${(props) => props.growVertically && "height: max-content !important;"}
  /* background-repeat: no-repeat;
    background-size: cover; */
    .poll-button {
    margin-bottom: 20px;
    width: fit-content;
  }

  .ant-radio-group {
    width: 100%;
  }
`;
