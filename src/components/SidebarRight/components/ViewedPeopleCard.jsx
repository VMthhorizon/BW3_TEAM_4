import { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import SidebarItem from "./SidebarItem"

const ViewedPeopleCard = function () {
  // prova di map
  // const viewedPeople = [
  //   {
  //     name: "Lucy van Pelt",
  //     role: "Senior Psychiatric Booth Consultant",
  //   },

  //   {
  //     name: "Linus van Pelt",
  //     role: "Security Specialist",
  //   },

  //   {
  //     name: "Schroeder",
  //     role: "Classical Music Enthusiast",
  //   },
  // ]

  const [show, setShow] = useState(false)
  const [viewedPeople, setViewedPeople] = useState([])

  useEffect(() => {
    const token = localStorage.getItem("token")

    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setViewedPeople(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5>Altri profili consultati</h5>

          {/* viewed people map start */}
          {viewedPeople.slice(10,15).map((person) => (
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
