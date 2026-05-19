import { useState } from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";

const Formazione = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="sidebar-card mb-3">
        <div className="sidebar-card-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="m-0">Formazione</h5>
            <div className="d-flex gap-3 align-items-center">
              <PlusLg style={{ cursor: "pointer" }} onClick={handleShow} />
              <Pencil className="pencil-icon" size={18} />
            </div>
          </div>

          <div className="sidebar-item">
            <div className="flex-shrink-0">
              <img
                src="https://placehold.co/50x50"
                alt="logo"
                className="rounded"
              />
            </div>
            <div className="sidebar-content w-100">
              <h6 className="fw-bold mb-0" style={{ fontSize: "14px" }}>
                Epicode
              </h6>
              <p className="mb-0">Full Stack Web Developer</p>
              <p className="mb-0">2023 - 2024</p>
            </div>
          </div>

          <hr className="my-3 opacity-25" />

          <div className="sidebar-item">
            <div className="flex-shrink-0">
              <img
                src="https://placehold.co/50x50"
                alt="logo"
                className="rounded"
              />
            </div>
            <div className="sidebar-content w-100">
              <h6 className="fw-bold mb-0" style={{ fontSize: "14px" }}>
                Università degli Studi di Napoli Federico II
              </h6>
              <p className="mb-0">Laurea in Sociologia</p>
              <p className="mb-0">2018 - 2022</p>
            </div>
          </div>
        </div>

        <div className="show-all">Mostra tutta la formazione &rarr;</div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 fw-bold">
            Aggiungi formazione
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Scuola*</Form.Label>
              <Form.Control type="text" placeholder="Es: Università Bocconi" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Grado</Form.Label>
              <Form.Control type="text" placeholder="Es: Laurea Magistrale" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">
                    Data di inizio
                  </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-bold">
                    Data di fine (o prevista)
                  </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Salva</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Formazione;
