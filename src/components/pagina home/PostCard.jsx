import { Card } from "react-bootstrap"

const PostCard = function ({ post }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h6>{post.username}</h6>

        <p>{post.text}</p>
      </Card.Body>
    </Card>
  )
}

export default PostCard
