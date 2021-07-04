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
  accessories: "",
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
      <StyledMain>
        <StyledTitle>Alpaca Generator</StyledTitle>
        <Previewer alpacaConfig={alpacaConfig} shuffle={_shuffle} />
        <ControlPanel
          alpacaConfig={alpacaConfig}
          setActiveSubAttribute={_updateAlpacaConfig}
          activeAttribute={activeAttribute}
          setActiveAttribute={setActiveAttribute}
        />
      </StyledMain>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  background: ${(props) => props.theme.colors.grey20};
`;
const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 360px 1fr;
  grid-row-gap: 32px;
  grid-column-gap: 80px;
  max-width: 912px;
  padding: 60px 16px;
  margin-left: auto;
  margin-right: auto;
`;
const StyledTitle = styled.h1`
  grid-column: 1/-1;
  text-transform: uppercase;
  margin: 0;
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.darkblue70};
  letter-spacing: 0.05em;
`;

export default React.memo(AlpacaGenerator);
