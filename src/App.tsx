import styled, { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/layout/Headers';
import { darktheme, lighttheme } from './style/theme';
import GlobalStyle from './style/global-style';
import { useAppSelector } from './store/hooks';
import { Col, Row, Container } from 'react-bootstrap';
const MyContainer = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.color};
  height: 100%;
`;
const Main = styled.div`
  height: 100%;
`;

function App() {
  const mode = useAppSelector((state) => state.theme.mode);
  return (
    <ThemeProvider theme={mode === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />
      <MyContainer>
        <Headers></Headers>
        <Container fluid="md">
          <Row>
            <Col md={'auto'}>
              <Main>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
                <h2>main</h2>
              </Main>
            </Col>
          </Row>
        </Container>
      </MyContainer>
    </ThemeProvider>
  );
}

export default App;
