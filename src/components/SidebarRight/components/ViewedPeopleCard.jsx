import { useState } from "react";
import { Modal } from "react-bootstrap";
import SidebarItem from "./SidebarItem";

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
  ];

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5>Altri profili consultati</h5>

          {/* viewed people map start */}
          {viewedPeople.map((person) => (
            <SidebarItem
              image="https://placehold.co/50"
              title={person.name}
              description={person.role}
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
          {viewedPeople.map((person) => (
            <SidebarItem
              image="https://placehold.co/50"
              title={person.name}
              description={person.role}
              buttonText="Visualizza"
              rounded={true}
            />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewedPeopleCard;
