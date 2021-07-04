import { MouseEvent } from "react";
import styled from "styled-components";
import { ImageConfig } from "../interfaces";

interface Props {
  alpacaConfig: ImageConfig;
  shuffle: (event: MouseEvent) => void;
}

const Previewer = ({ alpacaConfig, shuffle }: Props) => {
  const _renderParts = () => {
    const ears = <Ears src={`/images/alpaca/ears/${alpacaConfig.ears}.png`} />;
    const neck = <Neck src={`/images/alpaca/neck/${alpacaConfig.neck}.png`} />;
    const nose = <Nose src="/images/alpaca/nose.png" />;
    const mouth = (
      <Mouth src={`/images/alpaca/mouth/${alpacaConfig.mouth}.png`} />
    );
    const hair = <Hair src={`/images/alpaca/hair/${alpacaConfig.hair}.png`} />;
    const accessories = alpacaConfig.accessories && (
      <Accessories
        src={`/images/alpaca/accessories/${alpacaConfig.accessories}.png`}
      />
    );
    const eyes = <Eyes src={`/images/alpaca/eyes/${alpacaConfig.eyes}.png`} />;
    const leg = <Leg src={`/images/alpaca/leg/${alpacaConfig.leg}.png`} />;

    // special case with different order
    if (
      alpacaConfig.accessories === "headphone" &&
      alpacaConfig.hair === "curls"
    ) {
      return (
        <>
          {ears}
          {neck}
          {nose}
          {accessories}
          {mouth}
          {hair}
          {eyes}
          {leg}
        </>
      );
    }

    return (
      <>
        {ears}
        {neck}
        {nose}
        {mouth}
        {hair}
        {accessories}
        {eyes}
        {leg}
      </>
    );
  };

  return (
    <div>
      <StyledInner $bg={alpacaConfig.background}>{_renderParts()}</StyledInner>
      <StyledShuffle onClick={shuffle}>🔀</StyledShuffle>
    </div>
  );
};

const StyledInner = styled.div<{ $bg: string }>`
  height: 360px;
  width: 360px;
  transition: background-color 0.3s;
  background-color: ${({ $bg }) => $bg};
  position: relative;
`;
const StyledImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
const Neck = styled(StyledImg)``;
const Ears = styled(StyledImg)``;
const Accessories = styled(StyledImg)``;
const Hair = styled(StyledImg)``;
const Nose = styled(StyledImg)``;
const Mouth = styled(StyledImg)``;
const Eyes = styled(StyledImg)``;
const Leg = styled(StyledImg)``;
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

export default Previewer;
