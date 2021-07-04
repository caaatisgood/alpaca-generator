import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export default function Button(props: ButtonProps) {
  const { active, ...restProps } = props;
  return <StyledButton $active={active} {...restProps} />;
}

const StyledButton = styled.button<{ $active: boolean }>`
  padding: 12px 32px;
  border: 1px solid ${(props) => props.theme.colors.blue40};
  border-radius: 30px;
  color: ${(props) => props.theme.colors.blue40};
  outline: none;
  :hover,
  :focus {
    padding: 11px 31px;
    border: 2px solid ${(props) => props.theme.colors.blue50};
    color: ${(props) => props.theme.colors.blue50};
    font-weight: bold;
  }
  ${({ $active }) =>
    $active &&
    css`
      && {
        padding: 12px 32px;
        color: #fff;
        font-weight: bold;
        background: ${(props) => props.theme.colors.blue70};
        border: 1px solid ${(props) => props.theme.colors.blue70};
      }
    `}
`;
