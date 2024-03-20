import { useMemo } from 'react';

import { theme } from 'antd';

import eduzzTokens from '@eduzz/ui-tokens';

import { BrandColor } from './createTheme';
import { hexToRgbVar } from './utils/hextToRgb';

export interface CssVariablesProps {
  brandColor: BrandColor | `#${string}`;
}

const CssVariables = ({ brandColor }: CssVariablesProps) => {
  const { token } = theme.useToken();

  const secondaryColor = useMemo(() => {
    return brandColor.startsWith('#') ? brandColor : eduzzTokens.brands[brandColor as BrandColor].secondary.pure;
  }, []);

  const cssVars = useMemo(
    () => `
      :root {
        --eduzz-theme-primary: ${token.colorPrimary};
        --eduzz-theme-primary-rgb: ${hexToRgbVar(token.colorPrimary) ?? '13, 38, 115'};
        --eduzz-theme-secondary: ${secondaryColor};
        --eduzz-theme-secondary-rgb: ${hexToRgbVar(secondaryColor)};

        --eduzz-ui-antd-theme-border-radius: ${token.borderRadius}px;
        --eduzz-ui-antd-theme-primary: ${token.colorPrimary};
        --eduzz-ui-antd-theme-primary-hover: ${token.colorPrimaryHover};
        --eduzz-ui-antd-theme-split-color: ${token.colorSplit};
        --eduzz-ui-antd-theme-bg-color: ${token.colorBgLayout};

        --eduzz-ui-antd-theme-background-color-1: ${hexToRgbVar(eduzzTokens.base.dark.background[1])};
        --eduzz-ui-antd-theme-background-color-2: ${hexToRgbVar(eduzzTokens.base.dark.background[2])};
        --eduzz-ui-antd-theme-background-color-3: ${hexToRgbVar(eduzzTokens.base.dark.background[3])};
        --eduzz-ui-antd-theme-background-color-4: ${hexToRgbVar(eduzzTokens.base.dark.background[4])};
    
        --eduzz-ui-antd-theme-outline-color-1: ${hexToRgbVar(eduzzTokens.base.dark.outline[1])};
        --eduzz-ui-antd-theme-outline-color-2: ${hexToRgbVar(eduzzTokens.base.dark.outline[2])};
        --eduzz-ui-antd-theme-outline-color-3: ${hexToRgbVar(eduzzTokens.base.dark.outline[3])};
    
        --eduzz-ui-antd-theme-content-color-1: ${hexToRgbVar(eduzzTokens.base.dark.content[1])};
        --eduzz-ui-antd-theme-content-color-2: ${hexToRgbVar(eduzzTokens.base.dark.content[2])};
        --eduzz-ui-antd-theme-content-color-3: ${hexToRgbVar(eduzzTokens.base.dark.content[3])};
        --eduzz-ui-antd-theme-content-color-4: ${hexToRgbVar(eduzzTokens.base.dark.content[4])};
        --eduzz-ui-antd-theme-content-color-5: ${hexToRgbVar(eduzzTokens.base.dark.content[5])};
        --eduzz-ui-antd-theme-content-color-6: ${hexToRgbVar(eduzzTokens.base.dark.content[6])};
      }
    
      body[data-eduzz-theme="dark"] {
        --eduzz-ui-antd-theme-background-color-1: ${hexToRgbVar(eduzzTokens.base.light.background[1])};
        --eduzz-ui-antd-theme-background-color-2: ${hexToRgbVar(eduzzTokens.base.light.background[2])};
        --eduzz-ui-antd-theme-background-color-3: ${hexToRgbVar(eduzzTokens.base.light.background[3])};
        --eduzz-ui-antd-theme-background-color-4: ${hexToRgbVar(eduzzTokens.base.light.background[4])};
    
        --eduzz-ui-antd-theme-outline-color-1: ${hexToRgbVar(eduzzTokens.base.light.outline[1])};
        --eduzz-ui-antd-theme-outline-color-2: ${hexToRgbVar(eduzzTokens.base.light.outline[2])};
        --eduzz-ui-antd-theme-outline-color-3: ${hexToRgbVar(eduzzTokens.base.light.outline[3])};
    
        --eduzz-ui-antd-theme-content-color-1: ${hexToRgbVar(eduzzTokens.base.light.content[1])};
        --eduzz-ui-antd-theme-content-color-2: ${hexToRgbVar(eduzzTokens.base.light.content[2])};
        --eduzz-ui-antd-theme-content-color-3: ${hexToRgbVar(eduzzTokens.base.light.content[3])};
        --eduzz-ui-antd-theme-content-color-4: ${hexToRgbVar(eduzzTokens.base.light.content[4])};
        --eduzz-ui-antd-theme-content-color-5: ${hexToRgbVar(eduzzTokens.base.light.content[5])};
        --eduzz-ui-antd-theme-content-color-6: ${hexToRgbVar(eduzzTokens.base.light.content[6])};
      }
    `,
    [token]
  );

  return <style>{cssVars}</style>;
};

export default CssVariables;
