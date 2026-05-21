import { Container, Row, Col, Card } from "react-bootstrap"
import { useSelector } from "react-redux"

const SettingsPage = function () {
  const profilo = useSelector((state) => state.profile.me)

  return (
    <Container className="my-4">
      <Row>
        <Col lg={8}>
          <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
            <div className="settings-banner"> </div>
            <Card.Body className="pt-0">
              <img
                src={profilo?.image}
                alt="avatar"
                className="settings-avatar"
              />
              <h2>
                {profilo?.name} {profilo?.surname}
              </h2>
              <p>{profilo?.title}</p>
              <p>{profilo?.area}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>destra</Col>
      </Row>
    </Container>
  )
}

export default SettingsPage
