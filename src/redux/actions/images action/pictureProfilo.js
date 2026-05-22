export const POST_PROFILE_PICTURES = "POST_PROFILE_PICTURES"

const AddProfileImagesAction = (file, userId) => {
  return (dispatch) => {
    const picture = new FormData()
    picture.append("profile", file)

    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjOGRiNzc0MDQxZjAwMTUwYmZiYTAiLCJpYXQiOjE3NzkyMDc2MDcsImV4cCI6MTc4MDQxNzIwN30.HMrBR3Fc1AQqNEUSWBcW6BdUr9vynsKNjitPN7CA_dU",
        },
        body: picture,
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
          type: POST_PROFILE_PICTURES,
          payload: data,
        })
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}
export default AddProfileImagesAction
