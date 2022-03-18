import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { darkMode, lightMode } from "../../store/themeMode";
const HeaderForm = styled.div`
  font-weight: bolder;
`;
function Headers() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();
  return (
    <HeaderForm>
      <Navbar
        collapseOnSelect
        expand="md"
        bg={mode}
        variant={mode}
        sticky="top"
      >
        <Container style={{ fontWeight: "bolder" }}>
          <Navbar.Brand as={Link} to="/">
            <h2>
              <b>박성무의 경력기술서</b>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/userlog">
                <strong>profile</strong>
              </Nav.Link>

              <Nav.Link as={Link} to="/userlog"></Nav.Link>
              <NavDropdown title="skill" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/skill/1">
                  COVID-19
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/skill/2">
                  Lotto
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link as={Link} to="/selfintroduce">
                <strong>self-introduction</strong>
              </Nav.Link> */}
              {/* <Nav.Link as={Link} to="/userlog">
                <strong>etc</strong>
              </Nav.Link> */}
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
                variant={mode === "dark" ? "secondary" : "dark"}
                onClick={() => {
                  mode === "dark"
                    ? dispatch(lightMode())
                    : dispatch(darkMode());
                }}
              >
                {mode === "dark" ? "light" : "dark"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderForm>
  );
}

export default Headers;
