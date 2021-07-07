import theme from "./theme";

const HAIR_MAP = {
  default: "default",
  curls: "curls",
  short: "short",
  bang: "bang",
  elegant: "elegant",
  quiff: "quiff",
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

export const ATTRIBUTE_KEY_MAP = {
  background: "background",
  hair: "hair",
  accessories: "accessories",
  leg: "leg",
  eyes: "eyes",
  mouth: "mouth",
  ears: "ears",
  neck: "neck",
};

export const ATTRIBUTE_MAP = {
  [ATTRIBUTE_KEY_MAP.background]: {
    key: "background",
    text: "Background",
    values: [
      theme.colors.red70,
      theme.colors.red60,
      theme.colors.red50,
      theme.colors.yellow70,
      theme.colors.yellow60,
      theme.colors.yellow50,
      theme.colors.blue70,
      theme.colors.blue60,
      theme.colors.blue50,
      theme.colors.green70,
      theme.colors.green60,
      theme.colors.green50,
      theme.colors.darkblue70,
      theme.colors.darkblue50,
      theme.colors.darkblue30,
      theme.colors.grey80,
      theme.colors.grey70,
      theme.colors.grey40,
    ],
  },
  [ATTRIBUTE_KEY_MAP.hair]: {
    key: "hair",
    text: "Hair",
    values: Object.values(HAIR_MAP),
  },
  [ATTRIBUTE_KEY_MAP.accessories]: {
    key: "accessories",
    text: "Accessories",
    values: Object.values(ACCESSORIES_MAP),
  },
  [ATTRIBUTE_KEY_MAP.leg]: {
    key: "leg",
    text: "Leg",
    values: Object.values(LEG_MAP),
  },
  [ATTRIBUTE_KEY_MAP.eyes]: {
    key: "eyes",
    text: "Eyes",
    values: Object.values(EYES_MAP),
  },
  [ATTRIBUTE_KEY_MAP.mouth]: {
    key: "mouth",
    text: "Mouth",
    values: Object.values(MOUTH_MAP),
  },
  [ATTRIBUTE_KEY_MAP.ears]: {
    key: "ears",
    text: "Ears",
    values: Object.values(EARS_MAP),
  },
  [ATTRIBUTE_KEY_MAP.neck]: {
    key: "neck",
    text: "Neck",
    values: Object.values(NECK_MAP),
  },
};

export const ATTRIBUTES = [
  ATTRIBUTE_KEY_MAP.hair,
  ATTRIBUTE_KEY_MAP.ears,
  ATTRIBUTE_KEY_MAP.eyes,
  ATTRIBUTE_KEY_MAP.mouth,
  ATTRIBUTE_KEY_MAP.neck,
  ATTRIBUTE_KEY_MAP.leg,
  ATTRIBUTE_KEY_MAP.accessories,
  ATTRIBUTE_KEY_MAP.background,
];
