import { Button, Form, Navbar } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import profilo from "../assets/alessia.png";
import linkedin from "../assets/linkedin.png";
const FormIscrizioneLinkedin = function () {
  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <>
      <Navbar className="bg-trasparent">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={linkedin}
              width="200"
              height="100%"
              className="d-inline-block align-top m-0 p-0"
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={3} className="bg-white border rounded-3 mt-5 p-4">
            <h4>Iscriviti subito a LinkedIn. È gratis!</h4>
            <Form className="p-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" required />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                required
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Ricordami" />
              </Form.Group>
              <p className="text-secondary">
                Cliccando su “Accetta e iscriviti” o “Continua”, accetti il
                Contratto di licenza, l’Informativa sulla privacy e
                l’Informativa sui cookie di LinkedIn. LinkedIn è parzialmente
                supportato da annunci pubblicitari, il che significa che
                potremmo utilizzare i tuoi dati per mostrarti contenuti
                sponsorizzati e annunci che riteniamo possano interessarti.
              </p>
              <Button
                variant="primary"
                type="submit"
                className="w-100 rounded-5 h-50"
              >
                Accetta e iscriviti
              </Button>
              <div className="d-flex align-items-center my-4">
                <div
                  className="flex-grow-1 border-bottom"
                  style={{ borderColor: "#cdcdcd" }}
                ></div>
                <span className="px-3 text-secondary">oppure</span>
                <div
                  className="flex-grow-1 border-bottom"
                  style={{ borderColor: "#cdcdcd" }}
                ></div>
              </div>
              <Button
                variant="outline-dark"
                className="w-100 rounded-5 mb-3 d-flex align-items-center justify-content-center bg-white text-dark border-secondary-subtle"
                style={{ padding: "10px 16px" }}
                onClick={() => console.log("Login Google")}
              >
                <img src={google} alt="Google" width="20" className="me-2" />
                <span className="flex-grow-1 text-center fw-medium">
                  Continua con Google
                </span>
              </Button>
              <Button
                variant="outline-dark"
                className="w-100 rounded-5 mb-4 d-flex align-items-center justify-content-between bg-white text-dark border-secondary-subtle"
                style={{ padding: "8px 16px" }}
                onClick={() => console.log("Login Microsoft")}
              >
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={profilo}
                    className="rounded-circle me-2"
                    width="32"
                    height="32"
                    alt="Avatar"
                  />
                  <div
                    className="d-flex flex-column"
                    style={{ lineHeight: "1.2" }}
                  >
                    <span className="fw-bold" style={{ fontSize: "14px" }}>
                      Continua come Giangiorgio
                    </span>
                    <span className="text-muted" style={{ fontSize: "11px" }}>
                      gian.giorgio@icloud.com
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={microsoft}
                    width="16"
                    alt="Microsoft"
                    className="me-1"
                  />
                </div>
              </Button>
              <div className="text-center mt-3" style={{ fontSize: "15px" }}>
                Hai già un account LinkedIn?{" "}
                <a
                  href="/"
                  className="text-decoration-none fw-bold"
                  style={{ color: "#0a66c2" }}
                >
                  Accedi
                </a>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FormIscrizioneLinkedin;
