import styled, { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/layout/Headers';
import { darktheme, lighttheme } from './style/theme';
import GlobalStyle from './style/global-style';
import { useAppSelector } from './store/hooks';
import { Container } from 'react-bootstrap';
import ControlRoute from './router';
import Footer from './components/layout/Footer';
const MyContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.color};
  position: relative;
  min-height: 100vh;
  display: grid;
  // align-content: space-between;
  grid-template-rows: 1fr 12fr;
`;
const Main = styled.div`
  padding-top: 1em;
  min-height: 100%;
`;

function App() {
  const mode = useAppSelector((state) => state.theme.mode);
  return (
    <ThemeProvider theme={mode === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />
      <MyContainer>
        <header>
          <Headers></Headers>
        </header>
        <main>
          <Main>
            <Container fluid="md">
              <ControlRoute></ControlRoute>
            </Container>
          </Main>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </MyContainer>
    </ThemeProvider>
  );
}

export default App;
