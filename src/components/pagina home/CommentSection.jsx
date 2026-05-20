import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import getCommentsAction from "../../redux/actions/commentsActions/getComments"

import postCommentAction from "../../redux/actions/commentsActions/postComment"

const CommentSection = function ({ postId }) {
  const dispatch = useDispatch()

  const comments = useSelector((state) => state.comments.list)

  // stato input commento
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    dispatch(getCommentsAction(postId))
  }, [dispatch, postId])

  const handleSubmit = () => {
    if (!newComment.trim()) return

    dispatch(postCommentAction(newComment, postId))

    setNewComment("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()

      handleSubmit()
    }
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
      {comments.map((comment) => (
        <div key={comment._id} className="comment-box mb-2">
          <div className="py-2 px-3">
            <p className="mb-0 fs-6">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentSection
