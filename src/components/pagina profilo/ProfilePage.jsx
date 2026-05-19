import { Container, Row, Col } from "react-bootstrap"
import ProfilePersonalInfo from "./ProfileSidebarLeft/ProfilePersonalInfo"
import SidebarRight from "./SidebarRightProfilo/SidebarRight"

const ProfilePage = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} lg={9}>
          <ProfilePersonalInfo></ProfilePersonalInfo>
        </Col>
        <Col xs={12} lg={3}>
          <SidebarRight></SidebarRight>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfilePage
