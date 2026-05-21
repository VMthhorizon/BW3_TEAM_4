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
  Modal,
  Image,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProfilePersonaleAction from "../redux/actions/profileAction/profiloPersonal";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ChatboxMobile from "./ChatboxMobile";

const buttons = [
  { id: "home", label: "Home", icon: "bi-house-door-fill", navigate: "/home" },
  { id: "rete", label: "Rete", icon: "bi-people-fill" },
  {
    id: "lavoro",
    label: "Lavoro",
    icon: "bi-briefcase-fill",
    navigate: "/jobs",
  },
  { id: "messaggi", label: "Messaggistica", icon: "bi-chat-dots-fill" },
  { id: "notifiche", label: "Notifiche", icon: "bi bi-bell-fill" },
];

const NavbarLinkedin = function () {
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });
  const profili = useSelector((storeRedux) => {
    return storeRedux.profile.profiles;
  });
  const [searchQuery, setSearchQuery] = useState("");

  const profiliFiltrati = profili.filter((profilo) =>
    `${profilo.name} ${profilo.surname}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getProfilePersonaleAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [activeBtn, setActiveBtn] = useState("home");
  const profileDropdown = (
    <div className="d-flex flex-column align-items-center">
      <img
        src={profilo?.image}
        className="rounded-circle profile-img-nav"
        alt="Profilo"
      />
      <div className="profile-text-container">
        <span className="profile-text-nav">Tu</span>
      </div>
    </div>
  );
  const profile = (
    <div
      className="linkedin-profile-menu-container"
      style={{ width: "280px", padding: "8px 0", zIndex: "100" }}
    >
      <Container fluid className="px-3 pt-2 ">
        <Row className="align-items-start">
          <Col xs={3} className="pe-0">
            <img
              src={profilo?.image}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              alt="profilo"
            />
          </Col>
          <Col xs={9} className="ps-2 d-flex flex-column">
            <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: "16px" }}>
              {profilo?.name} {profilo?.surname}
            </h6>
            <p
              className="text-muted mb-0 mt-1"
              style={{
                fontSize: "13px",
                lineHeight: "1.4",
                whiteSpace: "normal",
              }}
            >
              {profilo?.bio}
            </p>
          </Col>
        </Row>
        <Row className="mt-3 g-2">
          <Col xs={6}>
            <Button
              variant="outline-primary"
              className="w-100 rounded-pill fw-bold py-1 btn-profile-custom"
              style={{ fontSize: "14px", whiteSpace: "wrap" }}
              onClick={() => {
                navigate("/me");
              }}
            >
              Visualizza profilo
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              variant="outline-primary"
              className="w-100 rounded-pill fw-bold py-1 btn-verify-custom"
              style={{ fontSize: "14px" }}
            >
              Verifica
            </Button>
          </Col>
        </Row>
      </Container>
      <NavDropdown.Divider className="my-3" />
      <div className="menu-section">
        <h6 className="px-3 fw-bold text-dark" style={{ fontSize: "14px" }}>
          Account
        </h6>
        <NavDropdown.Item
          href="#premium"
          className="py-2 d-flex align-items-center"
        >
          <span className="premium-mini-cube me-2"></span>
          <span
            className="fw-semibold text-secondary-subtle"
            style={{ fontSize: "13px", color: "#666" }}
          >
            Sblocca la tua prova gratuita di 1 mese
          </span>
        </NavDropdown.Item>

        <NavDropdown.Item
          href="#settings"
          className="py-2 text-muted"
          style={{ fontSize: "14px" }}
        >
          Impostazioni e privacy
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#help"
          className="py-2 text-muted"
          style={{ fontSize: "14px" }}
        >
          Guida
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#language"
          className="py-2 text-muted"
          style={{ fontSize: "14px" }}
        >
          Lingua
        </NavDropdown.Item>
      </div>

      <NavDropdown.Divider className="my-2" />
      <div className="menu-section">
        <h6 className="px-3 fw-bold text-dark" style={{ fontSize: "14px" }}>
          Gestisci
        </h6>
        <NavDropdown.Item
          href="#activity"
          className="py-2 text-muted"
          style={{ fontSize: "14px" }}
        >
          Post e attività
        </NavDropdown.Item>
        <NavDropdown.Item
          href="#job-posts"
          className="py-2 text-muted"
          style={{
            fontSize: "14px",
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          Account per la pubblicazione di off...
        </NavDropdown.Item>
      </div>
      <NavDropdown.Divider className="my-2" />
      <NavDropdown.Item
        href="#logout"
        className="py-2 text-muted"
        style={{ fontSize: "14px" }}
      >
        Esci
      </NavDropdown.Item>
    </div>
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
  const perleaziende = (
    <Container fluid className="p-3" style={{ width: "560px" }}>
      <Row>
        <Col xs={6} className="border-end pe-3">
          <h6 className="fw-bold mb-3 text-dark" style={{ fontSize: "15px" }}>
            Le mie app
          </h6>
          <div
            className="d-flex align-items-center mb-3"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-compass-fill text-primary me-2 fs-5"></i>
            <span
              className="fw-semibold text-secondary"
              style={{ fontSize: "14px" }}
            >
              Vendi
            </span>
          </div>
          <div
            className="d-flex align-items-center mb-4"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-people-fill text-primary me-2 fs-5"></i>
            <span
              className="fw-semibold text-secondary"
              style={{ fontSize: "14px" }}
            >
              Gruppi
            </span>
          </div>
          <div
            className="text-muted small fw-bold mb-2 text-uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.5px" }}
          >
            Talent
          </div>
          <div
            className="d-flex align-items-center mb-2"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-bar-chart-line-fill text-primary me-2 fs-5"></i>
            <span
              className="fw-semibold text-secondary"
              style={{ fontSize: "14px" }}
            >
              Talent Insights
            </span>
          </div>
          <div
            className="d-flex align-items-center mb-4"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-file-earmark-plus-fill text-primary me-2 fs-5"></i>
            <span
              className="fw-semibold text-secondary"
              style={{ fontSize: "14px" }}
            >
              Pubblica un'offerta di lavoro
            </span>
          </div>
          <div
            className="text-muted small fw-bold mb-2 text-uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.5px" }}
          >
            Vendite
          </div>
          <div
            className="d-flex align-items-center mb-4"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-shop text-primary me-2 fs-5"></i>
            <span
              className="fw-semibold text-secondary"
              style={{ fontSize: "14px" }}
            >
              Marketplace dei servizi
            </span>
          </div>
          <div
            className="text-muted small fw-bold mb-2 text-uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.5px" }}
          >
            Marketing
          </div>
          <div
            className="d-flex align-items-center mb-4"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-megaphone-fill text-primary me-2 fs-5"></i>
            <span
              className="fw-semibold text-secondary"
              style={{ fontSize: "14px" }}
            >
              Pubblicizza
            </span>
          </div>
          <div
            className="text-muted small fw-bold mb-2 text-uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.5px" }}
          >
            Learning
          </div>
          <div
            className="d-flex align-items-center mb-2"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-play-btn-fill text-primary me-2 fs-5"></i>
            <span
              className="fw-semibold text-secondary"
              style={{ fontSize: "14px" }}
            >
              Learning
            </span>
          </div>
        </Col>
        <Col xs={6} className="ps-3 d-flex flex-column justify-content-between">
          <div>
            <h6 className="fw-bold mb-3 text-dark" style={{ fontSize: "15px" }}>
              Scopri altro per il business
            </h6>
            <div className="mb-3" style={{ cursor: "pointer" }}>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ fontSize: "13.5px" }}
              >
                Assumi su LinkedIn
              </p>
              <span className="text-muted" style={{ fontSize: "11.5px" }}>
                Trova, attrai e assumi
              </span>
            </div>
            <div className="mb-3" style={{ cursor: "pointer" }}>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ fontSize: "13.5px" }}
              >
                Vendi con LinkedIn
              </p>
              <span className="text-muted" style={{ fontSize: "11.5px" }}>
                Sblocca nuove opportunità di vendita
              </span>
            </div>
            <div className="mb-3" style={{ cursor: "pointer" }}>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ fontSize: "13.5px" }}
              >
                Offerta di lavoro gratuita
              </p>
              <span className="text-muted" style={{ fontSize: "11.5px" }}>
                Ottieni rapidamente candidati qualificati
              </span>
            </div>
            <div className="mb-3" style={{ cursor: "pointer" }}>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ fontSize: "13.5px" }}
              >
                Fai pubblicità su LinkedIn
              </p>
              <span className="text-muted" style={{ fontSize: "11.5px" }}>
                Acquisisci clienti e fai crescere la tua azienda
              </span>
            </div>

            <div className="mb-3" style={{ cursor: "pointer" }}>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ fontSize: "13.5px" }}
              >
                Inizia con Premium
              </p>
              <span className="text-muted" style={{ fontSize: "11.5px" }}>
                Amplia e sfrutta la tua rete
              </span>
            </div>

            <div className="mb-3" style={{ cursor: "pointer" }}>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ fontSize: "13.5px" }}
              >
                Impara con LinkedIn
              </p>
              <span className="text-muted" style={{ fontSize: "11.5px" }}>
                Corsi per formare i tuoi dipendenti
              </span>
            </div>
            <div className="mb-3" style={{ cursor: "pointer" }}>
              <p
                className="mb-0 fw-bold text-dark"
                style={{ fontSize: "13.5px" }}
              >
                Centro per amministratori
              </p>
              <span className="text-muted" style={{ fontSize: "11.5px" }}>
                Gestisci i dettagli di fatturazione e account
              </span>
            </div>
          </div>
          <div
            className="mt-4 pt-3 d-flex align-items-center text-dark border-top"
            style={{ cursor: "pointer" }}
          >
            <span className="fw-bold small me-1" style={{ fontSize: "13.5px" }}>
              Crea una pagina aziendale
            </span>
            <i className="bi bi-plus-lg fw-bold"></i>
          </div>
        </Col>
      </Row>
    </Container>
  );

  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const handleClose = () => setShowPremiumModal(false);
  const handleShow = () => setShowPremiumModal(true);

  return (
    <Container
      fluid
      className="px-0 bg-white border-bottom border-2 border-body-tertiary sticky-navbar"
    >
      <Row>
        <Col xs={12} className="text-center justify-content-around p-0 ">
          <Navbar expand="lg" className=" navbar-linkedin rounded-2 py-0">
            <Container className="position-relative">
              <Link
                to="/me"
                className="profile-dropdown me-4 container-img d-lg-none"
                align="end"
              >
                <Image
                  roundedCircle
                  src={profilo?.image}
                  className="object-fit-cover image-container"
                />
              </Link>
              <Link to="/home" className="navbar.brand me-1">
                <i className="bi bi-linkedin logo-linkedin"></i>
              </Link>

              <InputGroup className="me-sm-2 w-50 search-input-linkedin">
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
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                  }}
                />
              </InputGroup>
              <div className="search-dropdown">
                {searchQuery &&
                  profiliFiltrati.slice(0, 6).map((profile) => (
                    <div
                      key={profile._id}
                      className="search-item d-flex align-items-center gap-2 p-2"
                      onClick={() => {
                        navigate(`/profile/${profile._id}`);
                        setSearchQuery("");
                      }}
                    >
                      <img
                        src={profile.image}
                        width={40}
                        height={40}
                        className="rounded-circle object-fit-cover"
                      />

                      <div>
                        <p className="mb-0 fw-bold">
                          {profile.name} {profile.surname}
                        </p>

                        <small className="text-muted">{profile.title}</small>
                      </div>
                    </div>
                  ))}
              </div>

              <ChatboxMobile isOpen={isOpen} setIsOpen={setIsOpen} />
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
              <Navbar.Collapse
                className="justify-content-end"
                id="basic-navbar-nav"
              >
                <Nav className="align-items-center">
                  {/* BOTTONI */}
                  <div className="d-none d-lg-flex bg-white ">
                    {buttons.map((btn) => (
                      <Button
                        key={btn.id}
                        variant="link"
                        className={`linkedin-nav-btn ${activeBtn === btn.id ? "active" : ""}`}
                        onClick={() => {
                          (setActiveBtn(btn.id), navigate(btn.navigate));
                        }}
                      >
                        <i className={`bi ${btn.icon} linkedin-btn-icon`}></i>
                        <span className="linkedin-btn-text">{btn.label}</span>
                      </Button>
                    ))}
                  </div>

                  <NavDropdown
                    title={profileDropdown}
                    className="profile-dropdown me-4"
                    align="end"
                  >
                    <NavDropdown.Item href="#action/3.1" className="rounded-0">
                      {profile}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={perleaziendeDropdown}
                    className="profile-dropdown border-start border-secondary ps-2 d-none d-lg-inline-block"
                    align="end"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      {perleaziende}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    as="button"
                    className="premium-nav-link d-flex flex-column align-items-center justify-content-center d-none d-lg-flex"
                    onClick={handleShow}
                  >
                    <div className="premium-icon-box">
                      <div className="premium-icon-diagonal"></div>
                    </div>
                    <span className="premium-text-nav">
                      Prova Premium per 0 €
                    </span>
                  </Nav.Link>
                  <Modal show={showPremiumModal} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        {profilo?.name}, metti il turbo alla tua carriera
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>
                        Accedi a tutte le funzionalità esclusive gratis per i
                        primi 30 giorni.
                      </p>
                      <p>Contatta chiunque con i messaggi InMail</p>
                      <p>Ottieni 11 volte più visualizzazioni del profilo</p>
                      <p>Accedi a informazioni esclusive sulle aziende</p>
                      <p>
                        Partecipa a conversazioni live con leader di settore
                      </p>
                    </Modal.Body>
                    <Modal.Footer className="text-center">
                      <Button variant="warning">
                        Prova un mese di premium per (0 €)
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Nav>
              </Navbar.Collapse>

              <div
                className="d-flex d-lg-none position-fixed bottom-0 start-0 w-100 bg-light justify-content-center"
                style={{ zIndex: "30000" }}
              >
                {buttons.map((btn) => (
                  <Button
                    key={btn.id}
                    variant="link"
                    className={`linkedin-nav-btn ${activeBtn === btn.id ? "active" : ""}`}
                    onClick={() => {
                      setActiveBtn(btn.id);
                      if (btn.id === "messaggi") {
                        setIsOpen(true);
                      } else if (btn.navigate) {
                        navigate(btn.navigate);
                        setIsOpen(false);
                      }
                    }}
                  >
                    <i className={`bi ${btn.icon} linkedin-btn-icon`}></i>
                    <span className="linkedin-btn-text">{btn.label}</span>
                  </Button>
                ))}
              </div>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};
export default NavbarLinkedin;
