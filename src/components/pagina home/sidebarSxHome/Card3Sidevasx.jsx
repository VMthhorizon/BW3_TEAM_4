import { Card } from "react-bootstrap"

const Card3SidebarSx = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Text className="mb-0">
          <i class="bi bi-bookmark-fill text-black"></i>
          <p className="fw-bold d-inline-block ms-2 small">Elementi salvati</p>
        </Card.Text>
        <Card.Text className="mb-0">
          <i class="bi bi-people-fill text-black"></i>
          <p className="fw-bold d-inline-block ms-2 small">Gruppi</p>
        </Card.Text>
        <Card.Text className="mb-0">
          <i class="bi bi-newspaper text-black"></i>
          <p className="fw-bold d-inline-block ms-2 small">Newsletter</p>
        </Card.Text>
        <Card.Text className="mb-0">
          <i class="bi bi-calendar-event text-black"></i>
          <p className="fw-bold d-inline-block ms-2 small">Eventi</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Card3SidebarSx
