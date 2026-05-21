import { Col, Container, Row } from "react-bootstrap";
import OnlyChat from "./OnlyChat";
import SidebarSxPaginaHome from "../pagina home/sidebarSxHome/SidebarSxPaginaHome";
import HPSidebarRight from "../pagina home/HPSidebarRight";

const ChatPage = () => {
  return (
    <Container className="my-4">
      <Row>
        {/* sidebar sinistra */}
        <Col className="d-none d-lg-flex" lg={3}>
          <SidebarSxPaginaHome />
        </Col>

        {/* Chat centrale */}
        <Col xs={12} lg={6} className="mb-2">
          <OnlyChat />
        </Col>

        {/* sidebar destra */}
        <Col xs={12} lg={3}>
          <HPSidebarRight />
        </Col>
      </Row>
    </Container>
  );
};

export default ChatPage;
