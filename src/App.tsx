import styled, { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/layout/Headers';
import Main from './components/layout/Main';
import { darktheme, lighttheme } from './style/theme';
import GlobalStyle from './style/global-style';
import { useAppSelector } from './store/hooks';
const Container = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.color};
`;

function App() {
  const mode = useAppSelector((state) => state.theme.mode);
  return (
    <ThemeProvider theme={mode === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />
      <Container>
        <Headers></Headers>
        <Main></Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
