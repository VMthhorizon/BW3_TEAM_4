import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  InputGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProfilePersonaleAction from "../redux/actions/profiloPersonal";

const buttons = [
  { id: "home", label: "Home", icon: "bi-house-door-fill" },
  { id: "rete", label: "Rete", icon: "bi-people-fill" },
  { id: "lavoro", label: "Lavoro", icon: "bi-briefcase-fill" },
  { id: "messaggi", label: "Messaggistica", icon: "bi-chat-dots-fill" },
  { id: "notifiche", label: "Notifiche", icon: "bi bi-bell-fill" },
];

const NavbarLinkedin = function () {
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfilePersonaleAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [activeBtn, setActiveBtn] = useState("home");
  const profileDropdown = (
    <div className="d-flex flex-column align-items-center">
      <img
        src={profilo.image}
        className="rounded-circle profile-img-nav"
        alt="Profilo"
      />
      <div className="profile-text-container">
        <span className="profile-text-nav">Tu</span>
      </div>
    </div>
  );
  const profile = (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <img
            src={profilo.image}
            style={{ width: "40px", height: "40px" }}
            alt="profilo"
          />
        </Col>
        <Col xs={10} className="d-flex flex-column">
          <h5>
            {profilo.name}
            {profilo.surname}
          </h5>
        </Col>
      </Row>
    </Container>
  );
  const perleaziendeDropdown = (
    <div className="d-flex flex-column align-items-center">
      <i
        className="bi bi-grid-3x3-gap-fill"
        style={{ width: "27px", height: "27px" }}
      ></i>
      <div className="profile-text-container">
        <span className="profile-text-nav">Per le aziende</span>
      </div>
    </div>
  );

  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center justify-content-around">
          <Navbar expand="lg" className="bg-white navbar-linkedin">
            <Container>
              <Navbar.Brand href="#home">
                <i className="bi bi-linkedin logo-linkedin"></i>
              </Navbar.Brand>
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
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="align-items-center">
                  {/* BOTTONI */}
                  <div className="d-flex bg-white">
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
                  <NavDropdown
                    title={profileDropdown}
                    className="profile-dropdown me-4"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      {profile}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={perleaziendeDropdown}
                    className="profile-dropdown border-start border-secondary ps-2 "
                  >
                    <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    href="#premium"
                    className="premium-nav-link d-flex flex-column align-items-center justify-content-center"
                  >
                    <div className="premium-icon-box">
                      <div className="premium-icon-diagonal"></div>
                    </div>
                    <span className="premium-text-nav">
                      Prova Premium per 0 €
                    </span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};
export default NavbarLinkedin;
