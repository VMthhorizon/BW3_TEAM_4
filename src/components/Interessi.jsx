import { Card, Nav, Row, Col } from "react-bootstrap";

const Interessi = () => {
  return (
    <Card className="mb-3 border-0 shadow-sm rounded-3">
      <Card.Body className="p-4">
        <h5 className="fw-bold mb-3">Interessi</h5>

        <Nav variant="underline" defaultActiveKey="aziende" className="mb-3">
          <Nav.Item>
            <Nav.Link
              eventKey="aziende"
              className="text-dark fw-bold border-primary"
            >
              Aziende
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="scuole" className="text-secondary">
              Scuole
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Row className="g-4">
          <Col xs={12} md={6}>
            <div className="d-flex align-items-center">
              <img
                src="https://placehold.co/60x60"
                alt="Apple"
                className="me-3"
                style={{ objectFit: "contain" }}
              />
              <div>
                <h6 className="fw-bold mb-0">Apple</h6>
                <p className="text-muted small mb-1">12.345.678 follower</p>
                <button className="btn btn-outline-secondary btn-sm rounded-pill fw-bold px-3">
                  <i className="bi bi-check2 me-1"></i> Già segui
                </button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="d-flex align-items-center">
              <img
                src="https://placehold.co/60x60"
                alt="Epicode"
                className="me-3"
                style={{ objectFit: "contain" }}
              />
              <div>
                <h6 className="fw-bold mb-0">Epicode</h6>
                <p className="text-muted small mb-1">50.000 follower</p>
                <button className="btn btn-outline-secondary btn-sm rounded-pill fw-bold px-3">
                  <i className="bi bi-check2 me-1"></i> Già segui
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>

      <Card.Footer
        className="bg-white text-center border-top py-3"
        style={{ cursor: "pointer" }}
      >
        <span className="fw-bold text-secondary">
          Mostra tutte le aziende &rarr;
        </span>
      </Card.Footer>
    </Card>
  );
};

export default Interessi;
