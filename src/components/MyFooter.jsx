import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import {
  QuestionCircleFill,
  GearFill,
  ShieldShaded,
  CCircle,
  CaretDownFill,
} from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <footer
      className="py-5 bg-light text-secondary w-100"
      style={{ fontSize: "12px" }}
    >
      <Container>
        <Row className="mb-4">
          <Col md={2} xs={6} className="mb-3">
            <ul className="list-unstyled fw-bold">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Informazioni
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Linee guida della comunità
                </a>
              </li>
              <li className="mb-2">
                <Dropdown drop="up">
                  <style>
                    {`
        .custom-toggle::after {
          display: none !important;
        }
      `}
                  </style>

                  <Dropdown.Toggle
                    as="div"
                    role="button"
                    className="p-0 text-reset text-decoration-none fw-bold border-0 d-flex align-items-center custom-toggle"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                  >
                    Privacy e condizioni
                    <CaretDownFill size={10} className="ms-1 text-muted" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="shadow-sm border-0 p-2"
                    style={{ fontSize: "12px", minWidth: "200px" }}
                  >
                    <Dropdown.Item
                      href="#"
                      className="py-2 text-secondary text-decoration-none"
                    >
                      Informativa sulla privacy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="py-2 text-secondary text-decoration-none"
                    >
                      Contratto di licenza
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="py-2 text-secondary text-decoration-none"
                    >
                      Informativa sui cookie
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      className="py-2 text-secondary text-decoration-none"
                    >
                      Informativa sul copyright
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Sales Solutions
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Centro sicurezza
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-3">
            <ul className="list-unstyled fw-bold">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Accessibilità
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Carriera
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Opzioni per gli annunci
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Mobile
                </a>
              </li>
            </ul>
          </Col>

          <Col md={2} xs={6} className="mb-3">
            <ul className="list-unstyled fw-bold">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Talent Solutions
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Soluzioni di marketing
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Pubblicità
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-reset text-decoration-none text-nowrap"
                >
                  Piccole imprese
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="mb-4">
              <p className="mb-0 text-muted" style={{ cursor: "pointer" }}>
                LinkedIn Corporation <CCircle size={10} className="mx-1" />{" "}
                {new Date().getFullYear()}
              </p>
            </div>

            <div className="d-flex flex-column flex-md-row align-items-start gap-5">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-start">
                  <QuestionCircleFill
                    className="me-2 mt-1 text-dark"
                    size={20}
                  />
                  <div>
                    <a
                      href="#"
                      className="text-reset text-decoration-none fw-bold d-block"
                      style={{ fontSize: "14px" }}
                    >
                      Domande?
                    </a>
                    <span className="text-muted">
                      Visita il nostro Centro assistenza.
                    </span>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <GearFill className="me-2 mt-1 text-dark" size={20} />
                  <div>
                    <a
                      href="#"
                      className="text-reset text-decoration-none fw-bold d-block"
                      style={{ fontSize: "14px" }}
                    >
                      Gestisci il tuo account e la tua privacy
                    </a>
                    <span className="text-muted">Vai alle impostazioni.</span>
                  </div>
                </div>

                <div className="d-flex align-items-start">
                  <ShieldShaded className="me-2 mt-1 text-dark" size={20} />
                  <div>
                    <a
                      href="#"
                      className="text-reset text-decoration-none fw-bold d-block"
                      style={{ fontSize: "14px" }}
                    >
                      Trasparenza sui contenuti consigliati
                    </a>
                    <span className="text-muted">
                      Scopri di più sui contenuti consigliati.
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ minWidth: "280px" }}>
                <Form.Label
                  className="mb-1 text-muted d-block"
                  style={{ fontSize: "12px" }}
                >
                  Seleziona lingua
                </Form.Label>
                <Form.Select
                  size="sm"
                  className="bg-transparent border-secondary text-secondary shadow-none"
                  style={{ cursor: "pointer", fontSize: "13px" }}
                >
                  <option value="it">Italiano (Italiano)</option>
                  <option value="en">English (Inglese)</option>
                </Form.Select>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
