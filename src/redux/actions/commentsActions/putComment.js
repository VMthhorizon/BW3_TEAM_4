import getCommentsAction from "./getComments"

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20"

const putCommentAction = function (commentId, updatedComment, postId) {
  return function (dispatch) {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "PUT",
      body: JSON.stringify({
        comment: updatedComment,
        rate: "5",
        elementId: postId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(getCommentsAction(postId))
        } else {
          throw new Error("Errore modifica commento")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default putCommentAction
