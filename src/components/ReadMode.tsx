import React from "react";
import { Wrapper, ModeStyled } from "../styledComponents/ReadModeStyled";
import TickIcon from "./TickIcon";

const ReadMode = () => {
  return (
    <Wrapper>
      <TickIcon />
      <ModeStyled>'Your response has been captured'</ModeStyled>
    </Wrapper>
  );
};

export default ReadMode;
