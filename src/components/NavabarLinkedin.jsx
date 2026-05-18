import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { useState } from "react";

const buttons = [
  { id: "home", label: "Home", icon: "bi-house-door-fill" },
  { id: "rete", label: "Rete", icon: "bi-people-fill" },
  { id: "lavoro", label: "Lavoro", icon: "bi-briefcase-fill" },
  { id: "messaggi", label: "Messaggistica", icon: "bi-chat-dots-fill" },
  { id: "notifiche", label: "Notifiche", icon: "bi bi-bell-fill" },
];

const NavbarLinkedin = function () {
  const [activeBtn, setActiveBtn] = useState("home");
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-linkedin">
      <Container fluid>
        <Navbar.Brand href="#home">
          <i className="bi bi-linkedin logo-linkedin"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <InputGroup className="me-sm-2 search-input-linkedin">
              <InputGroup.Text
                id="search-addon"
                className="bg-white border-end-0"
              >
                <i className="bi bi-search text-muted"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Cerca..."
                aria-label="Search"
                aria-describedby="search-addon"
                className="border-start-0 ps-0"
              />
            </InputGroup>
            {/* BOTTONI */}
            <div className="d-flex bg-white border-bottom px-3">
              {buttons.map((btn) => (
                <Button
                  key={btn.id}
                  variant="link"
                  className={`linkedin-nav-btn ${activeBtn === btn.id ? "active" : ""}`}
                  onClick={() => setActiveBtn(btn.id)}
                >
                  <i className={`bi ${btn.icon} linkedin-btn-icon`}></i>
                  <span className="linkedin-btn-text">{btn.label}</span>
                </Button>
              ))}
            </div>

            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarLinkedin;
