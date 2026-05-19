import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import getProfilePersonaleAction from "../../redux/actions/profileAction/profiloPersonal";
import { CalendarWeek, Newspaper } from "react-bootstrap-icons";

const PostHomePage = () => {
  const [show, setShow] = useState(false);
  const [postText, setPostText] = useState("");

  const handleClose = () => {
    setShow(false);
    setPostText("");
  };
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });

  const postFetch = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjOGRiNzc0MDQxZjAwMTUwYmZiYTAiLCJpYXQiOjE3NzkyMDc2MDcsImV4cCI6MTc4MDQxNzIwN30.HMrBR3Fc1AQqNEUSWBcW6BdUr9vynsKNjitPN7CA_dU",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: postText,
          }),
        },
      );
      if (response.ok) {
        alert("POST CREATO CON SUCCESSO");
        handleClose();
      } else {
        console.log("ERRORE NEL FILE JSON", response.status);
      }
    } catch (error) {
      console.log("ERRORE SERVER", error);
    }
  };

  useEffect(() => {
    dispatch(getProfilePersonaleAction());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={12} className="bg-white p-3 rounded-3 border border-1">
          <Row>
            <Col xs={12} className="d-flex gap-3 justify-content-between">
              <img
                className="rounded-circle object-fit-cover"
                style={{
                  width: "60px",
                  height: "60px",
                }}
                src={profilo?.image}
              ></img>
              <Button
                variant="outline-light"
                className="px-4 text-start border border-1 w-100 text-black fw-bold rounded-5"
                onClick={() => {
                  handleShow();
                }}
              >
                Crea un post
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              className="d-flex justify-content-evenly g-3 align-items-center"
            >
              <div className="d-flex align-items-center gap-1">
                <CalendarWeek
                  className="fs-4"
                  style={{
                    color: "purple",
                  }}
                ></CalendarWeek>
                <h6 className="m-0 text-muted fw-bolder">Evento</h6>
              </div>
              <div className="d-flex align-items-start gap-1 align-items-center">
                <Newspaper
                  className="fs-4"
                  style={{
                    color: "red",
                  }}
                ></Newspaper>
                <h6 className="m-0 text-muted fw-bolder">Scrivi un articolo</h6>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            postFetch();
          }}
        >
          <Modal.Header className="d-flex gap-3 align-items-center" closeButton>
            <img
              className="rounded-circle object-fit-cover"
              style={{
                width: "70px",
                height: "70px",
              }}
              src={profilo?.image}
            ></img>
            <Modal.Title>{profilo?.name.toUpperCase()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Control
                required
                as="textarea"
                rows={10}
                placeholder="Di cosa vuoi parlare?"
                value={postText}
                onChange={(e) => {
                  setPostText(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default PostHomePage;
