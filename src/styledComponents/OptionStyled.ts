import styled from "styled-components";

type OptionStyledProps = {
  status?: "selected" | "correct" | "wrong" | "default";
  isAnswered?: boolean;
};

export const OptionStyled = styled.div<OptionStyledProps>`
  display: flex;
  cursor: pointer;
  padding: 20px 8px 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 153px;
  background: #fff;
  box-shadow: 0 3px 6px 0;
  border: ${(props) =>
    props.status === "selected" ? "2px solid #3b94e4" : "transparent"};

  p {
    margin-top: 13px;
    text-align: center;
    font-size: medium;
    font-weight: bold;
    color: #3b94e4;
  }
  img {
    /* margin-top:30px; */
    display: block;
  }
  position: relative;

  min-height: 36px;
  height: auto;
  padding: 2px 0 2px 2px;
  border-radius: 5px;
  box-shadow: 0 3px 6px 0 #3b94e4;
  background: ${(props) => getOptionBackground(props)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ isAnswered = false }) => (isAnswered ? "default" : "pointer")};
  z-index: 1;
  border: ${(props) => getBorder(props)};
`;
