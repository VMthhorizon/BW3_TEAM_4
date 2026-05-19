import { useState } from "react";
import { Card, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";

const Formazione = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="mb-3 border-0 shadow-sm rounded-3">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold m-0">Formazione</h5>
            <div>
              <PlusLg
                className="me-3"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              />
              <Pencil style={{ cursor: "pointer" }} />
            </div>
          </div>

          <Row className="mb-3 align-items-center">
            <Col xs="auto">
              <img
                src="https://placehold.co/50x50"
                alt="logo"
                className="rounded"
              />
            </Col>
            <Col>
              <h6 className="fw-bold mb-0">Epicode</h6>
              <p className="mb-0 small">Full Stack Web Developer</p>
              <p className="text-muted small mb-0">2023 - 2024</p>
            </Col>
          </Row>

          <hr className="text-muted" />

          <Row className="align-items-center">
            <Col xs="auto">
              <img
                src="https://placehold.co/50x50"
                alt="logo"
                className="rounded"
              />
            </Col>
            <Col>
              <h6 className="fw-bold mb-0">
                Università degli Studi di Napoli Federico II
              </h6>
              <p className="mb-0 small">Laurea in Sociologia</p>
              <p className="text-muted small mb-0">2018 - 2022</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">Aggiungi formazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary small fw-bold">
                Scuola*
              </Form.Label>
              <Form.Control type="text" placeholder="Es: Università Bocconi" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary small fw-bold">
                Grado
              </Form.Label>
              <Form.Control type="text" placeholder="Es: Laurea Magistrale" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary small fw-bold">
                    Data di inizio
                  </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="text-secondary small fw-bold">
                    Data di fine (o prevista)
                  </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="text-secondary small fw-bold">
                Descrizione
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="rounded-pill px-4 fw-bold"
            onClick={handleClose}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Formazione;
