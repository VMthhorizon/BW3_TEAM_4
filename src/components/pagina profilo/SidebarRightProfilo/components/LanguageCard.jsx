import { Pencil } from "react-bootstrap-icons"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const LanguageCard = function () {
  const [showLanguageModal, setShowLanguageModal] = useState(false)
  const [language, setLanguage] = useState("Italiano")
  const navigate = useNavigate()

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <div className="language-row">
            <h5>Profile language</h5>
            <Pencil
              className="pencil-icon"
              onClick={() => setShowLanguageModal(true)}
            />
          </div>
          <p>Italiano</p>

          <hr />

          <div className="language-row">
            <h5>Public profile & URL</h5>
            <Pencil
              className="pencil-icon"
              onClick={() => navigate("/settings")}
            />
          </div>
          <p>www.linkedin.com/in/name</p>
        </div>
      </div>

      {/* modale lingua */}
      <Modal
        show={showLanguageModal}
        onHide={() => setShowLanguageModal(false)}
        centered
      >
        <Modal.Body className="language-modal-body">
          <h4 className="mb-4">Profile language</h4>

          <p className="language-label">Current language</p>

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
