import { Button, Col, Container, Row } from "react-bootstrap";
import sudoku from "../../assets/sukodu.png";
import patches from "../../assets/patches.png";
import zip from "../../assets/zip.png";
const Rete = function () {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="d-flex bg-white rounded-2 w-100">
            <p
              className=" text-success fw-bold border-bottom border-3 me-3 pt-3 ps-2 m-0"
              style={{ fontSize: "1.15rem" }}
            >
              Amplia la tua rete
            </p>
            <p className=" pt-3 ms-1 fw-bold " style={{ fontSize: "1.15rem" }}>
              Riprendi i contatti
            </p>
          </Col>
          <Col
            xs={12}
            className="d-flex justify-content-between bg-white rounded-2 w-100 mt-2"
          >
            <p
              className=" pt-3 ms-1 fw-semibold"
              style={{ fontSize: "1.15rem" }}
            >
              Nessun invito in sospeso
            </p>
            <p className=" pt-3 ms-1 fw-bold" style={{ fontSize: "1.15rem" }}>
              Gestisci
            </p>
          </Col>
          <Col xs={12} className="mt-3">
            <Row>
              <Col xs={12} className="bg-white rounded-3 p-4 shadow-sm">
                <div className="d-flex align-items-center mb-4">
                  <h5
                    className="m-0 fw-semibold text-dark"
                    style={{ fontSize: "1.15rem" }}
                  >
                    Il tuo rompicapo mattutino è pronto
                  </h5>
                </div>
                <Row className="g-4">
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={patches}
                        alt="Patches"
                        className="rounded-3 me-3"
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <div className="d-flex align-items-baseline">
                          <span className="fw-bold text-dark me-1">
                            Patches
                          </span>
                          <span className="text-muted small">#65</span>
                        </div>
                        <small className="text-muted d-block">
                          Thursday, May 21
                        </small>
                      </div>
                    </div>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill px-4 fw-semibold btn-sm"
                      style={{ borderWidth: "2px" }}
                    >
                      Gioca
                    </Button>
                  </Col>
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={zip}
                        alt="Zip"
                        className="rounded-3 me-3"
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <div className="d-flex align-items-baseline">
                          <span className="fw-bold text-dark me-1">Zip</span>
                          <span className="text-muted small">#430</span>
                        </div>
                        <small className="text-muted d-block">
                          Thursday, May 21
                        </small>
                      </div>
                    </div>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill px-4 fw-semibold btn-sm"
                      style={{ borderWidth: "2px" }}
                    >
                      Gioca
                    </Button>
                  </Col>
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={sudoku}
                        alt="Mini Sudoku"
                        className="rounded-3 me-3"
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <div className="d-flex align-items-baseline">
                          <span className="fw-bold text-dark me-1">
                            Mini Sudoku
                          </span>
                          <span className="text-muted small">#283</span>
                        </div>
                        <small className="text-muted d-block">
                          Thursday, May 21
                        </small>
                      </div>
                    </div>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill px-4 fw-semibold btn-sm"
                      style={{ borderWidth: "2px" }}
                    >
                      Gioca
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Rete;
