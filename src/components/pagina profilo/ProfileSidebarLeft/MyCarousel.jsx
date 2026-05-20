import { Container, Row, Col, NavLink, CloseButton } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";

const MyCarousel = () => {
  return (
    <Swiper
      className="ms-2"
      spaceBetween={20}
      slidesPerView={1.7}
      className="mx-1"
    >
      <SwiperSlide className="h-100 bg-info bg-opacity-10 rounded-3 py-2 cursor:pointer">
        <Container fluid className="d-flex flex-column h-100">
          <div className="flex-grow-1">
            <Row>
              <Col xs={6}>
                <h4 className="text-black fw-bolder fs-6 ">Open to work</h4>
              </Col>
              <Col xs={6} className="text-end">
                <Pencil></Pencil>
              </Col>
            </Row>
            <Row className="d-flex flex-column">
              <Col xs={12} className="flex-grow-1">
                <h6 className="text-black fs-6 fw-lighter">
                  Naples +2 more | On-site · Hybrid
                </h6>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={12}>
                <NavLink href="#" className="text-primary">
                  Show details
                </NavLink>
              </Col>
            </Row>
          </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide className="h-100 bg-info bg-opacity-10 rounded-3 py-2">
        <Container fluid className="h-100 flex-column d-flex">
          <div className="flex-grow-1">
            <Row>
              <Col xs={10}>
                <h5 className="text-black fs-6 fw-lighter">
                  <strong className="fw-bold ">Share that you're hiring</strong>{" "}
                  and attract qualified candidates
                </h5>
              </Col>
              <Col xs={2} className="text-end">
                <CloseButton></CloseButton>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={12}>
                <NavLink href="#" className="text-primary">
                  Get started
                </NavLink>
              </Col>
            </Row>
          </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide className="h-100 bg-info bg-opacity-10 rounded-3 py-2">
        <Container fluid className="h-100 d-flex flex-column">
          <div className="flex-grow-1 ">
            <Row>
              <Col xs={10}>
                <h5 className="text-black fs-6 fw-lighter">
                  <strong className="fw-bold ">Showcase your services</strong>{" "}
                  as a section on your profile so your business can be easily
                  discovered{" "}
                </h5>
              </Col>
              <Col xs={2} className="text-end">
                <CloseButton></CloseButton>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={12}>
                <NavLink href="#" className="text-primary">
                  Add services{" "}
                </NavLink>
              </Col>
            </Row>
          </div>
        </Container>
      </SwiperSlide>
      <SwiperSlide className="h-100 bg-info bg-opacity-10 rounded-3 py-2">
        <Container fluid className="h-100 d-flex flex-column">
          <div className="flex-grow-1 ">
            <Row>
              <Col xs={8}>
                <h5 className="text-black fs-6 fw-lighter">
                  <strong className="fw-bold">Tell non-profits </strong> you are
                  interested in getting involved with your time and skills{" "}
                </h5>
              </Col>
              <Col xs={4} className="text-end">
                <CloseButton></CloseButton>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={12}>
                <NavLink href="#" className="text-primary">
                  Get started
                </NavLink>
              </Col>
            </Row>
          </div>
        </Container>
      </SwiperSlide>
    </Swiper>
  );
};

export default MyCarousel;
