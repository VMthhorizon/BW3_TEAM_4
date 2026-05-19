import { Card, Row, Col } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";

const Formazione = () => {
  return (
    <Card className="mb-3 border-0 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold m-0">Formazione</h5>
          <div>
            <PlusLg className="me-3" style={{ cursor: "pointer" }} />
            <Pencil style={{ cursor: "pointer" }} />
          </div>
        </div>

        <Row className="mb-3">
          <Col xs="auto">
            <img src="https://placehold.co/50x50" alt="logo" />
          </Col>
          <Col>
            <h6 className="fw-bold mb-0">Epicode</h6>
            <p className="mb-0 small">Full Stack Web Developer</p>
            <p className="text-muted small">2023 - 2024</p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs="auto">
            <img src="https://placehold.co/50x50" alt="logo" />
          </Col>
          <Col>
            <h6 className="fw-bold mb-0">
              Università degli Studi di Napoli Federico II
            </h6>
            <p className="mb-0 small">Laurea in Sociologia</p>
            <p className="text-muted small">2018 - 2022</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Formazione;
