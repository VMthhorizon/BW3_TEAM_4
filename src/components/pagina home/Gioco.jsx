import { Button, Col } from "react-bootstrap";
import patches from "../../assets/patches.png";
const Giochino = function () {
  return (
    <Col
      xs={12}
      xl={4}
      className="d-flex align-items-center justify-content-between mt-3 w-100"
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center ">
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
              <span className="fw-bold text-dark me-1">Patches</span>
              <span className="text-muted small">#65</span>
            </div>
            <small className="text-muted d-block">Thursday, May 21</small>
          </div>
        </div>
        <Button
          variant="outline-primary"
          className="rounded-5 fw-semibold py-0"
          style={{ borderWidth: "2px" }}
        >
          Gioca
        </Button>
      </div>
    </Col>
  );
};
export default Giochino;
