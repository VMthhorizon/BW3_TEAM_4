import { useState } from "react"
import { Modal } from "react-bootstrap"
import SidebarItem from "./SidebarItem"

const SuggestedPagesCard = function () {
  // prova di map
  const pages = [
    {
      name: "Peanuts Inc.",
      description: "Intrattenimento • 2M follower",
    },

    {
      name: "Cat Pictures Daily",
      description: "Media • 850k follower",
    },

    {
      name: "Nap Lovers Club",
      description: "Lifestyle • 120k follower",
    },
  ]

  const [show, setShow] = useState(false)

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5>Potrebbero interessarti</h5>

          <p>Pagine per te</p>

          {/* suggested pages map start */}

          {pages.map((page) => (
            <SidebarItem
              image="https://placehold.co/50"
              title={page.name}
              description={page.description}
              buttonText="+ Segui"
            />
          ))}

          {/* suggested pages map end */}
        </div>

        <div className="show-all" onClick={() => setShow(true)}>
          Mostra tutto →
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pagine per te</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {pages.map((page) => (
            <SidebarItem
              image="https://placehold.co/50"
              title={page.name}
              description={page.description}
              buttonText="+ Segui"
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SuggestedPagesCard
