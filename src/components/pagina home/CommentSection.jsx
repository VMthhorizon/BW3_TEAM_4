import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import getCommentsAction from "../../redux/actions/commentsActions/getComments"

const CommentSection = function ({ postId }) {
  const dispatch = useDispatch()

  const comments = useSelector((state) => state.comments.list)

  // stato input commento
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    dispatch(getCommentsAction(postId))
  }, [dispatch, postId])

  return (
    <div className="mt-3">
      {/* input commento */}
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Scrivi un commento..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <button className="btn">Invia</button>
      </div>

      {/* lista commenti */}
      {comments.map((comment) => (
        <div key={comment._id} className="sidebar-card mb-2">
          <div className="sidebar-card-content">
            <p className="mb-0">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommentSection
