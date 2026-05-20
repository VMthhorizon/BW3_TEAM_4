import { Container, Row, Col } from "react-bootstrap"
import Analisi from "../Analisi"
import Formazione from "../Formazione"
import Interessi from "../Interessi"

import SidebarRight from "../pagina profilo/SidebarRightProfilo/SidebarRight"
import ProfileByIdInfo from "./ProfileByIdInfo"
import ExperienceByIdSection from "./ExperiencesById"
const ProfilePageDetail = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} lg={9}>
          <ProfileByIdInfo></ProfileByIdInfo>
          <Analisi />
          <ExperienceByIdSection />
          <Formazione />
          <Interessi />
        </Col>
        <Col xs={12} lg={3}>
          <SidebarRight></SidebarRight>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePageDetail
