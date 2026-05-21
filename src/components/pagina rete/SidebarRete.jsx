import { Button, Card, Col, Container, Row } from "react-bootstrap";
import jelly from "../../assets/jelly.png";
const SideBarRete = function () {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="bg-white rounded-2">
            <h6
              className="text-black pt-3"
              style={{ fontSize: "1.30rem", padding: "0.5em" }}
            >
              Gestisci la tua rete
            </h6>
            <hr className="text-secondary m-0" />
            <div
              className="d-flex align-items-center p-2"
              style={{ height: "50px" }}
            >
              <i className="me-2 text-secondary bi bi-people-fill"></i>
              <p
                style={{ fontSize: "1.25rem", padding: "0.5em" }}
                className="text-secondary m-0"
              >
                {" "}
                Collegamenti
              </p>{" "}
              <span className="text-secondary ms-auto">120</span>
            </div>
            <div
              className="d-flex align-items-center p-2"
              style={{ height: "50px" }}
            >
              <i className="me-2 text-secondary bi bi-person-fill"></i>
              <p
                style={{ fontSize: "1.25rem", padding: "0.5em" }}
                className="text-secondary"
              >
                Persone che segui
              </p>
            </div>
            <div
              className="d-flex align-items-center p-2"
              style={{ height: "50px" }}
            >
              <i className="me-2 text-secondary bi bi-person-hearts"></i>
              <p
                style={{ fontSize: "1.25rem", padding: "0.5em" }}
                className="text-secondary"
              >
                Gruppi
              </p>

              <span className="text-secondary ms-auto">7</span>
            </div>
            <div
              className="d-flex align-items-center p-2"
              style={{ height: "50px" }}
            >
              <i className="me-2 text-secondary bi bi-calendar2-event"></i>
              <p
                style={{ fontSize: "1.25rem", padding: "0.5em" }}
                className="text-secondary"
              >
                Eventi
              </p>

              <span className="text-secondary ms-auto">1</span>
            </div>
            <div
              className="d-flex align-items-center p-2"
              style={{ height: "50px" }}
            >
              <i className="me-2 text-secondary bi bi-file-earmark"></i>
              <p
                style={{ fontSize: "1.25rem", padding: "0.5em" }}
                className="text-secondary"
              >
                {" "}
                Pagine
              </p>

              <span className="text-secondary ms-auto">8</span>
            </div>
            <div
              className="d-flex align-items-center p-2"
              style={{ height: "50px" }}
            >
              <i className="me-2 text-secondary bi bi-newspaper"></i>
              <p
                style={{ fontSize: "1.25rem", padding: "0.5em" }}
                className="text-secondary"
              >
                Newsletter
              </p>

              <span className="text-secondary ms-auto">5</span>
            </div>
          </Col>
          <Col xs={12} className="p-0 mt-3">
            <Card className="border-0 shadow-sm overflow-hidden rounded-2 p-0">
              <div
                className="d-flex justify-content-end p-2 position-relative"
                style={{ backgroundColor: "#b2c4c9", height: "90px" }}
              >
                <div
                  className="d-flex align-items-center bg-white bg-opacity-75 rounded-pill px-2 py-1"
                  style={{ height: "fit-content", fontSize: "0.85rem" }}
                >
                  <span
                    className="text-dark me-1"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Promosso
                  </span>
                  <span
                    className="fw-bold text-secondary text-center"
                    style={{
                      lineHeight: "0",
                      bottom: "2px",
                      position: "relative",
                    }}
                  >
                    ...
                  </span>
                </div>
                <div
                  className="position-absolute bg-white rounded-3 shadow-sm d-flex align-items-center justify-content-center overflow-hidden"
                  style={{
                    width: "75px",
                    height: "75px",
                    left: "20px",
                    top: "25px",
                    border: "1px solid #eaeaea",
                  }}
                >
                  <img
                    src={jelly}
                    alt="Jelly Minds Logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <Card.Body className="pt-5 px-4 pb-4 bg-white">
                <h4
                  className="fw-bold text-dark mt-3 mb-4"
                  style={{ fontSize: "1.35rem" }}
                >
                  Jelly Minds
                </h4>
                <div
                  className="text-dark mb-4"
                  style={{ fontSize: "0.95rem", lineHeight: "1.4" }}
                >
                  <p className="mb-3">Seguici! (come dicono i migliori)</p>
                  <p className="text-secondary m-0">
                    Freelance, comunicazione e cose che LinkedIn prende troppo
                    sul serio.
                  </p>
                </div>
                <Button
                  variant="outline-primary"
                  className="w-100 rounded-pill py-2 fw-semibold"
                  style={{ borderWidth: "2px", fontSize: "1.1rem" }}
                >
                  Segui
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SideBarRete;
