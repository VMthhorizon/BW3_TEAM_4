import { Col, Container, Row, Nav } from "react-bootstrap";
import { Apple, PatchCheck, Pencil } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyCarousel from "./MyCarousel";

function ProfilePersonalInfo() {
  return (
    <Container className="my-5">
      <Card>
        <div className="position-relative">
          <Card.Img
            style={{ height: 200, objectFit: "cover" }}
            variant="top"
            src="https://placecats.com/300/200"
          />
          <Pencil className="m-3 bg-white border border-1 border-black rounded-circle position-absolute fs-1 top-0 end-0 "></Pencil>
          <img
            className="bottom-0 m-3 start-0 rounded-circle p-1 bg-white object-fit-cover "
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
            }}
            src="https://placecats.com/300/200"
          />
        </div>

        <Card.Body>
          <Row>
            <Col className="text-end" xs={12}>
              <Pencil className="fs-4"></Pencil>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={8} className="d-flex flex-column flex-md-row  gap-1">
              <Card.Title className="fs-1 text-nowrap">
                Vincenzo Mola
              </Card.Title>
              <Button
                variant="outline-primary"
                className="p-1 d-flex align-items-center rounded-4 justify-content-center flex-nowrap gap-1"
                style={{
                  borderColor: "blue",
                  borderWidth: "2px",
                  borderStyle: "dashed",
                }}
              >
                <PatchCheck></PatchCheck>
                <span className="flex-nowrap">Add verification badge</span>
              </Button>
            </Col>
            <Col
              xs={4}
              className="d-flex justify-content-end align-items-center gap-1"
            >
              <Apple></Apple>
              <Card.Title className="mb-0">Apple Inc.</Card.Title>
            </Col>
            <Col xs={12}>
              <Card.Text className="fs-5 text-nowrap mb-0">
                Student at Epicode
              </Card.Text>
              <div className="d-flex gap-1">
                <Card.Text className="fs-6 text-muted">
                  Italy, Naples, Campania ·
                </Card.Text>
                <Nav.Link href="#" className="text-primary">
                  Contact info
                </Nav.Link>
              </div>
            </Col>
            <Col
              xs={12}
              className="d-flex justify-content-start gap-1 flex-wrap mb-3"
            >
              <Button
                variant="primary"
                className="rounded-4 text-nowrap py-1 fw-bolder"
              >
                Open to
              </Button>
              <Button
                variant="outline-primary"
                className="rounded-4 text-nowrap py-1 fw-bolder"
              >
                Add section
              </Button>
              <Button
                variant="outline-primary"
                className="rounded-4 text-nowrap py-1 fw-bolder"
              >
                Enhance profile
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-4 text-nowrap py-1 fw-bolder"
              >
                Resources
              </Button>
            </Col>
          </Row>
          <Row>
            <MyCarousel></MyCarousel>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfilePersonalInfo;
