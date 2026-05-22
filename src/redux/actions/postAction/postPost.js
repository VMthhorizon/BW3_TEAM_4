export const POST_POST = "POST_POST"

// FETCH PER POSTARE UN POST

const postPostAction = (post) => {
  return (dispatch) => {
    return fetch(`https://striveschool-api.herokuapp.com/api/posts`, {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjOGRiNzc0MDQxZjAwMTUwYmZiYTAiLCJpYXQiOjE3NzkyMDc2MDcsImV4cCI6MTc4MDQxNzIwN30.HMrBR3Fc1AQqNEUSWBcW6BdUr9vynsKNjitPN7CA_dU",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
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
          type: POST_POST,
          payload: data,
        })
        return { payload: data }
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}

export default postPostAction
