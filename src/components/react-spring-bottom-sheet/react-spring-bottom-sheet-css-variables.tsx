const props: Record<string, string> = defaults.customProperties;

import { Global, css } from "@emotion/react";
import defaults from "react-spring-bottom-sheet/defaults.json";

export const ReactSpringBottomSheetCSSVariables = () => (
  <Global
    styles={css`
      :root {
        ${Object.keys(props).map<string>((key: string) => {
          const value = props[key];
          return value ? `${key}: ${value}};` : "";
        })};

        --rsbs-antigap-scale-y: 0;
        --rsbs-backdrop-bg: rgba(0, 0, 0, 0.6);
        --rsbs-backdrop-opacity: 1;
        --rsbs-bg: #fff;
        --rsbs-content-opacity: 1;
        --rsbs-handle-bg: hsla(0, 0%, 0%, 0.14);
        --rsbs-max-w: 20rem;
        --rsbs-ml: env(safe-area-inset-left);
        --rsbs-mr: env(safe-area-inset-right);
        --rsbs-overlay-h: 0px;
        --rsbs-overlay-rounded: 16px;
        --rsbs-overlay-translate-y: 0px;
      }
    `}
  />
);
