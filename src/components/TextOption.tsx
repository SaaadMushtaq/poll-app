import { Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { createRef } from "react";
import { OptionStyled } from "../styledComponents/OptionStyled";
import { WrapperStyled } from "../styledComponents/WrapperStyled";

type TextOptionProps = {
  answer: string;
  progressbarWidth?: string;
  answerCount?: string | null;
  answerLabel: string;
  onClick: any;
  status?: "selected" | "correct" | "wrong" | "default";
  isAnswered?: boolean;
  styleClasses?: {
    pollOptionClass: string;
    answerTextClass: string;
    answerCountClass: string;
    answerNumberClass: string;
    answerProgressBarClass: string;
  };
  customClass?: string;
  showConfetti?: boolean;
  disabled?: boolean;
  answerIndex?: boolean;
  isOther?: boolean;
  isOtherValue?: boolean;
  persistData?: (value?: any) => void;
  index?: number;
  type?: string;
  isRounded?: boolean;
  setOtherValue?: any;
  other?: any;
  otherInputDisable?: boolean;
};
export const TextOption = ({
  answer,
  progressbarWidth,
  answerLabel,
  onClick,
  status = "default",
  isAnswered,
  showConfetti = false,
  disabled,
  answerIndex,
  isOtherValue,
  type,
  isRounded,
  setOtherValue,
  other,
  otherInputDisable,
}: TextOptionProps) => {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);

  const optionStatus = {
    selected: "fk-text-option-selected",
    correct: "fk-text-option-correct",
    wrong: "fk-text-option-wrong",
    default: "fk-option-label",
  };
  const optionLabelStatus = {
    selected: "fk-option-label-selected",
    correct: "fk-option-label-correct",
    wrong: "fk-option-label-wrong",
    default: "fk-option-label",
  };
  const getClassname = () => {
    return answerIndex
      ? `fk-text-option-selected${
          type && type === "poll" && isAnswered ? "-answered" : ""
        }`
      : `fk-text-option-default${
          type && type === "poll" && isAnswered ? "-answered" : ""
        }`;
  };

  return (
    <WrapperStyled className="fk-text-option">
      <OptionStyled
        className={`fk-text-option-wrapper ${getClassname()} ${
          optionStatus[status]
        }`}
        onClick={() =>
          !disabled && !focused ? onClick && onClick(false) : undefined
        }
        status={status}
        isAnswered={isAnswered}
      >
        <AnswerStyled className="fk-option-text">
          <LabelStyled
            isRounded={isRounded}
            status={status}
            className={`${
              status == "selected" || answerIndex
                ? "fk-option-label-selected"
                : optionLabelStatus[status]
            }`}
          >
            {answerLabel}
          </LabelStyled>
          <TextInputWrapper className="text-input-wrapper">
            {isOtherValue ? (
              <input
                placeholder="Type Your Thoughts"
                className="survey-input-style"
                key={123}
                name={"otherValue"}
                value={other}
                disabled={isAnswered || disabled || otherInputDisable}
                onChange={(e) => {
                  setOtherValue && setOtherValue(e.target.value);
                }}
              />
            ) : (
              answer
            )}
          </TextInputWrapper>
          {isAnswered && progressbarWidth && (
            <>
              <ProgressBarDiv>
                <ProgressBar
                  percent={+progressbarWidth}
                  status="active"
                  className="fk-progress-bar"
                  size="small"
                />
              </ProgressBarDiv>
              <ProgressBarUtilities className="progress-bar-utilities">
                <span className="number-text"></span>
                <span className="percentage-text">
                  {progressbarWidth + `%`}
                </span>
              </ProgressBarUtilities>
            </>
          )}
          {/* <ProgressStyled className="fk-progress-bar" progressWidth={progressbarWidth + '%'}></ProgressStyled> */}
          {showConfetti && <ConfettiAnimation width="300px" height="300px" />}
        </AnswerStyled>
      </OptionStyled>
    </WrapperStyled>
  );
};
