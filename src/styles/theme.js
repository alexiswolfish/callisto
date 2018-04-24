const transparentWhite = (alpha: number) => {
  return `rgba(255, 255, 255, ${alpha})`;
};

const blue = "rgba(56, 92, 108, 1)";
const blueDesat = "rgba(70, 77, 85, 1)";
const blueDarker = "rgba(37, 37, 55, 1)";
const blueDarkest = "rgba(26, 26, 30, 1)";

const taupe = "rgba(184, 169, 163, 1)";
const taupeLighter = "rgba(184, 169, 163, 0.3)";
const grey = "#E1E1E1";

/**
 * Maps color to useage for flexibility
 **/
export const DarkTheme = {
  color: {
    text: {
      lighter: transparentWhite(0.7),
      normal: transparentWhite(0.8),
      dark: transparentWhite(1),
    },
    accent: {
      normal: taupe,
      light: taupeLighter,
    },
    button: {
      fill: transparentWhite(1),
      hover: transparentWhite(1),
      text: blueDarker,
    },
    background: blueDesat,
    border: {
      normal: transparentWhite(1),
      accent: taupe,
      neutral: grey,
    },
  },
};

export const LightTheme = {
  color: {
    text: { lighter: blueDesat, normal: blueDarker, dark: blueDarkest },
    accent: { normal: taupe, light: taupeLighter },
    button: { fill: blue, hover: blue, text: transparentWhite(0.9) },
    background: transparentWhite(1),
    border: { normal: taupe, accent: taupe, neutral: grey },
  },
};
