import { DefaultTheme } from 'styled-components';

const darktheme: DefaultTheme = {
  mainBackground: `#333`,

  color: `rgba(255,255,255,0.85)`,
  title: `rgba(255,255,255,0.85)`,
  primaryText: `rgba(255,255,255,0.65)`,
  secondaryText: `rgba(255,255,255,0.45)`,
  disable: `rgba(255,255,255,0.25)`,
  border: `rgba(255,255,255,0.15)`,
  divider: `rgba(255,255,255,0.06)`,
  background: `rgba(255,255,255,0.04)`,
  tableHeader: `rgba(255,255,255,0.02)`,
  oddBackground: `rgba(0, 0, 0, 0.85)`,
  response: {},
};

const lighttheme: DefaultTheme = {
  mainBackground: `#fff`,

  color: `rgba(0, 0, 0, 0.85)`,
  title: `rgba(0, 0, 0, 0.85)`,
  primaryText: `rgba(0, 0, 0, 0.75)`,
  secondaryText: `rgba(0, 0, 0, 0.45)`,
  disable: `rgba(0, 0, 0, 0.25)`,
  border: `rgba(0, 0, 0, 0.15)`,
  divider: `rgba(0, 0, 0, 0.06)`,
  background: `rgba(0, 0, 0, 0.04)`,
  tableHeader: `rgba(0, 0, 0, 0.02)`,
  oddBackground: `rgba(255,255,255,0.85)`,

  response: {},
};

export { darktheme, lighttheme };
