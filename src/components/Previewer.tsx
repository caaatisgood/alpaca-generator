import { MouseEvent, useRef } from "react";
import styled from "styled-components";
import mergeImages from "merge-images";
import { ImageConfig } from "../interfaces";
import theme from "../constants/theme";

interface Props {
  alpacaConfig: ImageConfig;
  shuffle: (event: MouseEvent) => void;
}

type Images = string[];
type ColorValueNameMap = {
  [key: string]: string;
};

const COLORS_VALUE_NAME_MAP = Object.entries(theme.colors).reduce(
  (map: ColorValueNameMap, [key, value]) => {
    map[value] = key;
    return map;
  },
  {}
);

const Previewer = ({ alpacaConfig, shuffle }: Props) => {
  const imagesRef = useRef<Images>([]);

  const _download = () => {
    const backgroundName = COLORS_VALUE_NAME_MAP[alpacaConfig.background];
    const backgroundPath = `/images/alpaca/bg/${backgroundName}.png`;
    mergeImages([
      backgroundPath,
      ...imagesRef.current.filter((path) => !!path),
    ]).then((b64) => {
      var a = document.createElement("a");
      a.href = b64;
      a.download = "Alpaca.png";
      a.click();
    });
  };

  const _renderParts = () => {
    const earsPath = `/images/alpaca/ears/${alpacaConfig.ears}.png`;
    const neckPath = `/images/alpaca/neck/${alpacaConfig.neck}.png`;
    const nose = `/images/alpaca/nose.png`;
    const mouthPath = `/images/alpaca/mouth/${alpacaConfig.mouth}.png`;
    const hairPath = `/images/alpaca/hair/${alpacaConfig.hair}.png`;
    const accessoriesPath =
      alpacaConfig.accessories &&
      `/images/alpaca/accessories/${alpacaConfig.accessories}.png`;
    const eyesPath = `/images/alpaca/eyes/${alpacaConfig.eyes}.png`;
    const legPath = `/images/alpaca/leg/${alpacaConfig.leg}.png`;
    let images;

    // special case with different order
    if (
      alpacaConfig.accessories === "headphone" &&
      alpacaConfig.hair === "curls"
    ) {
      images = [
        earsPath,
        neckPath,
        nose,
        accessoriesPath,
        mouthPath,
        hairPath,
        eyesPath,
        legPath,
      ];
      _setImages(images);
      return <>{images.map(_renderImage)}</>;
    }

    images = [
      earsPath,
      neckPath,
      nose,
      mouthPath,
      hairPath,
      accessoriesPath,
      eyesPath,
      legPath,
    ];
    _setImages(images);
    return <>{images.map(_renderImage)}</>;
  };

  const _renderImage = (path: string) =>
    path ? <StyledImg key={path} src={path} /> : null;

  const _setImages = (images: Images) => {
    imagesRef.current = images;
  };

  return (
    <StyledWrapper>
      <StyledInner $bg={alpacaConfig.background}>
        {_renderParts()}
        <StyledLogo src="/images/devprojects-logo-vertical.png" />
      </StyledInner>
      <div>
        <StyledButton onClick={shuffle}>
          <span>
            <StyledButtonIcon>🔀</StyledButtonIcon>
            Random
          </span>
        </StyledButton>
        <StyledButton onClick={_download}>
          <span>
            <StyledButtonIcon>🖼</StyledButtonIcon>
            Download
          </span>
        </StyledButton>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: grid;
  grid-row-gap: 32px;
  @media (max-width: 768px) {
    grid-template-columns: min(90%, 360px) 45px;
  }
`;
const StyledInner = styled.div<{ $bg: string }>`
  height: 360px;
  width: 360px;
  max-width: 360px;
  max-height: 360px;
  transition: background-color 0.3s;
  background-color: ${({ $bg }) => $bg};
  position: relative;
  @media (max-width: 768px) {
    height: 0;
    width: 90%;
    padding-bottom: min(90%, 360px);
  }
`;
const StyledImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
const StyledLogo = styled.img`
  position: absolute;
  left: 6px;
  bottom: 9px;
  width: 16px;
  height: auto;
`;
const StyledButton = styled.button`
  & + & {
    margin-left: 20px;
  }
  min-width: 170px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  color: ${(props) => props.theme.colors.grey80};
  background: #fff;
  padding: 12px 8px;
  outline: none;
  :hover,
  :focus {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  }
  :active {
    box-shadow: none;
    background: ${(props) => props.theme.colors.grey10};
  }
  @media (max-width: 768px) {
    transform-origin: top left;
    transform: rotate(90deg);
    margin-left: 32px;
    position: absolute;
  }
`;
const StyledButtonIcon = styled.span`
  margin-right: 8px;
  display: inline-block;
  @media (max-width: 768px) {
    transform: rotate(-90deg);
  }
`;

export default Previewer;
