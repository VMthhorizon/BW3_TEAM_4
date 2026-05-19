import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddImagesAction from "../redux/actions/images action/pictureProfilo"

const AddImages = function () {
  const [selectedPicture, setSelectedPicture] = useState(null)
  const dispatch = useDispatch()

  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me
  })

  return (
    <>
      <Form.Control
        type="file"
        onChange={(e) => {
          setSelectedPicture(e.target.files[0])
        }}
      />
      <Button
        disabled={!selectedPicture || !profilo}
        onClick={() => {
          dispatch(AddImagesAction(selectedPicture, profilo._id))
        }}
      >
        Carica Foto
      </Button>
    </>
  )
}

export default AddImages
