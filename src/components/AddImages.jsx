import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProfileImagesAction from "../redux/actions/images action/pictureProfilo";
import Modal from "react-bootstrap/Modal";
const AddImages = function () {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const dispatch = useDispatch();

  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me;
  });
  const [ShowModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <>
      <Button
        className="rounded-circle"
        variant="light"
        onClick={() => {
          handleShow();
        }}
      >
        <i className="bi bi-pencil "></i>
      </Button>
      <Modal show={ShowModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cambia la tua immagine profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="file"
            onChange={(e) => {
              setSelectedPicture(e.target.files[0]);
            }}
          />
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button
            disabled={!selectedPicture || !profilo}
            onClick={() => {
              if (selectedPicture) {
                (dispatch(
                  AddProfileImagesAction(selectedPicture, profilo?._id),
                ),
                  handleClose());
              } else {
                Alert("CAMBIA LA TUA IMMAGINE");
              }
            }}
          >
            Carica Foto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddImages;
