import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBackground: string;
    // neutral color
    color: string;
    title: string;
    primaryText: string;
    secondaryText: string;
    disable: string;
    border: string;
    divider: string;
    background: string;
    tableHeader: string;

    response: {};
  }
}
