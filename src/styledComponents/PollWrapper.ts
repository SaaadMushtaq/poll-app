import styled from "styled-components";

type PollWrapperProps = {
  padding?: string;
  height?: string;
  width?: string;
  bgColor?: string;
  bgImage?: string;
  optionsBGColor?: string;
  optionsBGImg?: string;
};

export const PollAppWrapper = styled.div<PollWrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ padding = "0px" }) => padding};
  width: ${({ width = "auto" }) => width};
  height: ${({ height = "auto" }) => height};
  background-size: cover;
  justify-content: space-between;
  line-height: 1;
  background-color: ${({ bgColor, bgImage }) =>
    bgImage ? "#fff" : bgColor || "#fff"};
  .questions-wrapper {
    width: 100%;
    /* background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")}; */
  }
  .fk-live-question {
    background: ${({ bgImage }) => bgImage && `url(${bgImage})`};
    background-repeat: repeat;
    background-size: cover;
    padding-bottom: 27px;
    padding-top: 20px;
    font-size: 24px;
    font-weight: 700;
  }
  .fk-question-description {
    padding: 0 15px;
    margin-bottom: 0;
    text-align: center;
    font-size: 20px;
    font-weight: normal;
  }
  .fk-options-wrapper {
    background: ${({ optionsBGImg }) => optionsBGImg && `url(${optionsBGImg})`};
    background-color: ${({ optionsBGImg, optionsBGColor }) =>
      optionsBGImg ? "#fff" : optionsBGColor || "#fff"};
    background-repeat: repeat;
    background-size: cover;
    padding: 30px 20px;
    border-radius: 40px 40px 0 0;
    justify-self: center;
    height: 100%;
    display: flex;
    .fk-fixed {
      flex-grow: 1;
    }
    .fk-footer-img-wrapper {
      height: 60px;
      width: 60px;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      #fk-footer-img {
        z-index: 1;
        height: 100%;
      }
    }
    .fk-options-layout {
      grid-row-gap: 0 !important;
      width: 100%;
      .fk-answer-count {
        font-size: 15px;
        color: var(--fk-theme-color);
      }
      .fk-options {
        margin: 10px 0 10px 3%;
      }
      .fk-text-option-wrapper {
        min-height: 44px;
        box-shadow: none;
        border: 1px solid #e3e3e3;
        .fk-option-text {
          display: block;
          width: 100%;
          padding: 0 3px 0 9px;
          .fk-option-label {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #e3e3e3;
            color: rgb(0, 0, 0, 0.7);
            position: absolute;
            left: -15px;
            top: 5px;
            font-size: 17px;
            font-weight: normal;
            padding: 0;
            height: 32px;
            width: 32px;
            padding-bottom: 1px;
          }
          .fk-option-label-selected {
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--fk-theme-color);
            color: white;
            position: absolute;
            left: -15px;
            top: 5px;
            font-size: 17px;
            font-weight: normal;
            padding: 0;
            height: 32px;
            width: 32px;
            padding-bottom: 1px;
          }
          .progress-bar-utilities {
            margin-top: 0.8rem;
          }
          .text-input-wrapper {
            margin-left: 18px;
          }
        }
        &.fk-text-option-default-answered {
          padding: 10px 0 5px 0;
          width: 100%;
        }
        &.fk-text-option-selected {
          border-color: linear-gradient(
            to left,
            rgba(
              var(--fk-theme-red-color),
              var(--fk-theme-green-color),
              var(--fk-theme-blue-color),
              0.7
            ),
            rgba(
              var(--fk-theme-red-color),
              var(--fk-theme-green-color),
              var(--fk-theme-blue-color),
              1
            )
          );
          border-width: 2px;
          color: var(--fk-theme-color);
          width: 100%;
          padding: 7px 0;
        }
        &.fk-text-option-selected-answered {
          padding: 10px 0 5px 0;
          border-color: linear-gradient(
            to left,
            rgba(
              var(--fk-theme-red-color),
              var(--fk-theme-green-color),
              var(--fk-theme-blue-color),
              0.7
            ),
            rgba(
              var(--fk-theme-red-color),
              var(--fk-theme-green-color),
              var(--fk-theme-blue-color),
              1
            )
          );
          border-width: 2px;
          color: var(--fk-theme-color);
          width: 100%;
        }
      }
      .fk-progress-bar {
        opacity: 1;
      }
    }
  }

  .fk-button {
    border-radius: 5px;
    font-size: 16px;
    min-width: 25%;
    margin: auto;
    font-weight: normal;
    margin-bottom: 0px;
    padding: 10px 10px;
    &.fk-button-disabled {
      opacity: 0.3;
    }
  }
  .fk-footer-wrapper {
    display: none;
  }
`;
