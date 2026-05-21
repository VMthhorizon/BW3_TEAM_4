import { Container, Row, Col } from "react-bootstrap"
import ProfilePersonalInfo from "./ProfileSidebarLeft/ProfilePersonalInfo"
import SidebarRight from "./SidebarRightProfilo/SidebarRight"
import Analisi from "../Analisi"
import Formazione from "../Formazione"
import Interessi from "../Interessi"
import ExperienceSection from "../Experiences"
import ListaPostPersonaliSection from "../ListaPostPersonali"
const ProfilePage = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} lg={9}>
          <ProfilePersonalInfo></ProfilePersonalInfo>
          <Analisi />
          <ListaPostPersonaliSection />
          <ExperienceSection />
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

export default ProfilePage
