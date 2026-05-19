import { Nav, Row, Col } from "react-bootstrap";
import { Check2 } from "react-bootstrap-icons";

const Interessi = () => {
  return (
    <div className="sidebar-card mb-3">
      <div className="sidebar-card-content">
        <h5 className="mb-3">Interessi</h5>

        <Nav
          variant="underline"
          defaultActiveKey="aziende"
          className="mb-3 border-bottom"
        >
          <Nav.Item>
            <Nav.Link
              eventKey="aziende"
              className="text-dark fw-bold p-2"
              style={{ fontSize: "14px" }}
            >
              Aziende
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="scuole"
              className="text-secondary p-2"
              style={{ fontSize: "14px" }}
            >
              Scuole
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Row className="g-4">
          {/* Azienda 1 */}
          <Col xs={12} md={6}>
            <div className="sidebar-item mt-0">
              <div className="flex-shrink-0">
                <img
                  src="https://placehold.co/60x60"
                  alt="Apple"
                  className="rounded"
                />
              </div>
              <div className="sidebar-content">
                <h6 className="fw-bold mb-0" style={{ fontSize: "14px" }}>
                  Apple
                </h6>
                <p className="mb-1">12.345.678 follower</p>

                <button className="d-flex align-items-center gap-1">
                  <Check2 size={16} /> Già segui
                </button>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="sidebar-item mt-0">
              <div className="flex-shrink-0">
                <img
                  src="https://placehold.co/60x60"
                  alt="Epicode"
                  className="rounded"
                />
              </div>
              <div className="sidebar-content">
                <h6 className="fw-bold mb-0" style={{ fontSize: "14px" }}>
                  Epicode
                </h6>
                <p className="mb-1">50.000 follower</p>
                <button className="d-flex align-items-center gap-1">
                  <Check2 size={16} /> Già segui
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="show-all">Mostra tutte le aziende &rarr;</div>
    </div>
  );
};

export default Interessi;
