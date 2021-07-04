import React from "react";
import styled from "styled-components";

interface ColorButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ColorButton(props: ColorButtonProps) {
  return <StyledButton {...props} />;
}

const StyledButton = styled.button``;
