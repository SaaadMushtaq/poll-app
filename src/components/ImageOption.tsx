import React from "react";
import { Card } from "../styledComponents/Card";
import { LabelStyled } from "../styledComponents/LabelStyled";
import { OptionStyled } from "../styledComponents/OptionStyled";
import { ProgressStyled } from "../styledComponents/ProgressStyled";
import { ProgressWrapperStyled } from "../styledComponents/ProgressWrapperStyled";

type ImageOptionProps = {
  src: string;
  imgWidth?: string;
  imgHeight?: string;
  onClick?: () => void;
  caption: string;
  disableCard?: boolean;
  answerLabel?: string;
  progressbarWidth?: string;
  isAnswered?: boolean;
  status?: "selected" | "default" | "correct" | "wrong";
};

const ImageOption = ({
  src = "",
  imgHeight = "79px",
  imgWidth = "79px",
  onClick,
  caption,
  answerLabel,
  disableCard,
  progressbarWidth,
  isAnswered,
  status = "default",
}: ImageOptionProps) => {
  return (
    <>
      {disableCard ? (
        <>
          <img
            width={imgWidth}
            height={imgHeight}
            src={src}
            style={{ marginBottom: "25px" }}
            className="fk-image-question"
          />
          <p className="fk-img-caption">{caption}</p>
        </>
      ) : (
        <OptionStyled
          className={`fk-image-option-wrapper ${
            status == "selected"
              ? "active"
              : status == "correct"
              ? "correct"
              : status == "wrong"
              ? "wrong"
              : ""
          }`}
          status={status}
          onClick={onClick}
        >
          <LabelStyled className="fk-answer-label">{answerLabel}</LabelStyled>
          {src ? (
            <img
              className="fk-image-option"
              width={imgWidth}
              height={imgHeight}
              src={src}
            />
          ) : (
            <Card className="fk-image-card" />
          )}
          <p className="fk-image-caption">{caption}</p>
          {isAnswered && (
            <ProgressWrapperStyled className="fk-progress-bar-wrapper">
              <ProgressStyled
                className="fk-progress-bar"
                width={progressbarWidth}
              ></ProgressStyled>
            </ProgressWrapperStyled>
          )}
        </OptionStyled>
      )}
    </>
  );
};

export default ImageOption;
