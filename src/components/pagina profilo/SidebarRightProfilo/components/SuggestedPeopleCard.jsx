import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import SidebarItem from "./SidebarItem"

import getProfileAllListAction from "../../../../redux/actions/profileAction/ProfileAllList"

const SuggestedPeopleCard = function () {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const people = useSelector((state) => state.profile.profiles)

  useEffect(() => {
    dispatch(getProfileAllListAction())
  }, [dispatch])

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5>Persone che potresti conoscere</h5>
          <p>Del tuo settore</p>

          {/* suggested people map start */}
          {people.slice(0, 5).map((person) => (
            <SidebarItem
              key={person._id}
              image={person.image}
              title={person.name + " " + person.surname}
              description={person.title}
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
          {people.slice(0, 20).map((person) => (
            <SidebarItem
              key={person._id}
              image={person.image}
              title={person.name + " " + person.surname}
              description={person.title}
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
