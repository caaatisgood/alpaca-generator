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
        <StyledTitle>STYLE</StyledTitle>
        <div>
          {ATTRIBUTE_MAP[activeAttribute].values.map((value) => {
            if (activeAttribute === "background") {
              return (
                <ColorButton
                  key={value}
                  // $active={activeSubAttribute === value}
                  // $bg={value}
                  onClick={() => _setActiveSubAttribute(value)}
                />
              );
            }
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
// const StyledBgButton = styled.button<{ $bg: string; $active: boolean }>`
//   background: ${({ $bg }) => $bg};
//   flex-shrink: 0;
//   height: 30px;
//   width: 30px;
//   border-radius: 50%;
//   :focus {
//     outline: 0;
//   }
//   transition: width 0.3s, height 0.3s;
//   ${({ $active }) =>
//     $active &&
//     css`
//       height: 40px;
//       width: 40px;
//     `}
// `;

export default ControlPanel;
