import React, { useState } from "react";
import styled from "styled-components";
import Previewer from "./Previewer";
import ControlPanel from "./ControlPanel";
import { ImageConfig, TSFixMe } from "../interfaces";
import { ATTRIBUTE_MAP } from "../constants/imageAttributes";
import random from "../utils/random";

const DEFAULT_IMAGE_CONFIG = {
  background: "#002966",
  hair: "default",
  accessories: "default",
  leg: "default",
  eyes: "default",
  mouth: "default",
  ears: "default",
  neck: "default",
};

const AlpacaGenerator = () => {
  const [alpacaConfig, setAlpacaConfig] =
    useState<ImageConfig>(DEFAULT_IMAGE_CONFIG);
  const [activeAttribute, setActiveAttribute] =
    useState<keyof ImageConfig>("hair");

  const _updateAlpacaConfig = (payload: TSFixMe) => {
    setAlpacaConfig((config) => ({
      ...config,
      ...payload,
    }));
  };

  const _shuffle = () => {
    setAlpacaConfig((config) => {
      Object.keys(DEFAULT_IMAGE_CONFIG).forEach((key) => {
        const imageConfigKey = key as keyof ImageConfig;
        config[imageConfigKey] = random(ATTRIBUTE_MAP[imageConfigKey].values);
      });
      return { ...config };
    });
  };

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledTitle>Alpaca Generator</StyledTitle>
        <Previewer alpacaConfig={alpacaConfig} shuffle={_shuffle} />
        <ControlPanel
          alpacaConfig={alpacaConfig}
          setActiveSubAttribute={_updateAlpacaConfig}
          activeAttribute={activeAttribute}
          setActiveAttribute={setActiveAttribute}
        />
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
