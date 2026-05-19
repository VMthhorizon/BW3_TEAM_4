import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import SidebarItem from "./SidebarItem"

import getProfileAllListAction from "../../../../redux/actions/profileAction/ProfileAllList"

const ViewedPeopleCard = function () {
  const [show, setShow] = useState(false)

  const dispatch = useDispatch()

  const viewedPeople = useSelector((state) => state.profile.profiles)

  useEffect(() => {
    dispatch(getProfileAllListAction())
  }, [dispatch])

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5>Altri profili consultati</h5>

          {/* viewed people map start */}
          {viewedPeople.slice(10, 15).map((person) => (
            <SidebarItem
              key={person._id}
              image={person.image}
              title={person.name + " " + person.surname}
              description={person.title}
              buttonText="Visualizza"
              rounded={true}
            />
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
          {viewedPeople.slice(10, 30).map((person) => (
            <SidebarItem
              key={person._id}
              image={person.image}
              title={person.name + " " + person.surname}
              description={person.title}
              buttonText="Visualizza"
              rounded={true}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ViewedPeopleCard
