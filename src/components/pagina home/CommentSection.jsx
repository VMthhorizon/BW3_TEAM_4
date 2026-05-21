import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import getCommentsAction from "../../redux/actions/commentsActions/getComments"
import postCommentAction from "../../redux/actions/commentsActions/postComment"
import deleteCommentAction from "../../redux/actions/commentsActions/deleteComment"
import putCommentAction from "../../redux/actions/commentsActions/putComment"

import avatarPlaceholder from "../../assets/avatar-corretto.png"

import { Pencil, Trash3 } from "react-bootstrap-icons"
import getProfileAllListAction from "../../redux/actions/profileAction/ProfileAllList"

const CommentSection = function ({ postId, setCommentsCount }) {
  const dispatch = useDispatch()

  const comments = useSelector((state) => state.comments.list)

  const profilo = useSelector((state) => state.profile.me)

  // stato input nuovo commento
  const [newComment, setNewComment] = useState("")

  // stato modifica commento
  const [editingCommentId, setEditingCommentId] = useState(null)

  const [editedText, setEditedText] = useState("")

  const profiles = useSelector((state) => {
    return state.profile.profiles
  })

  useEffect(() => {
    dispatch(getCommentsAction(postId))
  }, [dispatch, postId])

  useEffect(() => {
    setCommentsCount(comments.length)
  }, [comments])

  useEffect(() => {
    dispatch(getProfileAllListAction())
  }, [comments])

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
        const matchProfile = profiles.find(
          (profile) => profile.username === comment.author,
        )

        return (
          <div key={comment._id} className="comment-wrapper mb-3">
            <div className="d-flex gap-2 align-items-start">
              {/* avatar */}

              <img
                src={matchProfile?.image || avatarPlaceholder}
                alt="avatar"
                className="comment-avatar"
              />

              {/* contenuto */}
              <div className="comment-content">
                <div className="comment-bubble">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="comment-author">{comment.author}</span>

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

                  {editingCommentId === comment._id ? (
                    <input
                      type="text"
                      className="comment-input mt-2"
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
                    <p className="comment-text">{comment.comment}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentSection
