import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    accentColor: string;
    fontColor: string;
    placeholderColor: string;
    borderColor: string;
    inputColor: string;
    backgroundColor: string;
    linkColor: string;
    infoColor: string;
    errorColor: string;
  }
}
