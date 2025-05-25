/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
    "--padding": "0px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
    "--padding": "0px",
  },
  large: {
    "--height": "24px",
    "--border-radius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(
      'Unknow size of ProgressBar. Valid sizes are "small", "medium", and "large".'
    );
  }

  return (
    <Wrapper
      role="progressbar"
      style={styles}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>

      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  /* trim off corners when progress bar is near full */
  overflow: hidden;
`;
const Bar = styled.div`
  height: 100%;
  width: ${(props) => props.value}%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
