import React from "react";
import styled from "styled-components";

const AlpacaGenerator = () => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledTitle>Alpaca Generator</StyledTitle>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.colors.grey20};
`;
const StyledContentWrapper = styled.div`
  max-width: 880px;
  padding: 60px 16px;
  margin-left: auto;
  margin-right: auto;
`;
const StyledTitle = styled.h1`
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 48px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.darkblue70};
  letter-spacing: 0.05em;
`;

export default React.memo(AlpacaGenerator);
