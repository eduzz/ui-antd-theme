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
      }
    `,
    [token]
  );

  return <style>{cssVars}</style>;
};

export default CssVariables;
