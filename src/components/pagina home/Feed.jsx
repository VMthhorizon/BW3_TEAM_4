import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import getPostAllAction from "../../redux/actions/postAction/postAll"

import PostCard from "./PostCard"

const Feed = function () {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.post.list || [])

  // quanti post mostrare
  const [visiblePosts, setVisiblePosts] = useState(20)

  useEffect(() => {
    dispatch(getPostAllAction())
  }, [dispatch])

  return (
    <>
      {/* lista posts */}
      {[...posts]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, visiblePosts)
        .map((post) => (
          <PostCard key={post._id} post={post} />
        ))}

      {/* mostra altri */}
      {visiblePosts < posts.length && (
        <div
          className="show-all sidebar-card mb-2"
          onClick={() => setVisiblePosts(visiblePosts + 10)}
        >
          Mostra altri post
        </div>
      )}
    </>
  )
}

export default Feed
