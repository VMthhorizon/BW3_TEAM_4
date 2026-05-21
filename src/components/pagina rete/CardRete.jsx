import { Button, Card, Col } from "react-bootstrap";

const CardRete = ({ users }) => {
  if (!users) return null;
  return users
    .reverse()
    .slice(0, 20)
    .map((user) => {
      return (
        <Col className="p-2 ">
          <Card
            className="w-100 position-relative d-flex flex-column justify-content-between"
            style={{ height: "300px" }}
          >
            <Card.Img
              variant="top"
              src="https://img.magnific.com/foto-gratuito/pianta-della-palma-dell-agave-su-fondo-grigio_53876-110285.jpg"
              height={75}
            />
            <img
              src={user.image}
              className="border border-2 border-light rounded-circle object-fit-cover
              mt-3 ms-2"
              style={{
                position: "absolute",
                width: "50%",
                top: "50",
                left: "20%",
                aspectRatio: "1 / 1",
              }}
            />
            <Card.Body className="text-center d-flex flex-column justify-content-between">
              <Card.Title
                className="mb-0 mt-5 fw-bold"
                style={{ fontSize: "0.9rem" }}
              >
                {user.name + " " + user.surname}
              </Card.Title>
              <Card.Text className="small mb-0" style={{ fontSize: "0.7rem" }}>
                {user.title}
              </Card.Text>
              <Card.Text
                className="small text-secondary"
                style={{ fontSize: "0.7rem" }}
              >
                {user.area}
              </Card.Text>
              <Button variant="outline-primary rounded-5">Collegati +</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
};
export default CardRete;
