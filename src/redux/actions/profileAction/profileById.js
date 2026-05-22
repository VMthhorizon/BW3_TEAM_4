export const GET_PROFILE_BY_ID = "GET_PROFILE_BY_ID"

// FETCH PROFILO SPECFICO TRAMITE ID
const getProfileByIdAction = (UserId) => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${UserId}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjOGRiNzc0MDQxZjAwMTUwYmZiYTAiLCJpYXQiOjE3NzkyMDc2MDcsImV4cCI6MTc4MDQxNzIwN30.HMrBR3Fc1AQqNEUSWBcW6BdUr9vynsKNjitPN7CA_dU",
      },
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
          type: GET_PROFILE_BY_ID,
          payload: data,
        })
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}
export default getProfileByIdAction
