import { Container, Row, Col } from "react-bootstrap";

import SideBarSxPaginaHome from "./SidebarSxPaginaHome";
import HPSidebarRight from "./HPSidebarRight";
import PostHomePage from "./PostHomePage";

const Home = function () {
  return (
    <Container className="my-4">
      <Row>
        {/* sidebar sinistra */}
        <Col xs={12} lg={3}>
          <SideBarSxPaginaHome />
        </Col>

        {/* feed centrale */}
        <Col xs={12} lg={6}>
          <PostHomePage></PostHomePage>
        </Col>

        {/* sidebar destra */}
        <Col xs={12} lg={3}>
          <HPSidebarRight />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
