export const PUT_POST = "PUT_POST"

// FETCH PER MODIFICARE UNA EXPERIENCE

const postPutAction = (postId, exp) => {
  return (dispatch) => {
    return fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exp),
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
          type: PUT_POST,
          payload: data,
        })
        return {
          payload: data,
        }
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}

export default postPutAction
