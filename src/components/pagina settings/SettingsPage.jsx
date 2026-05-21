import { Container, Row, Col, Card } from "react-bootstrap"

import { useSelector } from "react-redux"

import { Gear, ShieldLock, Eye, Database, Bell } from "react-bootstrap-icons"

const SettingsPage = function () {
  const profilo = useSelector((state) => state.profile.me)

  return (
    <Container fluid className="settings-page">
      <Row>
        {/* sidebar */}
        <Col lg={3} className="settings-sidebar">
          <div className="p-4">
            {/* profilo */}
            <div className="d-flex align-items-center gap-3 mb-5">
              <img
                src={profilo?.image}
                alt="avatar"
                className="settings-sidebar-avatar"
              />

              {/* titolo */}
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

        {/* spazio */}
        <Col lg={2}></Col>

        {/* contenuto */}
        <Col lg={5} className="py-4">
          <h1 className="fw-bold mb-4">Preferenze account</h1>

          <Card className="border-0 shadow-sm rounded-4">
            <Card.Body>
              <div className="settings-row">
                <div>
                  <h5 className="mb-1 fw-semibold">Informazioni profilo</h5>

                  <p className="text-muted small mb-0">
                    Modifica nome, foto e dettagli del profilo.
                  </p>
                </div>

                <i className="bi bi-chevron-right"></i>
              </div>

              <hr />

              <div className="settings-row">
                <div>
                  <h5 className="mb-1 fw-semibold">
                    Email e numeri di telefono
                  </h5>

                  <p className="text-muted small mb-0">
                    Gestisci email e recapiti associati.
                  </p>
                </div>

                <i className="bi bi-chevron-right"></i>
              </div>

              <hr />

              <div className="settings-row">
                <div>
                  <h5 className="mb-1 fw-semibold">Password e sicurezza</h5>

                  <p className="text-muted small mb-0">
                    Aggiorna password e controlli di sicurezza.
                  </p>
                </div>

                <i className="bi bi-chevron-right"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* spazio */}
        <Col lg={2}></Col>
      </Row>
    </Container>
  )
}

export default SettingsPage
