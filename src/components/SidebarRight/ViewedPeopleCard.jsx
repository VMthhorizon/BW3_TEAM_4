import { useState } from "react"
import { Modal } from "react-bootstrap"

const ViewedPeopleCard = function () {
  // prova di map
  const viewedPeople = [
    {
      name: "Lucy van Pelt",
      role: "Senior Psychiatric Booth Consultant",
    },

    {
      name: "Linus van Pelt",
      role: "Security Specialist",
    },

    {
      name: "Schroeder",
      role: "Classical Music Enthusiast",
    },
  ]

  const [show, setShow] = useState(false)

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5>Altri profili consultati</h5>

          {/* viewed people map start */}
          {viewedPeople.map((person) => (
            <div className="sidebar-item">
              <img
                className="round-avatar"
                src="https://placehold.co/50"
                alt="profile img"
              />

              <div className="sidebar-content">
                <h6>{person.name}</h6>

                <p>{person.role}</p>

                <button>Visualizza</button>
              </div>
            </div>
          ))}
          {/* viewed people map end */}
        </div>

        <div className="show-all" onClick={() => setShow(true)}>
          Mostra tutto →
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Altri profili consultati</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {viewedPeople.map((person) => (
            <div className="sidebar-item">
              <img
                className="round-avatar"
                src="https://placehold.co/50"
                alt="profile img"
              />

              <div className="sidebar-content">
                <h6>{person.name}</h6>

                <p>{person.role}</p>

                <button>Visualizza</button>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ViewedPeopleCard
