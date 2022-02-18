import { DefaultTheme } from 'styled-components/native';

export type ColorScheme = 'light' | 'dark';
export type Theme = {
  [key in ColorScheme]: DefaultTheme;
};

const theme: Theme = {
  light: {
    accentColor: 'rgb(72, 52, 52)',
    fontColor: 'rgb(38, 38, 38)',
    placeholderColor: 'rgb(142, 142, 142)',
    borderColor: 'rgb(219,219,219)',
    inputColor: 'rgb(250, 250, 250)',
    backgroundColor: 'rgb(240, 236, 227)',
    linkColor: '#0095f6',
    infoColor: '#00b894',
    errorColor: 'rgb(237, 73, 86)',
  },
  dark: {
    accentColor: 'rgb(72, 52, 52)',
    fontColor: 'rgb(38, 38, 38)',
    placeholderColor: 'rgb(142, 142, 142)',
    borderColor: 'rgb(219,219,219)',
    inputColor: 'rgb(250, 250, 250)',
    backgroundColor: 'rgb(240, 236, 227)',
    linkColor: '#0095f6',
    infoColor: '#00b894',
    errorColor: 'rgb(237, 73, 86)',
  },
};

export const getTheme = (colorScheme: ColorScheme) => theme[colorScheme];
