import styled, { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/layout/Headers';
import { darktheme, lighttheme } from './style/theme';
import GlobalStyle from './style/global-style';
import { useAppSelector } from './store/hooks';
import ControlRoute from './router';
import Footer from './components/layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
const MyContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.color};
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Main = styled.div`
  min-height: 100%;
  margin-bottom: 2em;
`;

function App() {
  const mode = useAppSelector((state) => state.theme.mode);
  return (
    <ThemeProvider theme={mode === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />
      <MyContainer>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <header>
            <Headers></Headers>
          </header>
          <main>
            <Main>
              <ControlRoute></ControlRoute>
            </Main>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </BrowserRouter>
      </MyContainer>
    </ThemeProvider>
  );
}

export default App;
