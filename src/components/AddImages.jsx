import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadProfilePictureAction } from "./path/verso/le/tue/actions";

const AddImages = function () {
  const [selectedPicture, setSelectedPicture] = useState(null);
  const dispatch = useDispatch();

  return (
    <>
      <Form.Control
        type="file"
        onChange={(e) => {
          setSelectedPicture(e.target.files[0]);
        }}
      />
      <Button
        disabled={!selectedPicture}
        onClick={() => {
          dispatch(uploadProfilePictureAction(selectedPicture));
        }}
      >
        Carica Foto
      </Button>
    </>
  );
};

export default AddImages;
