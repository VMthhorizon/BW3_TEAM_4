import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";

const MyFooter = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer
      className="py-5 bg-transparent text-secondary mt-5"
      style={{ fontSize: "12px" }}
    >
      <Container style={{ maxWidth: "950px" }}>
        <Row className="mb-2">
          <Col xs={6} md={3}>
            <ul className="list-unstyled">
              <li className="mb-2">Informazioni</li>
              <li className="mb-2">Linee guida della community</li>

              <li className="mb-2">
                <Dropdown className="d-inline">
                  <Dropdown.Toggle
                    as="span"
                    className="p-0 border-0 bg-transparent text-secondary no-caret"
                    style={{ cursor: "pointer", fontSize: "12px" }}
                  >
                    Privacy e condizioni{" "}
                    <i
                      className="bi bi-caret-down-fill ms-1"
                      style={{ fontSize: "10px" }}
                    ></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="shadow-sm border-0 py-2"
                    style={{ fontSize: "12px" }}
                  >
                    <Dropdown.Item>Informativa sulla privacy</Dropdown.Item>
                    <Dropdown.Item>Contratto di licenza</Dropdown.Item>
                    <Dropdown.Item>Informativa sui cookie</Dropdown.Item>
                    <Dropdown.Item>Informativa sul copyright</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li className="mb-2">Sales Solutions</li>
              <li className="mb-2">Centro sicurezza</li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <ul className="list-unstyled">
              <li className="mb-2">Accessibilità</li>
              <li className="mb-2">Carriera</li>
              <li className="mb-2">Opzioni per gli annunci pubblicitari</li>
              <li className="mb-2">Mobile</li>
            </ul>
          </Col>

          <Col xs={6} md={3}>
            <ul className="list-unstyled">
              <li className="mb-2">Talent Solutions</li>
              <li className="mb-2">Soluzioni di marketing</li>
              <li className="mb-2">Pubblicità</li>
              <li className="mb-2">Piccole imprese</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <p className="mb-0 text-muted" style={{ cursor: "pointer" }}>
              LinkedIn Corporation <i className="bi bi-c-circle"></i>{" "}
              {getCurrentYear()}
            </p>
          </Col>
        </Row>

        <Row className="pt-3 align-items-start">
          <Col md={7}>
            <div className="d-flex mb-3 align-items-start">
              <i className="bi bi-question-circle-fill me-2 fs-5 text-dark"></i>
              <div style={{ lineHeight: "1.2" }}>
                <div className="fw-bold text-dark">Domande?</div>
                <div className="text-muted">
                  Visita il nostro Centro assistenza.
                </div>
              </div>
            </div>

            <div className="d-flex mb-3 align-items-start">
              <i className="bi bi-gear-fill me-2 fs-5 text-dark"></i>
              <div style={{ lineHeight: "1.2" }}>
                <div className="fw-bold text-dark">
                  Gestisci il tuo account e la tua privacy
                </div>
                <div className="text-muted">Vai alle impostazioni.</div>
              </div>
            </div>

            <div className="d-flex mb-3 align-items-start">
              <i className="bi bi-shield-shaded me-2 fs-5 text-dark"></i>
              <div style={{ lineHeight: "1.2" }}>
                <div className="fw-bold text-dark">
                  Trasparenza sui contenuti consigliati
                </div>
                <div className="text-muted">
                  Scopri di più sui contenuti consigliati.
                </div>
              </div>
            </div>
          </Col>

          <Col md={5} className="d-flex flex-column align-items-md-end">
            <div style={{ width: "280px" }}>
              <Form.Label className="mb-1 text-muted">
                Seleziona lingua
              </Form.Label>

              <Form.Select
                size="sm"
                className="bg-white border text-dark shadow-none"
                style={{
                  fontSize: "12px",
                  height: "32px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  borderColor: "#ddd",
                }}
              >
                <option>Italiano (Italiano)</option>
                <option>English (Inglese)</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .no-caret::after {
          display: none !important;
        }
      `}</style>
    </footer>
  );
};

export default MyFooter;
