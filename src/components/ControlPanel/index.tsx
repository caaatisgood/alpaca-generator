import styled, { css } from "styled-components";
import { ATTRIBUTE_MAP } from "../../constants/imageAttributes";
import { ImageConfig, TSFixMe } from "../../interfaces";

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
    <div>
      <div className="p-2 flex items-center justify-center">
        <div className="flex overflow-scroll max-w-max space-x-2 p-1 items-center h-28">
          {ATTRIBUTE_MAP[activeAttribute].values.map((value) => {
            if (activeAttribute === "background") {
              return (
                <StyledBgButton
                  key={value}
                  $active={activeSubAttribute === value}
                  $bg={value}
                  onClick={() => _setActiveSubAttribute(value)}
                />
              );
            }
            return (
              <StyledAttributeButton
                key={value}
                $active={activeSubAttribute === value}
                onClick={() => _setActiveSubAttribute(value)}
              >
                {value}
              </StyledAttributeButton>
            );
          })}
        </div>
      </div>
      <div className="p-2 flex items-center justify-center">
        <div className="flex overflow-scroll max-w-max space-x-2 p-1">
          {Object.values(ATTRIBUTE_MAP).map(({ key, text }) => (
            <StyledAttributeButton
              key={key}
              title={text}
              $active={activeAttribute === key}
              onClick={() => setActiveAttribute(key)}
            >
              {text}
            </StyledAttributeButton>
          ))}
        </div>
      </div>
    </div>
  );
};

const StyledAttributeButton = styled.button<{ $active: boolean }>`
  background: ${({ theme }) => theme.colors.red20};
  border-radius: 12px;
  height: 96px;
  width: 96px;
  flex-shrink: 0;
  :focus {
    outline: 0;
  }
  ${({ $active }) =>
    $active &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.red40};
    `}
`;
const StyledBgButton = styled.button<{ $bg: string; $active: boolean }>`
  background: ${({ $bg }) => $bg};
  flex-shrink: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  :focus {
    outline: 0;
  }
  transition: width 0.3s, height 0.3s;
  ${({ $active }) =>
    $active &&
    css`
      height: 40px;
      width: 40px;
    `}
`;

export default ControlPanel;
