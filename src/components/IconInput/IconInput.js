import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    height: 24,
    borderThickness: 1,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    height: 36,
    borderThickness: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(
      'Unknow size of IconInput. Valid sizes are "small" and "large".'
    );
  }

  return (
    <Wrapper style={{ "--width": `${width}px` }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput
        style={{
          "--font-size": `${styles.fontSize / 16}rem`,
          "--height": `${styles.height / 16}rem`,
          "--border-thickness": `${styles.borderThickness}px`,
        }}
        {...delegated}
      />
      <StyledIcon id={icon} size={styles.iconSize} strokeWidth={2} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: var(--height);
  border: none;
  color: inherit;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  font-size: var(--font-size);
  font-weight: 700;
  padding-left: var(--height);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }
`;
const StyledIcon = styled(Icon)`
  position: absolute;
  color: inherit;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export default IconInput;
