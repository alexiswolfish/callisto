/**
 * Useful helper classes for combining with
 * component rules
 */

export const flexCenter = { display: "flex", alignItems: "center" };
export const flexEnd = { display: "flex", alignItems: "flex-end" };
export const flexStretch = { display: "flex", alignItems: "stretch" };
export const flexColumn = {
  display: "flex",
  flexDirection: "column",
};
export const flexColumnCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
export const flexColumnEnd = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
};

export const container = theme => {
  return {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    boxSizing: "border-box",
    color: theme.color.text.normal,
  };
};
