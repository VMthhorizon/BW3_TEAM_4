import { Container, Row, Col } from "react-bootstrap"

import SideBarSxPaginaHome from "./SidebarSxPaginaHome"

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
          <div>Feed centrale</div>
        </Col>

        {/* sidebar destra */}
        <Col xs={12} lg={3}>
          <div>Sidebar destra</div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
