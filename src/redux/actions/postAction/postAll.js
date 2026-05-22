export const GET_POST_ALL = "GET_POST_ALL"

// FETCH PER TUTTI I PROFILI
const getPostAllListAction = () => {
  return (dispatch) => {
    fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
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
          type: GET_POST_ALL,
          payload: data,
        })
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}
export default getPostAllListAction
