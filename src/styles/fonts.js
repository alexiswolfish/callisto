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

export const uiCaps = {
  fontFamily: uiFontFamily,
  fontSize: "12px",
  letterSpacing: "0.1em",
  fontWeight: "bold",
  textTransform: "uppercase",
};

export const uiBody = {
  fontFamily: uiFontFamily,
  fontSize: "15px",
  lineHeight: "1.4em",
  letterSpacing: "0.73px",
};
