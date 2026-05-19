import { Container, Row, Col } from "react-bootstrap";

import SideBarSxPaginaHome from "../pagina home/sidebarSxHome/SidebarSxPaginaHome";
import HPSidebarRight from "../pagina home/HPSidebarRight";
import Job from "../Job";
const JobsPage = function () {
  return (
    <Container className="my-4">
      <Row>
        {/* sidebar sinistra */}
        <Col xs={12} lg={3}>
          <SideBarSxPaginaHome />
        </Col>

        {/* job centrale */}
        <Col xs={12} lg={6}>
          <Job />
        </Col>

        {/* sidebar destra */}
        <Col xs={12} lg={3}>
          <HPSidebarRight />
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
