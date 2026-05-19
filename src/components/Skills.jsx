import { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";

const SkillsSection = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="shadow-sm mb-3 rounded-3 border-0">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold m-0">Competenze</h5>
            <div className="d-flex gap-3 align-items-center">
              <PlusLg
                className="fs-4 text-secondary"
                style={{ cursor: "pointer" }}
                onClick={handleShow}
              />
              <Pencil
                className="fs-5 text-secondary"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="py-2 border-bottom">
            <h6 className="fw-bold mb-0">React.js</h6>
            <p className="small text-muted">12 segnalazioni</p>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi competenza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="text-secondary small">
                Competenza*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Es. JavaScript, Project Management..."
                autoFocus
              />
            </Form.Group>
            <p className="small text-muted">
              Ti consigliamo di aggiungere le competenze più rilevanti per il
              tuo ruolo attuale.
            </p>
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

export default SkillsSection;
