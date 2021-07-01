import { MouseEvent } from "react";
import styled, { css } from "styled-components";
import { ImageConfig } from "../interfaces";

interface Props {
  alpacaConfig: ImageConfig;
  shuffle: (event: MouseEvent) => void;
}

const ratio = 0.625;

const Previewer = ({ alpacaConfig, shuffle }: Props) => (
  <StyledWrapper>
    <StyledInner $bg={alpacaConfig.background}>
      {/* <EarFront
        src="/images/alpaca/ear-front.png"
        $type={alpacaConfig.earFront}
      />
      <EarBack src="/images/alpaca/ear-back.png" $type={alpacaConfig.earBack} /> */}
      <Neck src="/images/alpaca/neck.png" />
      <Accessories
        src={`/images/alpaca/accessories/${alpacaConfig.accessories}.png`}
      />
      <Face src="/images/alpaca/face.png" />
      <Mouth src={`/images/alpaca/mouth/${alpacaConfig.mouth}.png`} />
      <Hair src={`/images/alpaca/hair/${alpacaConfig.hair}.png`} />
      <Eyes
        src={`/images/alpaca/eyes/${alpacaConfig.eyes}.png`}
        $type={alpacaConfig.eyes}
      />
      <Leg
        src={`/images/alpaca/leg/${alpacaConfig.leg}.png`}
        $type={alpacaConfig.leg}
      />
    </StyledInner>
    <StyledShuffle onClick={shuffle}>🔀</StyledShuffle>
  </StyledWrapper>
);

const StyledShuffle = styled.button`
  margin-left: 8px;
  font-size: 16px;
  outline: none;
  filter: grayscale(0.5);
  :focus {
    outline: none;
  }
  :hover {
    filter: grayscale(0.1);
  }
`;

const Neck = styled.img`
  position: absolute;
  width: ${202 * ratio}px;
  left: ${109 * ratio}px;
  top: ${152 * ratio}px;
`;
// const EarFront = styled.img`
//   position: absolute;
//   width: ${48 * ratio}px;
//   left: ${145 * ratio}px;
//   top: ${72 * ratio}px;
//   transition: transform 0.2s;
//   transform-origin: center bottom;
//   ${({ $type }) => {
//     if ($type === "tilt") {
//       return css`
//         transform: rotate(-16deg);
//       `;
//     }
//   }}
// `;
// const EarBack = styled.img`
//   position: absolute;
//   width: ${48 * ratio}px;
//   left: ${223 * ratio}px;
//   top: ${72 * ratio}px;
//   transition: transform 0.2s, left 0.2s;
//   transform-origin: center bottom;
//   ${({ $type }) => {
//     if ($type === "tilt") {
//       return css`
//         transform: rotate(16deg);
//         left: ${208 * ratio}px;
//       `;
//     }
//   }}
// `;
const Accessories = styled.img`
  position: absolute;
  width: ${223 * ratio}px;
  left: ${89 * ratio}px;
  top: ${26 * ratio}px;
`;
const Hair = styled.img`
  position: absolute;
  width: ${196 * ratio}px;
  left: ${214 * ratio}px;
  top: ${138 * ratio}px;
`;
const Face = styled.img`
  position: absolute;
  width: ${168 * ratio}px;
  left: ${214 * ratio}px;
  top: ${282 * ratio}px;
`;
const Mouth = styled.img`
  position: absolute;
  width: ${132 * ratio}px;
  left: ${214 * ratio}px;
  top: ${284 * ratio}px;
`;
const Eyes = styled.img<{ $type: string }>`
  position: absolute;
  ${({ $type }) => {
    if ($type === "smart") {
      return css`
        width: ${103 * ratio}px;
        left: ${107 * ratio}px;
        top: ${256 * ratio}px;
      `;
    } else if ($type === "sprint" || $type === "sleepy" || $type === "angry") {
      return css`
        width: ${30 * ratio}px;
        left: ${166 * ratio}px;
        top: ${268 * ratio}px;
      `;
    } else if ($type === "naughty") {
      return css`
        width: ${30 * ratio}px;
        left: ${166 * ratio}px;
        top: ${261 * ratio}px;
      `;
    } else if ($type === "excited") {
      return css`
        width: ${40 * ratio}px;
        left: ${160 * ratio}px;
        top: ${260 * ratio}px;
      `;
    }
  }}
`;
const Leg = styled.img<{ $type: string }>`
  position: absolute;
  ${({ $type }) => {
    if ($type === "straight") {
      return css`
        width: ${88 * ratio}px;
        left: ${366 * ratio}px;
        top: ${414 * ratio}px;
      `;
    } else if ($type === "tilt left") {
      return css`
        width: ${120 * ratio}px;
        left: ${355 * ratio}px;
        top: ${435 * ratio}px;
      `;
    } else if ($type === "tilt right") {
      return css`
        width: ${120 * ratio}px;
        left: ${340 * ratio}px;
        top: ${417 * ratio}px;
      `;
    }
  }}
`;

const StyledWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const StyledInner = styled.div<{ $bg: string }>`
  height: 320px;
  width: 320px;
  transition: background-color 0.3s;
  background-color: ${({ $bg }) => $bg};
  position: relative;
`;

export default Previewer;
