import './style.css';

import * as appBinder from './App';
import ThemeProviderComponent from './ThemeProvider';

export const ThemeProvider = ThemeProviderComponent;
export const notification = appBinder.notification;
export const message = appBinder.message;
export const modal = appBinder.modal;
