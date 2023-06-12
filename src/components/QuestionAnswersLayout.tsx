import React, { useState } from "react";
import ReactWordcloud, { Word } from "react-wordcloud";
import { OptionsLayout } from "../styledComponents/OptionsLayout";
import { QuestionsStyled } from "../styledComponents/QuestionsStyled";
import { TriviaOptionsHeading } from "../styledComponents/TriviaOptionsHeading";
import { TriviaOptionsWrapper } from "../styledComponents/TriviaOptionsWrapper";
import { TriviaQuestionStyled } from "../styledComponents/TriviaQuestionStyled";
import ReadMode from "./ReadMode";

const data = {
  displayName: "Test Poll",
  duration: 2419200,
  eventId: "fankave-testing",
  groupId: "test",
  id: "test-poll-565595",
  isAnswered: false,
  isReadOnly: false,
  options: [{ text: "Option one" }, { text: "Option two" }],
  question: { text: "This is dummy question 1" },
  stadiumId: "default",
  startedAt: 1663652093,
  status: "live",
  type: "poll",
};

const QuestionAnswersLayout = () => {
  let [visualizeDataArray, setVisualizeDataArray] = useState<Word[]>([]);
  const [displayWordCloud, setDisplayWordCloud] = useState<boolean>(false);
  const isAnswered = false;
  const selectHeadingText = "Select an option";

  const pollStats = ["100", "0"];

  return (
    <QuestionsStyled type={"poll"} className={"questions-wrapper"}>
      <TriviaQuestionStyled className="fk-live-question" margin={"75px"}>
        <p className="fk-question-description" />
      </TriviaQuestionStyled>
      <TriviaOptionsWrapper className="fk-options-wrapper" padding={"20px"}>
        {displayWordCloud && visualizeDataArray ? (
          <div style={{ height: "500px" }}>
            <ReactWordcloud
              words={visualizeDataArray}
              options={{
                fontFamily: "impact",
                fontSizes: [25, 60],
                fontStyle: "normal",
                fontWeight: "normal",
              }}
            />
          </div>
        ) : (
          <>
            {!isAnswered && selectHeadingText && (
              <TriviaOptionsHeading className={`fk-options-heading hide`}>
                {selectHeadingText}
              </TriviaOptionsHeading>
            )}

            {isAnswered && <ReadMode />}
            <OptionsLayout
              className="fk-options-layout"
              templateColumns={"1fr"}
              gridGap={undefined}
            >
              {data.options.map((option: any, index: any) => {
                const answer = option;
                const answerCount =
                  pollStats && pollStats.length ? `${pollStats[index]}%` : null;
                const caption =
                  answerCount === null ? answer : `${answer} (${answerCount})`;

                return (
                  <div key={`${index}${answer}`} className="fk-options">
                    {
                      <TextOption
                        key={index}
                        answerCount={answerCount}
                        answer={answer}
                        progressbarWidth={
                          distribution && `${distribution[index]}`
                        }
                        answerLabel={String.fromCharCode(65 + index)}
                        onClick={() => onSelectOption(index)}
                        status={
                          getStatus ? getStatus(index) : getOptionsStatus(index)
                        }
                        answerIndex={
                          questionData.answerValue === index ? true : false
                        }
                        showConfetti={
                          isOlympicsSettings
                            ? type === "poll"
                              ? questionData.answerValue === index
                                ? true
                                : false
                              : isCorrectValue &&
                                correctAnswerIndexes.indexOf(index) != -1
                              ? true
                              : false
                            : false
                        }
                        type={type}
                        isAnswered={
                          type === "poll"
                            ? hasPollStats
                              ? true
                              : false
                            : correctAnswerIndexes &&
                              correctAnswerIndexes.length
                        }
                        isRounded={isRounded}
                      />
                    }
                  </div>
                );
              })}
            </OptionsLayout>

            <VerticalOffset />
            {!isPredictiveContest &&
              displayText &&
              selectedIndex &&
              correctAnswerIndexes &&
              correctAnswerIndexes[0] !== selectedIndex[0] && (
                <p className="fk-correct-answer-text">{displayText}</p>
              )}
            {isPredictiveContest && (
              <>
                <LeftIcon
                  disable={currentQuestionIndex === 0}
                  onClick={
                    currentQuestionIndex === 0 ? undefined : goToPrevQuestion
                  }
                  className={`fk-left-arrow-icon ${
                    currentQuestionIndex !== 0 ? "active" : ""
                  }`}
                  type="primary"
                >
                  <ChevronLeftIcon />
                </LeftIcon>
                <RightIcon
                  disable={isLastQuestion}
                  onClick={isLastQuestion ? undefined : goToNextQuestion}
                  className={`fk-right-arrow-icon ${
                    !isLastQuestion ? "active" : ""
                  }`}
                  type="primary"
                >
                  <ChevronRightIcon />
                </RightIcon>
              </>
            )}
            {footerText && (
              <TriviaFooterStyled className="fk-footer-wrapper">
                <TickIcon />
                <FooterTextStyled className="fk-footer-text">
                  {footerText}
                </FooterTextStyled>
              </TriviaFooterStyled>
            )}
            {errMessage && <span className="errMessage"> {errMessage}</span>}
            {buttonText && (
              <Button
                text={buttonText}
                onClick={!disableButton ? buttonAction : undefined}
                type={disableButton ? "disabled" : "primary"}
                buttonBackgroundColor={buttonBackgroundColor}
                buttonTextColor={buttonTextColor}
              />
            )}

            <Button
              text={"Word Cloud"}
              onClick={() => setDisplayWordCloud(true)}
              type={!questionData.isAnswered ? "disabled" : "primary"}
              buttonBackgroundColor={buttonBackgroundColor}
              buttonTextColor={buttonTextColor}
            />
            {isLastQusetion && (
              <LastQuestionText>
                {" "}
                This is the last question, you cannot change your answers after
                this.
              </LastQuestionText>
            )}
            <div className="fk-fixed"></div>
            <div className="fk-footer-img-wrapper">
              {logo && <img src={logo} id="fk-footer-img" />}
            </div>
          </>
        )}
      </TriviaOptionsWrapper>
    </QuestionsStyled>
  );
};

export default QuestionAnswersLayout;
