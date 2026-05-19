import { Card } from "react-bootstrap"

const Card3SidebarSx = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Text className="mb-0">
          <i className="bi bi-bookmark-fill text-black"></i>
          <span className="fw-bold d-inline-block ms-2 small">
            Elementi salvati
          </span>
        </Card.Text>
        <Card.Text className="mb-0">
          <i className="bi bi-people-fill text-black"></i>
          <span className="fw-bold d-inline-block ms-2 small">Gruppi</span>
        </Card.Text>
        <Card.Text className="mb-0">
          <i className="bi bi-newspaper text-black"></i>
          <span className="fw-bold d-inline-block ms-2 small">Newsletter</span>
        </Card.Text>
        <Card.Text className="mb-0">
          <i className="bi bi-calendar-event text-black"></i>
          <span className="fw-bold d-inline-block ms-2 small">Eventi</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Card3SidebarSx
