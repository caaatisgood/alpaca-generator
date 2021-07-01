import theme from "./theme";

const HAIR_MAP = {
  default: "default",
  curls: "curls",
  short: "short",
  bang: "bang",
  elegant: "elegant",
};

const ACCESSORIES_MAP = {
  default: "",
  flower: "flower",
  earings: "earings",
  headphone: "headphone",
  glasses: "glasses",
};

const LEG_MAP = {
  default: "default",
  bubbleTea: "bubble-tea",
  cookie: "cookie",
  gameConsole: "game-console",
  tiltBackward: "tilt-backward",
  tiltForward: "tilt-forward",
};

const EYES_MAP = {
  default: "default",
  angry: "angry",
  naughty: "naughty",
  panda: "panda",
  smart: "smart",
  star: "star",
};

const MOUTH_MAP = {
  default: "default",
  astonished: "astonished",
  eating: "eating",
  laugh: "laugh",
  tongue: "tongue",
};

const EARS_MAP = {
  default: "default",
  tiltBackward: "tilt-backward",
  tiltForward: "tilt-forward",
};

const NECK_MAP = {
  default: "default",
  bendBackward: "bend-backward",
  bendForward: "bend-forward",
  thick: "thick",
};

export const ATTRIBUTE_MAP = {
  background: {
    key: "background",
    text: "Background",
    values: Object.values(theme.colors),
  },
  hair: {
    key: "hair",
    text: "Hair",
    values: Object.values(HAIR_MAP),
  },
  accessories: {
    key: "accessories",
    text: "Accessories",
    values: Object.values(ACCESSORIES_MAP),
  },
  leg: {
    key: "leg",
    text: "Leg",
    values: Object.values(LEG_MAP),
  },
  eyes: {
    key: "eyes",
    text: "Eyes",
    values: Object.values(EYES_MAP),
  },
  mouth: {
    key: "mouth",
    text: "Mouth",
    values: Object.values(MOUTH_MAP),
  },
  ears: {
    key: "ears",
    text: "Ears",
    values: Object.values(EARS_MAP),
  },
  neck: {
    key: "neck",
    text: "Neck",
    values: Object.values(NECK_MAP),
  },
};
