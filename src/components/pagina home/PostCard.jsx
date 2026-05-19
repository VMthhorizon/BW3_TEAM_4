import { HandThumbsUp, ChatText, Repeat, Send } from "react-bootstrap-icons"
import linkedinAvatar from "../../assets/linkedin-avatar.png"

const PostCard = function ({ post }) {
  return (
    <div className="sidebar-card mb-2">
      <div className="sidebar-card-content">
        {/* header */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <img
            src={linkedinAvatar}
            alt="avatar"
            className="round-avatar"
            style={{
              width: "48px",
              height: "48px",
              objectFit: "cover",
            }}
          />

          <div>
            <h6 className="mb-0">{post.username}</h6>

            <p className="text-muted mb-0">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* testo */}
        <p className="mb-3">{post.text}</p>

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
        </div>
      </div>
    </div>
  )
}

export default PostCard
