import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import getProfileAllListAction from "../../redux/actions/profileAction/ProfileAllList"
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
  const profiles = useSelector((state) => state.profile.profiles)

  const dispatch = useDispatch()

  console.log("prof", profiles)
  console.log("not", notifications)

  useEffect(() => {
    dispatch(getProfileAllListAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              notifications.map((notification) => {
                const userCommented = profiles?.find(
                  (user) => user.username === notification.author,
                )

                return (
                  <Row
                    key={notification.id}
                    className="d-flex align-items-center border-bottom py-2 "
                  >
                    <Col xs={1}>
                      <img
                        src={userCommented?.image}
                        alt={notification.author}
                        className="rounded-circle"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                        }}
                      />
                    </Col>

                    <Col>
                      <p className="mb-0">
                        <span className="fw-bold">{notification.author}</span>
                        <br />
                        Ha commentato il tuo post:
                        <span className="fst-italic">
                          "{notification.text}"
                        </span>
                      </p>
                    </Col>

                    <Col xs={3} className="text-end">
                      <p className="mb-0">{timeAgo(notification.time)}</p>
                    </Col>
                  </Row>
                )
              })
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
export default CentralNotifiche
