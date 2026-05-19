import { useState } from "react"
import { Row, Col, Modal, Button, Form } from "react-bootstrap"
import { PlusLg, Briefcase, Pencil } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import experiencePostAction from "../redux/actions/experiencesAction/experiencePost"

const ExperienceSection = () => {
  const [show, setShow] = useState(false)

  const [formExp, setFormExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  })

  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me
  })

  const listaEsperienze = useSelector((storeRedux) => {
    return storeRedux.experience.list
  })

  const dispatch = useDispatch()

  return (
    <>
      <div className="sidebar-card mb-3">
        <div className="sidebar-card-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="m-0">Esperienze lavorative</h5>
            <div className="d-flex gap-3 align-items-center">
              <PlusLg
                style={{ cursor: "pointer" }}
                onClick={() => setShow(true)}
              />
              <Pencil className="pencil-icon" size={18} />
            </div>
          </div>

          {listaEsperienze.map((exp, index) => (
            <div key={index} className="sidebar-item">
              <div className="flex-shrink-0">
                {exp.image ? (
                  <img src={exp.image} alt="logo" className="rounded" />
                ) : (
                  <div
                    className="bg-light d-flex align-items-center justify-content-center rounded"
                    style={{ width: "50px", height: "50px" }}
                  >
                    <Briefcase className="text-secondary fs-3" />
                  </div>
                )}
              </div>

              <div className="sidebar-content w-100">
                <h6 className="fw-bold mb-0" style={{ fontSize: "14px" }}>
                  {exp.role}
                </h6>
                <p className="mb-0">{exp.company}</p>
                <p className="mb-0">
                  {exp.startDate} – {exp.endDate || "Presente"}
                </p>
                {exp.description && (
                  <p className="mt-2 mb-0" style={{ color: "#333" }}>
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="show-all">Mostra tutte le esperienze &rarr;</div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5 fw-bold">
            Aggiungi esperienza
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Qualifica*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Full Stack Developer"
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    role: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Azienda*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Epicode"
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    company: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Description*</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    description: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Area*</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setFormExp({
                    ...formExp,
                    area: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Label className="small fw-bold">Data inizio*</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    setFormExp({
                      ...formExp,
                      startDate: e.target.value.toString(),
                    })
                  }}
                />
              </Col>
              <Col>
                <Form.Label className="small fw-bold">Data fine</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => {
                    setFormExp({
                      ...formExp,
                      endDate: e.target.value.toString(),
                    })
                  }}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            type="submit"
            onClick={() => {
              return (
                dispatch(experiencePostAction(profilo?._id, formExp)),
                setShow(false)
              )
            }}
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ExperienceSection
