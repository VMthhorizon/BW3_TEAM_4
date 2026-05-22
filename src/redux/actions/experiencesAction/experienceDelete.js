export const DELETE_EXPERIENCES = "DELETE_EXPERIENCES"

// FETCH PER ELIMINARE UNA EXPERIENCE

const experienceDeleteAction = (userId, expId) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjOGRiNzc0MDQxZjAwMTUwYmZiYTAiLCJpYXQiOjE3NzkyMDc2MDcsImV4cCI6MTc4MDQxNzIwN30.HMrBR3Fc1AQqNEUSWBcW6BdUr9vynsKNjitPN7CA_dU",
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: DELETE_EXPERIENCES,
            payload: expId,
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

export default experienceDeleteAction
