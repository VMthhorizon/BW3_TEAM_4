import { Button, Col } from "react-bootstrap";

const CentralNotifiche = function () {
  return (
    <>
      <Col xs={12}>
        <div className="p-3 bg-white border rounded-3 d-flex gap-2">
          <Button variant="success" className="rounded-pill px-3 fw-bold">
            Tutto
          </Button>
          <Button
            variant="outline-secondary"
            className="rounded-pill px-3 fw-bold"
          >
            Lavoro
          </Button>
          <Button
            variant="outline-secondary"
            className="rounded-pill px-3 fw-bold"
          >
            I miei post
          </Button>
          <Button
            variant="outline-secondary"
            className="rounded-pill px-3 fw-bold"
          >
            Menzioni
          </Button>
        </div>
      </Col>
      <Col xs={12}></Col>
    </>
  );
};
export default CentralNotifiche;
