import { condensed as theme } from "mdx-deck/themes";
import haskell from "react-syntax-highlighter/languages/prism/haskell";
import csharp from "react-syntax-highlighter/languages/prism/csharp";

export default {
  ...theme,
  fontFamily: "Ubuntu, Roboto, sans-serif",
  h1: {
    textTransform: "none"
  },
  prism: {
    languages: {
      haskell,
      csharp
    }
  }
};
