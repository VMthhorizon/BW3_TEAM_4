import { Col, Container, Row, Nav, Modal, NavLink } from "react-bootstrap";
import {
  Apple,
  Envelope,
  Linkedin,
  PatchCheck,
  TelephoneFill,
} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import MyCarousel from "./MyCarousel";
import { useDispatch, useSelector } from "react-redux";
import getProfilePersonaleAction from "../../../redux/actions/profileAction/profiloPersonal";
import { useEffect, useState } from "react";

import AddImages from "../../AddImages";
import copertina from "../../../assets/sinner.jpg";
function ProfilePersonalInfo() {
  const dispatch = useDispatch();
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getProfilePersonaleAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card className="mb-3">
      <div className="position-relative">
        <Card.Img
          style={{ height: 200, objectFit: "cover" }}
          variant="top"
          src={copertina}
        />
        <div className=" matita1  rounded-5  py-1 px-2 position-absolute top-0 end-0 m-3 ">
          <i className="bi bi-pencil"></i>
        </div>

        <img
          className="m-3 start-0 rounded-circle p-1 bg-white object-fit-cover "
          style={{
            bottom: "-60px",
            position: "absolute",
            width: "100px",
            height: "100px",
          }}
          src={profilo?.image}
        />
      </div>

      <Card.Body>
        <Row>
          <Col className="text-end" xs={12}>
            <AddImages></AddImages>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col xs={8} className="d-flex flex-column flex-md-row  gap-1">
            <Card.Title className="fs-1 text-nowrap">
              {profilo?.name.charAt(0).toUpperCase() + profilo?.name.slice(1)}{" "}
              {profilo?.surname.charAt(0).toUpperCase() +
                profilo?.surname.slice(1)}
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
            <Card.Text className="fs-5 mb-0">{profilo?.bio}</Card.Text>
            <div className="d-flex gap-1">
              <Card.Text className="fs-6 text-muted">{profilo?.area}</Card.Text>
              <Nav.Link href="#" className="text-primary" onClick={handleShow}>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row className="g-4">
              <Col xs={12} className="d-flex gap-2 align-items-start">
                <Linkedin className="fs-4"></Linkedin>
                <div className="d-flex flex-column">
                  <h6 className="mb-0"> Your Profile</h6>
                  <NavLink
                    className="text-primary"
                    href="https://www.linkedin.com/in/me/"
                  >
                    https://www.linkedin.com/in/me/
                  </NavLink>
                </div>
              </Col>
              <Col xs={12} className="d-flex gap-2 align-items-start">
                <TelephoneFill className="fs-4"></TelephoneFill>
                <div className="d-flex flex-column">
                  <h6 className="mb-0"> Phone</h6>
                  <h6 className="fw-lighter">
                    +39 3334445566
                    <span className="text-muted"> (mobile)</span>
                  </h6>
                </div>
              </Col>
              <Col xs={12} className="d-flex gap-2 align-items-start">
                <Envelope className="fs-4"></Envelope>
                <div className="d-flex flex-column">
                  <h6 className="mb-0"> Email</h6>
                  <NavLink className="text-primary" href={profilo?.email}>
                    {profilo?.email}
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default ProfilePersonalInfo;
