import { useState } from "react"
import { Modal } from "react-bootstrap"
import SidebarItem from "./SidebarItem"
import epicodeLogo from "../../../../assets/epicode-logo.jpeg"

const SuggestedPagesCard = function () {
  // prova di map
  const pages = [
    {
      name: "Epicode",
      description: "Education • 35k follower",
      image: epicodeLogo,
    },

    {
      name: "Cat Pictures Daily",
      description: "Media • 850k follower",
      image: "https://placecats.com/g/50/50",
    },

    {
      name: "Nap Lovers Club",
      description: "Lifestyle • 120k follower",
      image: "https://placehold.co/50/60a5fa/ffffff?text=N",
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

          {pages.map((page, index) => (
            <SidebarItem
              key={index}
              image={page.image}
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
          {pages.map((page, index) => (
            <SidebarItem
              key={index}
              image={page.image}
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
