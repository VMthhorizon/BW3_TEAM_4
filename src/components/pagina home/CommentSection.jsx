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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments])

  useEffect(() => {
    dispatch(getProfileAllListAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // funzione data
  function getTimeAgo(date) {
    const now = new Date()

    const target = new Date(date)

    const diffInSeconds = Math.floor((now - target) / 1000)

    if (diffInSeconds < 5) return "ora"

    if (diffInSeconds < 60) return `${diffInSeconds} secondi`

    const diffInMinutes = Math.floor(diffInSeconds / 60)

    if (diffInMinutes < 60) {
      return diffInMinutes === 1 ? "1 minuto" : `${diffInMinutes} minuti`
    }

    const diffInHours = Math.floor(diffInMinutes / 60)

    if (diffInHours < 24) {
      return diffInHours === 1 ? "1 ora" : `${diffInHours} ore`
    }

    const diffInDays = Math.floor(diffInHours / 24)

    if (diffInDays < 7) {
      return diffInDays === 1 ? "1 giorno" : `${diffInDays} giorni`
    }

    const diffInWeeks = Math.floor(diffInDays / 7)

    if (diffInWeeks < 4) {
      return diffInWeeks === 1 ? "1 settimana" : `${diffInWeeks} settimane`
    }

    const diffInMonths = Math.floor(diffInWeeks / 4)

    return diffInMonths === 1 ? "1 mese" : `${diffInMonths} mesi`
  }

  return (
    <div className="my-3 px-3">
      {/* avatar + input commento */}
      <div className="d-flex gap-2 mb-3 align-items-center">
        {/* avatar input commento */}
        <img
          src={profilo?.image || avatarPlaceholder}
          alt="avatar"
          className="comment-avatar-input"
          />
          {/* input commento */}
        <input
          type="text"
          className="comment-input"
          placeholder="Scrivi un commento..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      {[...comments]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

        .map((comment) => {
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
                    <div className="d-flex justify-content-between align-items-start">
                      {/* autore */}
                      <span className="comment-author">{comment.author}</span>

                      {/* data + azioni */}
                      <div className="d-flex flex-column align-items-end">
                        <span className="comment-date">
                          {getTimeAgo(comment.createdAt)}
                        </span>

                        {myComment && (
                          <div className="comment-icons">
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
                                dispatch(
                                  deleteCommentAction(comment._id, postId),
                                )
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* testo commento */}
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
                      <p className="comment-text fs-6 mb-0">
                        {comment.comment}
                      </p>
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
