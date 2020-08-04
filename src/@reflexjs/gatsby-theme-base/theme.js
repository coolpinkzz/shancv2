import base from "@reflexjs/preset-base";
import "typeface-open-sans";
import "typeface-noto-sans-sc";

export default {
  preset: base,
  // Overrides.

  colors: {
    primary: `#09f`,
  },
  fonts: {
    body: "noto sans sc",
    heading: "'Alegreya', serif",
    monospace: "Menlo, monospace",
  },
};
