import styled from "styled-components";

type TriviaQuestionProps = {
  margin?: string;
};

export const TriviaQuestionStyled = styled.div<TriviaQuestionProps>`
  font-size: large;
  font-weight: bold;
  color: #3b94e4;
  /* margin-top: 10px;
    margin-bottom: ${({ margin = "75px" }) => margin}; */

  .fk-question-image-container {
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      height: 100px;
      max-width: 100%;
      align-self: center;
      width: 50%;
      object-fit: cover;
    }
    .fk-question-image {
      max-height: 160px;
      max-width: 100%;
    }
  }

  .fk-question-description {
    margin-top: 5px;
  }
  .fk-question-number {
    margin-top: 5px;
  }
`;
