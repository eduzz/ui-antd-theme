import { ReactNode, useMemo } from 'react';

import { App, ConfigProvider } from 'antd';
import type { ConfigProviderProps } from 'antd/es/config-provider';
import antdLocalePtBR from 'antd/locale/pt_BR';

import AppBinder from './App';
import createTheme, { BrandColor } from './createTheme';
import CssVariables from './CssVariables';

export interface ThemeProviderProps extends Omit<ConfigProviderProps, 'theme' | 'children' | 'componentSize'> {
  brandColor: BrandColor | `#${string}`;
  mode?: 'dark' | 'light';
  children: ReactNode;
}

const ThemeProvider = ({ brandColor, mode, children, ...configProps }: ThemeProviderProps) => {
  const theme = useMemo(() => {
    return createTheme(brandColor, mode ?? 'light');
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
