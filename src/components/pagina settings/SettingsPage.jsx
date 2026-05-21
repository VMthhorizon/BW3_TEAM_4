import { useState } from "react"
import { Container, Row, Col, Card, Form } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const SettingsPage = function () {
  const profilo = useSelector((state) => state.profile.me)

  const [publicProfile, setPublicProfile] = useState(true)

  const navigate = useNavigate()

  return (
    <Container className="mt-5 my-4 px-lg-5">
      <Row>
        <Col lg={8}>
          <div className="pt-5 mb-4">
            <h2 className="fs-4 mb-2">Impostazioni profilo pubblico</h2>

            <p className="text-muted settings-description">
              Puoi controllare il tuo profilo e limitare ciò che potrebbe essere
              mostrato negli strumenti di ricerca e altri servizi esterni alla
              LinkedIn. Gli utenti che non hanno effettuato l’accesso a LinkedIn
              potrebbero vedere il tuo profilo completo o alcune parti, come
              mostrato qui sotto.
            </p>
          </div>
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
              <button className=" rounded-pill fw-bold px-4 py-3 settings-main-btn" onClick={() => {navigate("/me")}}>
                Iscriviti per visualizzare il profilo
              </button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} className="mt-3">
          <Card className="border-0 shadow-sm rounded-3">
            <Card.Body>
              <h5 className="fw-semibold mb-2">
                Modifica il tuo URL personalizzato
              </h5>

              <p className="text-muted small mb-2">
                Personalizza l’URL del tuo profilo.
              </p>

              <div className="d-flex justify-content-between align-items-center">
                <span className="small">
                  linkedin.com/in/
                  {profilo?.name?.toLowerCase()}
                </span>

                <i className="bi bi-pencil-fill text-primary"></i>
              </div>
            </Card.Body>
            <hr className="my-0" />
            <Card.Body>
              <h5 className="fw-semibold mb-2">Modifica contenuto</h5>

              <p className="text-muted small mb-3">
                Questo è il tuo profilo pubblico. Per modificarne le sezioni,
                aggiorna il tuo profilo.
              </p>

              <button className="btn btn-outline-primary rounded-pill">
                Modifica il contenuto
              </button>
            </Card.Body>
            <hr className="my-0" />
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-semibold mb-1">
                    Visibilità del profilo pubblico
                  </h5>

                  <p className="text-muted small mb-0">
                    Controlla chi può vedere il tuo profilo pubblico.
                  </p>
                </div>

                <Form.Check
                  type="switch"
                  checked={publicProfile}
                  onChange={() => setPublicProfile(!publicProfile)}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default SettingsPage
