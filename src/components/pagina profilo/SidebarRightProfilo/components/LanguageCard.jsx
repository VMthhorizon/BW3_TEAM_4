import { Pencil } from "react-bootstrap-icons"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const LanguageCard = function () {
  const [showLanguageModal, setShowLanguageModal] = useState(false)
  const navigate = useNavigate()


  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <div className="language-row">
            <h5>Profile language</h5>
            <Pencil className="pencil-icon" onClick={() => setShowLanguageModal(true)} />
          </div>
          <p>Italiano</p>

          <hr />

          <div className="language-row">
            <h5>Public profile & URL</h5>
            <Pencil className="pencil-icon" onClick={() => navigate("/settings")} />
          </div>
          <p>www.linkedin.com/in/name</p>
        </div>
      </div>

      {/* modale lingua*/}
      <Modal show={showLanguageModal} onHide={() => setShowLanguageModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit language</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Form</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLanguageModal(false)}>
            Close
          </Button>

          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default LanguageCard
