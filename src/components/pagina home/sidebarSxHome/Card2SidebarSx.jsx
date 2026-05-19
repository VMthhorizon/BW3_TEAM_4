import { Card } from "react-bootstrap"

const Card2SidebarSx = () => {
  return (
    <Card className="my-2">
      <Card.Body>
        <Card.Text className="small text-secondary mb-0">
          Accedi a strumenti per trovare nuovi clienti
        </Card.Text>
        <Card.Text className="small mb-0 fw-bold">
          <span className="premium-icon-box">
            <span className="premium-icon-diagonal"></span>
          </span>
          Prova Premium per 0 €
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Card2SidebarSx
