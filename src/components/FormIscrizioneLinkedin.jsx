import { Button, Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
const FormIscrizioneLinkedin = function () {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={3} className="bg-white border rounded-3 mt-5">
          <h4>Iscriviti subito a LinkedIn. È gratis!</h4>
          <Form className="p-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" required />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" required>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ricordami" />
            </Form.Group>
            <p className="text-secondary">
              Cliccando su “Accetta e iscriviti” o “Continua”, accetti il
              Contratto di licenza, l’Informativa sulla privacy e l’Informativa
              sui cookie di LinkedIn. LinkedIn è parzialmente supportato da
              annunci pubblicitari, il che significa che potremmo utilizzare i
              tuoi dati per mostrarti contenuti sponsorizzati e annunci che
              riteniamo possano interessarti.
            </p>
            <Button
              variant="primary"
              type="submit"
              className="w-100 rounded-5 h-50"
            >
              Accetta e iscriviti
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default FormIscrizioneLinkedin;
