import getCommentsAction from "./getComments"

export const POST_COMMENT = "POST_COMMENT"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjMGE5Njc0MDQxZjAwMTUwYmZiMTEiLCJpYXQiOjE3NzkxNzQwMzgsImV4cCI6MTc4MDM4MzYzOH0.wearIW19fddf_JOanSJ0_whZTAwxzq7Awf2dOtinIxM"


const postCommentAction = function (newComment, postId) {
  return function (dispatch) {
    const commentObject = {
      comment: newComment,
      rate: "5",
      elementId: postId,
    }

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",

      body: JSON.stringify(commentObject),

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("Errore nel POST commento")
        }
      })

      .then(() => {
        dispatch(getCommentsAction(postId))
      })

      .catch((error) => {
        console.log(error)
      })
  }
}

export default postCommentAction
