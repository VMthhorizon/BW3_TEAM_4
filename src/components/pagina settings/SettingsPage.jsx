import { Container, Row, Col, Card } from "react-bootstrap"

import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Gear, ShieldLock, Eye, Database, Bell } from "react-bootstrap-icons"

const SettingsPage = function () {
  const profilo = useSelector((state) => state.profile.me)
  const navigate = useNavigate()

  return (
    <Container fluid className="settings-page">
      {/* mobile nav */}
      <div
        className="
          d-flex
          d-md-none
          gap-4
          overflow-auto
          px-3
          py-3
          settings-mobile-nav
        "
      >
        <div className="settings-mobile-item active">Preferenze account</div>

        <div className="settings-mobile-item">Accesso e sicurezza</div>

        <div className="settings-mobile-item">Visibilità</div>

        <div className="settings-mobile-item">Privacy dei dati</div>

        <div className="settings-mobile-item">Notifiche</div>
      </div>

      <Row>
        {/* sidebar */}
        <Col
          md={4}
          lg={3}
          className="
            settings-sidebar
            d-none
            d-md-block
          "
        >
          <div className="p-4">
            {/* profilo */}
            <div className="d-flex align-items-center gap-3 mb-5">
              <img
                src={profilo?.image}
                alt="avatar"
                className="settings-sidebar-avatar"
                onClick={() => navigate("/me")}
              />

              <h2 className="fw-bold mb-0">Impostazioni</h2>
            </div>

            {/* items */}
            <div className="settings-sidebar-item active">
              <Gear size={22} />

              <span>Preferenze account</span>
            </div>

            <div className="settings-sidebar-item">
              <ShieldLock size={22} />

              <span>Accesso e sicurezza</span>
            </div>

            <div className="settings-sidebar-item">
              <Eye size={22} />

              <span>Visibilità</span>
            </div>

            <div className="settings-sidebar-item">
              <Database size={22} />

              <span>Privacy dei dati</span>
            </div>

            <div className="settings-sidebar-item">
              <Bell size={22} />

              <span>Notifiche</span>
            </div>
          </div>
        </Col>

        {/* spazio desktop */}
        <Col lg={2} className="d-none d-lg-block"></Col>

        {/* contenuto */}
        <Col xs={12} md={8} lg={5} className="py-4">
          {/* card */}
          <Card className="settings-card border-0">
            <Card.Body>
              <h3 className="settings-card-title mb-0">Informazioni profilo</h3>

              <div className="settings-row">
                <span>Nome, località e settore</span>

                <i className="bi bi-chevron-right"></i>
              </div>

              <hr className="m-0" />

              <div className="settings-row">
                <span>Informazioni demografiche personali</span>

                <i className="bi bi-chevron-right"></i>
              </div>

              <hr className="m-0" />

              <div className="settings-row">
                <span>Verifiche</span>

                <i className="bi bi-chevron-right"></i>
              </div>
            </Card.Body>
          </Card>

          {/* card */}
          <Card className="settings-card border-0 mt-3">
            <Card.Body>
              <h3 className="settings-card-title mb-0">Visualizzazione</h3>

              <div className="settings-row">
                <span>Modalità scura</span>

                <i className="bi bi-chevron-right"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* spazio desktop */}
        <Col lg={2} className="d-none d-lg-block"></Col>
      </Row>
    </Container>
  )
}

export default SettingsPage
