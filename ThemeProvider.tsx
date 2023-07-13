import './style.css';

import { ReactNode, useEffect, useMemo, useState } from 'react';

import { App, ConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';
import antdLocalePtBR from 'antd/locale/pt_BR';

import { AppBinder } from '.';
import createTheme, { BrandColor } from './createTheme';
import CssReset from './CssReset';
import CssVariables from './CssVariables';

const mediaDark =
  typeof window !== 'undefined' && window?.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

export interface ThemeProviderProps extends Omit<ConfigProviderProps, 'theme' | 'children' | 'componentSize'> {
  brandColor: BrandColor | `#${string}`;
  mode?: 'dark' | 'light' | 'system';
  children: ReactNode;
  disableResetCss?: boolean;
  enableAnimation?: boolean;
}

const ThemeProvider = ({
  brandColor,
  mode: modeProp = 'light',
  enableAnimation,
  disableResetCss,
  children,
  ...configProps
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    if (modeProp !== 'system') {
      return modeProp;
    }

    return mediaDark?.matches ? 'dark' : 'light';
  });

  const theme = useMemo(() => {
    document.body.classList.remove('eduzz-ui-disable-animation', 'eduzz-ui-light-theme', 'eduzz-ui-dark-theme');
    document.body.classList.add(`eduzz-ui-${mode}-theme`);
    !enableAnimation && document.body.classList.add('eduzz-ui-disable-animation');

    return createTheme(brandColor, mode ?? 'light', enableAnimation ?? false);
  }, [mode, brandColor, enableAnimation]);

  useEffect(() => {
    if (modeProp !== 'system') return setMode(modeProp ?? 'light');
    if (!mediaDark) return setMode('light');

    const listner = (event: MediaQueryListEvent) => setMode(() => (event.matches ? 'dark' : 'light'));
    mediaDark.addEventListener('change', listner);
    return () => mediaDark.removeEventListener('change', listner);
  }, [modeProp]);

  return (
    <ConfigProvider theme={theme} componentSize='large' locale={antdLocalePtBR} {...configProps}>
      <App>
        <AppBinder />
        {!disableResetCss && <CssReset />}
        <CssVariables brandColor={brandColor} />
        {children}
      </App>
    </ConfigProvider>
  );
};

export default ThemeProvider;
