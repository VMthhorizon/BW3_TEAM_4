import { Card, Image } from "react-bootstrap";

const Card1SidebarSx = ({ profilo }) => {
  if (!profilo) return null;

  return (
    <Card className="position-relative">
      <Card.Img
        variant="top"
        src="https://img.magnific.com/foto-gratuito/pianta-della-palma-dell-agave-su-fondo-grigio_53876-110285.jpg"
        height={200}
      />
      <Image
        src={profilo.image}
        className=" border border-2 border-light rounded-circle object-fit-cover
              mt-3 ms-2"
        style={{
          position: "absolute",
          width: "35%",
          bottom: "100px",
          aspectRatio: "1 / 1",
        }}
      />
      <Card.Body>
        <Card.Title className="mb-0 mt-5 fw-bold">
          {profilo.name.charAt(0).toUpperCase() +
            profilo.name.slice(1) +
            " " +
            profilo.surname.charAt(0).toUpperCase() +
            profilo.surname.slice(1)}
        </Card.Title>
        <Card.Text className="small mb-0">{profilo.title}</Card.Text>
        <Card.Text className="small text-secondary">{profilo.area}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Card1SidebarSx;
