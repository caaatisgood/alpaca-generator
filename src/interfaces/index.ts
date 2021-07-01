import { ATTRIBUTE_MAP } from "../constants/imageAttributes";

export type TSFixMe = any;

export type ImageConfig = {
  background: string;
  hair: typeof ATTRIBUTE_MAP.hair.values[number];
  accessories: typeof ATTRIBUTE_MAP.accessories.values[number];
  leg: typeof ATTRIBUTE_MAP.leg.values[number];
  eyes: typeof ATTRIBUTE_MAP.eyes.values[number];
  mouth: typeof ATTRIBUTE_MAP.mouth.values[number];
  ears: typeof ATTRIBUTE_MAP.ears.values[number];
  neck: typeof ATTRIBUTE_MAP.neck.values[number];
};
