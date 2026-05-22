export const DELETE_POST = "DELETE_POST"

// FETCH PER ELIMINARE UNA EXPERIENCE

const postDeleteAction = (postId) => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjOGRiNzc0MDQxZjAwMTUwYmZiYTAiLCJpYXQiOjE3NzkyMDc2MDcsImV4cCI6MTc4MDQxNzIwN30.HMrBR3Fc1AQqNEUSWBcW6BdUr9vynsKNjitPN7CA_dU",
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: DELETE_POST,
            payload: postId,
          })
        } else {
          throw new Error("errore nella response")
        }
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}

export default postDeleteAction
