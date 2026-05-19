import { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"
import SidebarItem from "./SidebarItem"

const SuggestedPeopleCard = function () {
  // prova di map
  // const people = [
  //   {
  //     name: "Snoopy",
  //     role: "Senior Nap Engineer",
  //   },

  //   {
  //     name: "Woodstock",
  //     role: "Junior Flying Consultant",
  //   },
  //   {
  //     name: "Charlie Brown",

  //     role: "Professional Overthinker",
  //   },
  // ]

  const [people, setPeople] = useState([])
  const [show, setShow] = useState(false)

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
        setPeople(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
