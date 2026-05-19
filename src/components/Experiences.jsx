import { useState } from "react";
import { Card, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { PlusLg, Briefcase } from "react-bootstrap-icons";

const ExperienceSection = ({ experiences = [] }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="mb-3 border-0 shadow-sm rounded-3">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold m-0">Esperienze lavorative</h5>
            <PlusLg
              style={{ cursor: "pointer" }}
              onClick={() => setShow(true)}
            />
          </div>

          {experiences.map((exp, index) => (
            <div key={index}>
              <Row className="py-2">
                <Col xs="auto">
                  <Briefcase className="text-secondary fs-3" />
                </Col>
                <Col>
                  <h6 className="fw-bold mb-0">{exp.role}</h6>
                  <p className="mb-0 small">{exp.company}</p>
                  <p className="mb-0 small text-muted">
                    {exp.startDate} - {exp.endDate || "Presente"}
                  </p>
                  <p className="mt-2 small">{exp.description}</p>
                </Col>
              </Row>
              <hr />
            </div>
          ))}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 fw-bold">
            Aggiungi esperienza
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Qualifica*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Azienda*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Label className="small fw-bold">Data inizio</Form.Label>
                <Form.Control type="date" />
              </Col>
              <Col>
                <Form.Label className="small fw-bold">Data fine</Form.Label>
                <Form.Control type="date" />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="rounded-pill px-4 fw-bold"
            onClick={() => setShow(false)}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ExperienceSection;
