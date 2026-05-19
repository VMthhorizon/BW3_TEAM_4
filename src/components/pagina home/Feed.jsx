import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import getPostAllAction from "../../redux/actions/post Action/postAll"

import PostCard from "./PostCard"

const Feed = function () {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.post.list)

  useEffect(() => {
    dispatch(getPostAllAction())
  }, [dispatch])

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </>
  )
}

export default Feed
