import { Container, Row, Col } from "react-bootstrap";

import HPSidebarRight from "./HPSidebarRight";
import PostHomePage from "./PostHomePage";
import Feed from "./Feed";
import SidebarSxPaginaHome from "./sidebarSxHome/SidebarSxPaginaHome";
import FooterAdCard from "../pagina profilo/SidebarRightProfilo/components/FooterAdCard";
import Giochino from "./Gioco";
import FooterSidebar from "./FooterSidebar";

const Home = function () {
  return (
    <Container className="my-4">
      <Row>
        {/* sidebar sinistra */}
        <Col xs={12} lg={3} className="mb-2">
          <div className="sticky-sidebar">
            <SidebarSxPaginaHome />
          </div>
        </Col>

        {/* feed centrale */}
        <Col xs={12} lg={6}>
          <PostHomePage></PostHomePage>
          {/* create post Vincenzo */}

          {/* feed posts */}
          <Feed />
        </Col>

        {/* sidebar destra */}
        <Col xs={12} lg={3}>
          <HPSidebarRight />
          <FooterAdCard />
          <FooterSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
