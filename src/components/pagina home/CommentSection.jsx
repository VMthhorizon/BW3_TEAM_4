import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import getCommentsAction from "../../redux/actions/commentsActions/getComments"
import postCommentAction from "../../redux/actions/commentsActions/postComment"
import deleteCommentAction from "../../redux/actions/commentsActions/deleteComment"
import putCommentAction from "../../redux/actions/commentsActions/putComment"

import { Pencil, Trash3 } from "react-bootstrap-icons"

const CommentSection = function ({ postId }) {
  const dispatch = useDispatch()

  const comments = useSelector((state) => state.comments.list)

  const profilo = useSelector((state) => state.profile.me)

  // stato input nuovo commento
  const [newComment, setNewComment] = useState("")

  // stato modifica commento
  const [editingCommentId, setEditingCommentId] = useState(null)

  const [editedText, setEditedText] = useState("")

  useEffect(() => {
    dispatch(getCommentsAction(postId))
  }, [dispatch, postId])

  // submit nuovo commento
  const handleSubmit = () => {
    if (!newComment.trim()) return

    dispatch(postCommentAction(newComment, postId))

    setNewComment("")
  }

  // enter nuovo commento
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()

      handleSubmit()
    }
  }

  // submit modifica commento
  const handleEditSubmit = (commentId) => {
    if (!editedText.trim()) return

    dispatch(putCommentAction(commentId, editedText, postId))

    setEditingCommentId(null)

    setEditedText("")
  }

  return (
    <div className="my-3 px-3">
      {/* input commento */}
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="comment-input"
          placeholder="Scrivi un commento..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* lista commenti */}
      {comments.map((comment) => {
        const myComment = comment.author === profilo?.username

        return (
          <div key={comment._id} className="comment-box mb-2">
            <div className="py-2 px-3">
              {editingCommentId === comment._id ? (
                <input
                  type="text"
                  className="comment-input"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()

                      handleEditSubmit(comment._id)
                    }
                  }}
                />
              ) : (
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 fs-6">{comment.comment}</p>

                  {myComment && (
                    <div className="d-flex gap-2">
                      <Pencil
                        className="comment-edit"
                        onClick={() => {
                          setEditingCommentId(comment._id)

                          setEditedText(comment.comment)
                        }}
                      />

                      <Trash3
                        className="comment-delete"
                        onClick={() => {
                          dispatch(deleteCommentAction(comment._id, postId))
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentSection
