export const GET_PROFILE_ALL = "GET_PROFILE_ALL"

// FETCH PER TUTTI I PROFILI
const getProfileAllListAction = () => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20",
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
          type: GET_PROFILE_ALL,
          payload: data,
        })
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}
export default getProfileAllListAction
