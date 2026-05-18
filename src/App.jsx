import { Col, Container, Row } from "react-bootstrap"
import "./App.css"
import SidebarRight from "./components/SidebarRight/SidebarRight"


function App() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          LeftSidebar
        </Col>

        <Col xs={6}>
          MainProfile
        </Col>

        <Col xs={3}>
          <SidebarRight />
        </Col>
      </Row>
    </Container>
  )
}

export default App
