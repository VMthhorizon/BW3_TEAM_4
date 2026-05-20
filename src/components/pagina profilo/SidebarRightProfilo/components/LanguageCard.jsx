import { Pencil } from "react-bootstrap-icons"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const LanguageCard = function () {
  const [language, setLanguage] = useState("Italiano")
  const [showLanguageModal, setShowLanguageModal] = useState(false)

  const me = useSelector((state) => state.profile.me)
  const selected = useSelector((state) => state.profile.selectedProfile)
  const profileUrlMe = `www.linkedin.com/in/${me?.name?.toLowerCase()}-${me?.surname?.toLowerCase()}`
  const profileUrlById = `www.linkedin.com/in/${selected?.name?.toLowerCase()}-${selected?.surname?.toLowerCase()}`

  const navigate = useNavigate()

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <div className="language-row">
            <h5>Lingua del profilo</h5>
            <Pencil
              className="bi bi-pencil pencil-icon"
              onClick={() => setShowLanguageModal(true)}
            />
          </div>
          <p>Italiano</p>

          <hr />

          <div className="language-row">
            <h5>Profilo pubblico & URL</h5>
            <Pencil
              className="bi bi-pencil pencil-icon"
              onClick={() => navigate("/settings")}
            />
          </div>
          <p>{selected ? profileUrlById : profileUrlMe}</p>
        </div>
      </div>

      {/* modale lingua */}
      <Modal
        show={showLanguageModal}
        onHide={() => setShowLanguageModal(false)}
        centered
      >
        <Modal.Body className="language-modal-body">
          <h4 className="mb-4">Lingua del profilo</h4>

          <p className="language-label">Lingua corrente</p>

          <div className="language-pill">{language}</div>

          <div className="d-flex justify-content-end mt-4">
            <Button
              variant="primary"
              onClick={() => setShowLanguageModal(false)}
            >
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LanguageCard
