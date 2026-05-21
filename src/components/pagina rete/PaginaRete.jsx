import { Col, Container, Row } from "react-bootstrap";
import SideBarRete from "./SidebarRete";
import Rete from "./Rete";
const PaginaRete = function () {
  return (
    <Container className="my-4">
      <Row>
        {/* sidebar sinistra */}
        <Col xs={12} lg={4}>
          <SideBarRete />
        </Col>
        {/* rete centrale */}
        <Col xs={12} lg={8}>
          <Rete />
        </Col>
      </Row>
    </Container>
  );
};
export default PaginaRete;
