import NavItem from '@restart/ui/esm/NavItem';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { darkMode, lightMode } from '../../store/themeMode';
function Headers() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();
  return (
    <Navbar collapseOnSelect expand="md" bg={mode} variant={mode} sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2>박성무의 경력기술서</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              <strong>Home</strong>
            </Nav.Link>
            <Nav.Link as={Link} to="/modules">
              <strong>Modules</strong>
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Button
              variant={mode === 'dark' ? 'secondary' : 'dark'}
              onClick={() => {
                mode === 'dark' ? dispatch(lightMode()) : dispatch(darkMode());
              }}
            >
              {mode === 'dark' ? 'light' : 'dark'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headers;
