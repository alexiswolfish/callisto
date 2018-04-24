/**
 * Master list of font classes.
 * Normally you'd bake these into design system components
 * but for the sake of time, we'll declare them here as a const.
 */

// helper to join the font family strings, accounts for font names with spaces
const fontFamily = (...fonts): string => {
  return fonts
    .map(font => (font.indexOf(" ") === -1 ? font : `"${font}"`))
    .join(", ");
};

export const displaySerifFontFamily = fontFamily(
  "Playfair Display",
  "Georgia",
  "Cambria",
  "Times New Roamn",
  "serif",
);

export const accentFontFamily = fontFamily(
  "Oswald",
  "Lucida Grande",
  "Lucida Sans Unicode",
  "Geneva",
  "Arial",
  "sans-serif",
);

export const uiFontFamily = fontFamily(
  "Montserrat",
  "-apple-system",
  "Roboto",
  "Oxygen",
  "Helvetica Neue",
  "sans-serif",
);

const fontSize_smallest = "12px";
const fontSize_smaller = "13px";
const fontSize_small = "14px";
const fontSize_normal = "15px";
const fontSize_large = "24px";
const fontSize_larger = "32px";
const fontSize_largest = "57px";
const fontSize_jumbo = "240px";

// There's too many sizes for a proper scale hah
const fontSize_h4 = "28px";

export const uiCaps = {
  fontFamily: uiFontFamily,
  fontSize: fontSize_smallest,
  letterSpacing: "0.1em",
  fontWeight: "bold",
  textTransform: "uppercase",
};

export const uiCaption = {
  fontFamily: uiFontFamily,
  fontSize: fontSize_smaller,
  lineHeight: "1.2em",
  letterSpacing: "0.06em",
};

export const uiBody = {
  fontFamily: uiFontFamily,
  fontSize: fontSize_normal,
  lineHeight: "1.5em",
  letterSpacing: "0.03em",
  fontWeight: 400,
};

// ideally consolidate with uiBody, too similar
// to be discrete
export const uiBody2 = {
  fontFamily: uiFontFamily,
  fontSize: fontSize_small,
  lineHeight: "1.6em",
  letterSpacing: "0em",
  fontWeight: 400,
};

export const uiLight = {
  fontFamily: uiFontFamily,
  fontSize: fontSize_small,
  fontWeight: 300,
  letterSpacing: "0.03em",
};

export const accentItalic = theme => {
  return {
    fontFamily: accentFontFamily,
    fontSize: fontSize_large,
    lineHeight: "1.3em",
    fontStyle: "italic",
    color: theme.color.text.dark,
    fontWeight: 300,
  };
};

export const accentJumbo = theme => {
  return {
    fontFamily: displaySerifFontFamily,
    fontSize: fontSize_jumbo,
    letterSpacing: "0.04em",
    lineHeight: "190px",
    color: theme.color.accent.light,
    fontWeight: 300,
    "@media (max-width: 1024px)": {
      fontSize: "100px",
    },
  };
};

export const h1 = theme => {
  return {
    fontFamily: displaySerifFontFamily,
    fontSize: fontSize_largest,
    letterSpacing: "0.01em",
    lineHeight: "1.3em",
    fontWeight: 900,
    color: theme.color.text.dark,
  };
};

export const h2 = theme => {
  return {
    fontFamily: displaySerifFontFamily,
    fontSize: fontSize_largest,
    letterSpacing: "0.01em",
    lineHeight: "1.3em",
    fontWeight: 700,
    "@media (max-width: 768px)": {
      fontSize: fontSize_larger,
    },
  };
};

export const h3 = theme => {
  return {
    fontFamily: accentFontFamily,
    fontSize: fontSize_larger,
    letterSpacing: "0.01em",
    lineHeight: "1.3em",
    fontWeight: 400,
    color: theme.color.text.dark,
  };
};

export const h4 = theme => {
  return {
    fontFamily: uiFontFamily,
    fontSize: fontSize_h4,
    letterSpacing: "0.03em",
    fontWeight: 300,
  };
};

// Colors are set to text.normal by default by
// the container rule. Override specific styles
export const accentColorRule = theme => {
  return { color: theme.color.accent.normal };
};
