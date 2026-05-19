export const POST_EXPERIENCE_PICTURES = "POST_EXPERIENCE_PICTURES"

const AddExperienceImagesAction = (file, userId, expId) => {
  return (dispatch) => {
    const picture = new FormData()
    picture.append("experience", file)

    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}/picture`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20",
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
          type: POST_EXPERIENCE_PICTURES,
          payload: data,
        })
      })
      .catch((error) => {
        console.log("errore nella fetch", error)
      })
  }
}
export default AddExperienceImagesAction
