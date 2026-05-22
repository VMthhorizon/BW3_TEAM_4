import { useState, useEffect } from "react"
import { Row, Col, Modal, Button, Form } from "react-bootstrap"
import { PlusLg, Briefcase, Pencil } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import experiencePostAction from "../redux/actions/experiencesAction/experiencePost"
import experiencesListAction from "../redux/actions/experiencesAction/experiencesList"
import experienceDeleteAction from "../redux/actions/experiencesAction/experienceDelete"
import experiencePutAction from "../redux/actions/experiencesAction/experiencePut"
import AddExperienceImagesAction from "../redux/actions/images action/pictureExperience"
// import experiencePutAction from "../redux/actions/experiencesAction/experiencePut"

const ExperienceSection = () => {
  const [show, setShow] = useState(false)
  const [image, setImage] = useState(null)
  const [formExp, setFormExp] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  })

  const [selectedExpId, setSelectedExpId] = useState(null)

  const dispatch = useDispatch()

  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me
  })

  const listaEsperienze = useSelector((storeRedux) => {
    return storeRedux.experience.list
  })

  useEffect(() => {
    if (profilo?._id) {
      dispatch(experiencesListAction(profilo?._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilo, listaEsperienze])

  return (
    <>
      <div className="sidebar-card mb-3">
        <div className="sidebar-card-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="m-0">Esperienza</h5>
            <div className="d-flex gap-3 align-items-center">
              <PlusLg
                className="pencil-btn-linkedin"
                style={{ cursor: "pointer" }}
                onClick={() => setShow(true)}
              />
              <div className="pencil-icon rounded-4 px-2 py-2 d-flex justify-content-center align-items-center">
                <Pencil size={18} />
              </div>
            </div>
          </div>

          {listaEsperienze
            .filter((exp) => exp)
            .map((exp, index) => (
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

                <div className="d-flex justify-content-between w-100">
                  <div className="sidebar-content w-100">
                    <h6 className="fw-bold mb-0 fs-5">{exp.company}</h6>
                    <p className="mb-0 text-black">{exp.role}</p>
                    <p className="mb-0">
                      {exp.startDate.slice(0, 10)} –{" "}
                      {exp.endDate ? exp.endDate.slice(0, 10) : "Presente"}
                    </p>
                    <p className="mb-0">{exp.area}</p>
                    {exp.description && (
                      <p
                        className="mt-2 mb-0 fw-bold"
                        style={{ color: "#333" }}
                      >
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <div className=" d-flex ms-5">
                    <div>
                      <Button
                        className="border-0 mt-2"
                        variant="light"
                        onClick={() => {
                          setFormExp({
                            role: exp.role,
                            company: exp.company,
                            startDate: exp.startDate.slice(0, 10),
                            endDate: exp.endDate
                              ? exp.endDate.slice(0, 10)
                              : "",
                            description: exp.description,
                            area: exp.area,
                          })

                          setSelectedExpId(exp._id)

                          setShow(true)
                        }}
                      >
                        <i className="bi bi-pencil "></i>
                      </Button>
                    </div>
                    <div>
                      <Button
                        className="border-0 mt-2"
                        variant="none"
                        onClick={() => {
                          dispatch(experienceDeleteAction(profilo._id, exp._id))
                        }}
                      >
                        <i className="bi bi-trash3"></i>
                      </Button>
                    </div>
                  </div>
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
            {selectedExpId ? (
              <Form.Group className="mb-3 text-center">
                <Form.Label className="small fw-bold d-block text-start">
                  Immagine
                </Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </Form.Group>
            ) : (
              ""
            )}

            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Qualifica*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Es: Full Stack Developer"
                required
                value={formExp.role}
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
                required
                value={formExp.company}
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
                required
                value={formExp.description}
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
                required
                value={formExp.area}
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
                  required
                  value={formExp.startDate}
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
                  value={formExp.endDate}
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
              if (selectedExpId) {
                dispatch(
                  experiencePutAction(profilo._id, selectedExpId, formExp),
                ).then(() => {
                  if (image) {
                    dispatch(
                      AddExperienceImagesAction(
                        image,
                        profilo?._id,
                        selectedExpId,
                      ),
                    )
                  }
                  dispatch(experiencesListAction(profilo._id))
                })
              } else {
                dispatch(experiencePostAction(profilo?._id, formExp)).then(
                  () => {
                    if (image) {
                      dispatch(
                        AddExperienceImagesAction(
                          image,
                          profilo?._id,
                          selectedExpId,
                        ),
                      )
                    }
                    dispatch(experiencesListAction(profilo._id))
                  },
                )
              }

              setShow(false)
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
