import './style.css';

import { ReactNode, useEffect, useMemo, useState } from 'react';

import { App, ConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';
import antdLocalePtBR from 'antd/locale/pt_BR';

import { AppBinder } from '.';
import createTheme, { BrandColor } from './createTheme';
import CssVariables from './CssVariables';

const mediaDark =
  typeof window !== 'undefined' && window?.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

export interface ThemeProviderProps extends Omit<ConfigProviderProps, 'theme' | 'children' | 'componentSize'> {
  brandColor: BrandColor | `#${string}`;
  brandColorDark?: BrandColor | `#${string}`;
  mode?: 'dark' | 'light' | 'system';
  children: ReactNode;
  enableAnimation?: boolean;
}

const ThemeProvider = ({
  brandColor,
  brandColorDark,
  mode: modeProp = 'light',
  enableAnimation,
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

    return createTheme(
      mode === 'light' ? brandColor : brandColorDark ?? '#eab208',
      mode ?? 'light',
      enableAnimation ?? false
    );
  }, [mode, brandColor, enableAnimation]);

  useEffect(() => {
    if (modeProp !== 'system') return setMode(modeProp ?? 'light');
    if (!mediaDark) return setMode('light');

    const listener = (event: MediaQueryListEvent) => setMode(() => (event.matches ? 'dark' : 'light'));
    mediaDark.addEventListener('change', listener);
    return () => mediaDark.removeEventListener('change', listener);
  }, [modeProp]);

  useEffect(() => {
    const themeChangeObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName !== 'data-eduzz-theme') {
          return;
        }

        const attributes = (mutation.target as HTMLElement).attributes;
        const currentTheme = attributes.getNamedItem('data-eduzz-theme')?.value as 'light' | 'dark';

        setMode(currentTheme ?? 'light');
      });
    });

    themeChangeObserver.observe(document.body, { attributes: true });
    return () => themeChangeObserver.disconnect();
  }, []);

  return (
    <ConfigProvider theme={theme} componentSize='large' locale={antdLocalePtBR} {...configProps}>
      <App>
        <AppBinder />
        <CssVariables brandColor={brandColor} />
        {children}
      </App>
    </ConfigProvider>
  );
};

export default ThemeProvider;
