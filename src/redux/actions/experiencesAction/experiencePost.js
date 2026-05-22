export const POST_EXPERIENCES = "POST_EXPERIENCES"

// FETCH PER POSTARE UNA EXPERIENCE

const experiencePostAction = (id, exp) => {
  return (dispatch) => {
    return fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjOGRiNzc0MDQxZjAwMTUwYmZiYTAiLCJpYXQiOjE3NzkyMDc2MDcsImV4cCI6MTc4MDQxNzIwN30.HMrBR3Fc1AQqNEUSWBcW6BdUr9vynsKNjitPN7CA_dU",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exp),
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella response")
        }
      })
      .then((data) => {
        dispatch({
          type: POST_EXPERIENCES,
          payload: data,
        })
        return { payload: data }
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}

export default experiencePostAction
