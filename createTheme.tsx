import { theme } from 'antd';
import type { ThemeConfig as AntdThemeConfig } from 'antd/lib/config-provider/context';

import tokens from '@eduzz/ui-tokens';

export type BrandColor = keyof typeof tokens.brands;

export default function createTheme(
  primaryColor: BrandColor | `#${string}`,
  mode: 'dark' | 'light',
  motion: boolean
): AntdThemeConfig {
  const token = removeUndef({
    ...theme.defaultSeed,
    motion,
    colorPrimary: primaryColor.startsWith('#') ? primaryColor : tokens.brands[primaryColor as BrandColor].primary.pure,
    colorBgLayout: mode === 'light' ? tokens.base.light.surface.subtle : tokens.base.dark.surface.subtle,
    colorBgTextHover: mode === 'light' ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.06)',
    fontFamily: tokens.font.family.base,
    fontSize: 16,
    borderRadius: 0
  });

  const customDarkAlgorithm = () => {
    const currentDarkAlgorithm = theme.darkAlgorithm(token as any);
    currentDarkAlgorithm.colorPrimary = primaryColor;
    return currentDarkAlgorithm;
  };

  return {
    algorithm: mode == 'dark' ? [customDarkAlgorithm] : [],
    token
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
