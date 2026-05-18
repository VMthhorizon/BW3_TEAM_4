import { useState } from "react"
import { Modal } from "react-bootstrap"
import SidebarItem from "./SidebarItem"

const SuggestedPeopleCard = function () {
  // prova di map
  const people = [
    {
      name: "Snoopy",
      role: "Senior Nap Engineer",
    },

    {
      name: "Woodstock",
      role: "Junior Flying Consultant",
    },
    {
      name: "Charlie Brown",

      role: "Professional Overthinker",
    },
  ]

  const [show, setShow] = useState(false)

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5>Persone che potresti conoscere</h5>
          <p>Del tuo settore</p>

          {/* suggested people map start */}
          {people.map((person) => (
            <SidebarItem
              image="https://placehold.co/50"
              title={person.name}
              description={person.role}
              buttonText="+ Collegati"
              rounded={true}
            />
          ))}
          {/* suggested people map end */}
        </div>

        <div className="show-all" onClick={() => setShow(true)}>
          Mostra tutto →
        </div>
      </div>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Persone che potresti conoscere</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {people.map((person) => (
            <SidebarItem
              image="https://placehold.co/50"
              title={person.name}
              description={person.role}
              buttonText="+ Collegati"
              rounded={true}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SuggestedPeopleCard
