import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log(displayedValue);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <Backdrop>
        {displayedValue}
        <StyledIcon id={"chevron-down"} strokeWidth={2} size={24} />
      </Backdrop>
    </Wrapper>
  );
};

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

const StyledSelect = styled.select`  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  appearance: none;
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${StyledSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

    ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export default Select;
