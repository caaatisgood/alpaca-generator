import React from "react";
import styled, { css } from "styled-components";

interface ColorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  active: boolean;
}

export default function ColorButton(props: ColorButtonProps) {
  const { color, active, ...restProps } = props;
  return (
    <StyledButton $active={active} {...restProps}>
      <StyledColorBlock $color={color} />
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $active: boolean }>`
  flex: 0 0 40px;
  padding: 6px;
  line-height: 0;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  background: transparent;
  :hover {
    border-color: ${(props) => props.theme.colors.blue50};
  }
  ${(props) =>
    props.$active &&
    css`
      border-color: ${props.theme.colors.blue70};
    `}
`;
const StyledColorBlock = styled.span<{ $color: string }>`
  display: inline-block;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  background: ${(props) => props.$color};
`;
