import styled from "styled-components";
import { ATTRIBUTE_MAP, ATTRIBUTES } from "../../constants/imageAttributes";
import { ImageConfig, TSFixMe } from "../../interfaces";
import Button from "./Button";
import ColorButton from "./ColorButton";

interface Props {
  alpacaConfig: ImageConfig;
  activeAttribute: keyof ImageConfig;
  setActiveAttribute: Function;
  setActiveSubAttribute: Function;
}

const ControlPanel = ({
  alpacaConfig,
  setActiveSubAttribute,
  activeAttribute,
  setActiveAttribute,
}: Props) => {
  const activeSubAttribute = alpacaConfig[activeAttribute];

  const _setActiveSubAttribute = (value: TSFixMe) =>
    setActiveSubAttribute({
      [activeAttribute]: value,
    });

  return (
    <StyledWrapper>
      <StyledFrame>
        <StyledTitle>PART</StyledTitle>
        <div>
          {ATTRIBUTES.map((key) => {
            const { text } = ATTRIBUTE_MAP[key];
            return (
              <StyledButton
                key={key}
                title={text}
                active={activeAttribute === key}
                onClick={() => setActiveAttribute(key)}
              >
                {text}
              </StyledButton>
            );
          })}
        </div>
      </StyledFrame>
      <StyledFrame>
        {activeAttribute === "background" ? (
          <>
            <StyledTitle>COLORS</StyledTitle>
            <StyledColorButtonsWrapper>
              {ATTRIBUTE_MAP[activeAttribute].values.map((value) => {
                return (
                  <StyledColorButton
                    key={value}
                    active={activeSubAttribute === value}
                    color={value}
                    onClick={() => _setActiveSubAttribute(value)}
                  />
                );
              })}
            </StyledColorButtonsWrapper>
          </>
        ) : (
          <>
            <StyledTitle>STYLE</StyledTitle>
            <div>
              {ATTRIBUTE_MAP[activeAttribute].values.map((value) => {
                return (
                  <StyledButton
                    key={value}
                    active={activeSubAttribute === value}
                    onClick={() => _setActiveSubAttribute(value)}
                  >
                    {value}
                  </StyledButton>
                );
              })}
            </div>
          </>
        )}
      </StyledFrame>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 330px;
`;
const StyledFrame = styled.div`
  & + & {
    margin-top: 32px;
  }
`;
const StyledTitle = styled.h2`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 900;
  margin: 0 0 12px 0;
  color: ${(props) => props.theme.colors.darkblue70};
`;
const StyledButton = styled(Button)`
  margin-right: 8px;
  margin-bottom: 8px;
`;
const StyledColorButtonsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 150px;
`;
const StyledColorButton = styled(ColorButton)`
  margin-right: 8px;
  margin-bottom: 8px;
`;

export default ControlPanel;
