import {
  HandThumbsUp,
  ChatText,
  Repeat,
  Send,
  Trash3,
  PencilSquare,
} from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import getProfilePersonaleAction from "../../redux/actions/profileAction/profiloPersonal"
import { Button, Form, Modal, Col } from "react-bootstrap"
import postPutAction from "../../redux/actions/postAction/postPut"
import getPostAllListAction from "../../redux/actions/postAction/postAll"
import postPostAction from "../../redux/actions/postAction/postPost"
import { useState } from "react"
import postDeleteAction from "../../redux/actions/postAction/postDelete"
import AddPostImagesAction from "../../redux/actions/images action/picturePost"

const PostCard = function ({ post }) {
  const [show, setShow] = useState(false)
  const [postText, setPostText] = useState("")
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [image, setImage] = useState(null)

  const handleClose = () => {
    setShow(false)
    setPostText("")
  }
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()
  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me
  })

  const myPost = post?.username === profilo?.username

  useDispatch(() => {
    dispatch(getProfilePersonaleAction)
  }, [dispatch])

  return (
    <>
      <div className="sidebar-card my-2">
        <div className="sidebar-card-content">
          {/* header */}
          <div className="d-flex align-items-center gap-2 mb-3">
            <img
              src={post.user.image}
              alt="avatar"
              className="round-avatar"
              style={{
                width: "48px",
                height: "48px",
                objectFit: "cover",
              }}
            />

            <div>
              <h6 className="mb-0">
                {post.user.name} {post.user.surname}
              </h6>

              <p className="text-muted mb-0">
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* testo */}
          <h5 className="mb-3 fw-light">{post.text}</h5>

          {/* immagine post */}
          {post.image && (
            <img
              src={post.image}
              alt="post"
              className="img-fluid rounded mb-3"
            />
          )}

          {/* footer */}
          <div className="d-flex justify-content-around border-top pt-2">
            <div className="post-action">
              <HandThumbsUp />
              <span>Consiglia</span>
            </div>

            <div className="post-action">
              <ChatText />
              <span>Commenta</span>
            </div>

            <div className="post-action">
              <Repeat />
              <span>Diffondi</span>
            </div>

            <div className="post-action">
              <Send />
              <span>Invia</span>
            </div>
            {myPost && (
              <>
                <div className="post-action">
                  <PencilSquare />
                  {console.log(post)}
                  <span
                    onClick={() => {
                      setPostText(post.text)

                      setSelectedPostId(post._id)

                      setShow(true)
                      handleShow()
                    }}
                  >
                    Modifica
                  </span>
                </div>

                <div className="post-action">
                  <Trash3 />
                  <span
                    onClick={() => {
                      dispatch(postDeleteAction(post._id))
                    }}
                  >
                    Elimina
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={(e) => e.preventDefault()}>
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
                  setPostText(e.target.value)
                }}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              controlId="validationCustom01"
              className="mt-2"
            >
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              type="submit"
              // onClick={() => {
              //   if (selectedPostId) {
              //     dispatch(
              //       postPutAction(selectedPostId, { text: postText }),
              //     ).then(() => {
              //       dispatch(getPostAllListAction())
              //     })
              //   } else {
              //     dispatch(postPostAction({ text: postText })).then(() => {
              //       dispatch(getPostAllListAction())
              //     })
              //   }
              //   setShow(false)
              // }}

              onClick={async () => {
                if (selectedPostId) {
                  await dispatch(
                    postPutAction(selectedPostId, { text: postText }),
                  )
                  if (image) {
                    await dispatch(AddPostImagesAction(image, selectedPostId))
                  }
                  dispatch(getPostAllListAction())
                } else {
                  const resp = await dispatch(
                    postPostAction({ text: postText }),
                  )

                  const newIdPost = resp.payload._id

                  if (image) {
                    await dispatch(AddPostImagesAction(image, newIdPost))
                  }
                  dispatch(getPostAllListAction())
                }
                setShow(false)
              }}
            >
              Post
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default PostCard
