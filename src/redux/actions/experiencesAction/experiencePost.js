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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20",
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
