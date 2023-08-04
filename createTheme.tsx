import { theme } from 'antd';
import type { ThemeConfig as AntdThemeConfig } from 'antd/lib/config-provider/context';

import tokens from '@eduzz/ui-tokens';

export type BrandColor = keyof typeof tokens.brands;

export default function createTheme(
  primaryColor: BrandColor | `#${string}`,
  mode: 'dark' | 'light',
  motion: boolean
): AntdThemeConfig {
  return {
    algorithm: mode == 'dark' ? [theme.darkAlgorithm] : [],
    token: removeUndef({
      motion,
      colorPrimary: primaryColor.startsWith('#')
        ? primaryColor
        : tokens.brands[primaryColor as BrandColor].primary.pure,
      colorBgLayout: mode === 'light' ? '#fcfcfc' : undefined,
      colorBgTextHover: mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : undefined,
      fontFamily: tokens.font.family.base,
      fontSize: 16,
      borderRadius: 0
    })
  };
}

function removeUndef(theme: NonNullable<AntdThemeConfig['token']>): AntdThemeConfig['token'] {
  return Object.keys(theme).reduce(
    (acc, key) => {
      if ((theme as any)[key] === undefined) return acc;
      return { ...acc, [key]: (theme as any)[key] };
    },
    {} as typeof theme
  );
}
