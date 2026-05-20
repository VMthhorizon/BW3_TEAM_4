export const POST_POST_PICTURES = "POST_POST_PICTURES"

const AddPostImagesAction = (file, postId) => {
  return (dispatch) => {
    const picture = new FormData()
    picture.append("post", file)

    return fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20",
      },
      body: picture,
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella response")
        }
      })
      .then((data) => {
        dispatch({
          type: POST_POST_PICTURES,
          payload: {
            postId,
            data,
          },
        })
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}
export default AddPostImagesAction
