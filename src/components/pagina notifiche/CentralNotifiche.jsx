import { useState } from "react"
import { Button, Card, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
function timeAgo(timestamp) {
  const diffMs = Date.now() - new Date(timestamp).getTime()

  const seconds = Math.floor(diffMs / 1000)
  const minutes = Math.floor(diffMs / 60000)
  const hours = Math.floor(diffMs / 3600000)
  const days = Math.floor(diffMs / 86400000)

  if (seconds < 60) {
    return `${seconds} secondi fa`
  }

  if (minutes < 60) {
    return `${minutes} minuti fa`
  }

  if (hours < 24) {
    return `${hours} ore fa`
  }

  if (hours < 48 && hours >= 24) {
    return `${days} giorno fa`
  }
  return `${days} giorni fa`
}
const CentralNotifiche = function () {
  const [showNotifications, setShowNotifications] = useState(false)
  const notifications = useSelector((state) => state.notification.list)

  return (
    <>
      <Col xs={12}>
        <div className="p-3 bg-white border rounded-3 d-flex gap-2">
          <Button
            variant="outline-success"
            className="rounded-pill px-3 fw-bold"
          >
            Tutto
          </Button>
          <Button
            variant="outline-success"
            className="rounded-pill px-3 fw-bold"
          >
            Lavoro
          </Button>
          <Button
            variant="outline-success"
            className="rounded-pill px-3 fw-bold"
          >
            I miei post
          </Button>
          <Button
            variant="outline-success"
            className="rounded-pill px-3 fw-bold"
          >
            Menzioni
          </Button>
        </div>
      </Col>
      <Col xs={12} className="mt-2">
        <Card
          show={showNotifications}
          onHide={() => setShowNotifications(false)}
          centered
        >
          <Card.Header closeButton>
            <Card.Title>Notifiche</Card.Title>
          </Card.Header>
          <Card.Body>
            {notifications.length === 0 ? (
              <p className="text-muted mb-0">Nessuna notifica</p>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="border-bottom py-2 d-flex justify-content-between"
                >
                  <p className="mb-0">
                    <span className="fw-bold">{notification.author}</span> ha
                    commentato il tuo post: "{notification.text}"
                  </p>
                  <p className="mb-0">{timeAgo(notification.time)}</p>
                </div>
              ))
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
export default CentralNotifiche
