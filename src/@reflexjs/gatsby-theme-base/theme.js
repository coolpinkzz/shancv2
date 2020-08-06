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

  HW_badge_cont: {
    position: "absolute",
  },
  HW_badge: {
    background: "#5ab987",
  },
  HW_config: {
    selector: "H1", // CSS selector where to inject the badge
    account: "JlR9Gx",
  },
};
