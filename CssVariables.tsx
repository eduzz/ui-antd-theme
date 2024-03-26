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

        --eduzz-ui-antd-theme-surface-subtle: ${hexToRgbVar(eduzzTokens.base.light.surface.subtle)};
        --eduzz-ui-antd-theme-surface-default: ${hexToRgbVar(eduzzTokens.base.light.surface.default)};
        --eduzz-ui-antd-theme-surface-disabled: ${hexToRgbVar(eduzzTokens.base.light.surface.disabled)};
    
        --eduzz-ui-antd-theme-outline-default: ${hexToRgbVar(eduzzTokens.base.light.outline.default)};
        --eduzz-ui-antd-theme-outline-disabled: ${hexToRgbVar(eduzzTokens.base.light.outline.disabled)};
        --eduzz-ui-antd-theme-outline-darker: ${hexToRgbVar(eduzzTokens.base.light.outline.darker)};
    
        --eduzz-ui-antd-theme-content-title: ${hexToRgbVar(eduzzTokens.base.light.content.title)};
        --eduzz-ui-antd-theme-content-body: ${hexToRgbVar(eduzzTokens.base.light.content.body)};
        --eduzz-ui-antd-theme-content-subtitle: ${hexToRgbVar(eduzzTokens.base.light.content.subtitle)};
        --eduzz-ui-antd-theme-content-caption: ${hexToRgbVar(eduzzTokens.base.light.content.caption)};
        --eduzz-ui-antd-theme-content-negative: ${hexToRgbVar(eduzzTokens.base.light.content.negative)};
        --eduzz-ui-antd-theme-content-disabled: ${hexToRgbVar(eduzzTokens.base.light.content.disabled)};
      }
    
      body[data-eduzz-theme="dark"] {
        --eduzz-ui-antd-theme-surface-subtle: ${hexToRgbVar(eduzzTokens.base.dark.surface.subtle)};
        --eduzz-ui-antd-theme-surface-default: ${hexToRgbVar(eduzzTokens.base.dark.surface.default)};
        --eduzz-ui-antd-theme-surface-disabled: ${hexToRgbVar(eduzzTokens.base.dark.surface.disabled)};
    
        --eduzz-ui-antd-theme-outline-default: ${hexToRgbVar(eduzzTokens.base.dark.outline.default)};
        --eduzz-ui-antd-theme-outline-disabled: ${hexToRgbVar(eduzzTokens.base.dark.outline.disabled)};
        --eduzz-ui-antd-theme-outline-darker: ${hexToRgbVar(eduzzTokens.base.dark.outline.darker)};
    
        --eduzz-ui-antd-theme-content-title: ${hexToRgbVar(eduzzTokens.base.dark.content.title)};
        --eduzz-ui-antd-theme-content-body: ${hexToRgbVar(eduzzTokens.base.dark.content.body)};
        --eduzz-ui-antd-theme-content-subtitle: ${hexToRgbVar(eduzzTokens.base.dark.content.subtitle)};
        --eduzz-ui-antd-theme-content-caption: ${hexToRgbVar(eduzzTokens.base.dark.content.caption)};
        --eduzz-ui-antd-theme-content-negative: ${hexToRgbVar(eduzzTokens.base.dark.content.negative)};
        --eduzz-ui-antd-theme-content-disabled: ${hexToRgbVar(eduzzTokens.base.dark.content.disabled)};
      }
    `,
    [token]
  );

  return <style>{cssVars}</style>;
};

export default CssVariables;
