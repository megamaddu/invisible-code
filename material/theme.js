import { condensed as theme } from "mdx-deck/themes";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";
import haskell from "react-syntax-highlighter/languages/prism/haskell";
import csharp from "react-syntax-highlighter/languages/prism/csharp";

export default {
  ...theme,
  fontFamily: "Ubuntu, Roboto, sans-serif",
  h1        : {
    textTransform: "none"
  },
  prism: {
    style    : okaidia,
    languages: {
      haskell,
      csharp
    }
  }
};
