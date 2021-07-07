import React from "react";
import { Helmet } from "react-helmet";
import { ATTRIBUTE_MAP, ATTRIBUTE_KEY_MAP } from "../constants/imageAttributes";

type Paths = string[];

const Meta: React.FC = () => {
  const { [ATTRIBUTE_KEY_MAP.background]: background, ...restAttributeMap } =
    ATTRIBUTE_MAP;
  const paths = Object.entries(restAttributeMap).reduce(
    (paths: Paths, [key, attribute]) => {
      attribute.values.forEach((value) => {
        paths.push(`/images/alpaca/${key}/${value}.png`);
      });
      return paths;
    },
    []
  );

  return (
    <Helmet>
      {paths.map((path) => (
        <link key={path} rel="preload" as="image" href={path} />
      ))}
    </Helmet>
  );
};

export default React.memo(Meta);
