const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20"

import getCommentsAction from "./getComments"

const deleteCommentAction = function (commentId, postId) {
  return function (dispatch) {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch(getCommentsAction(postId))
        } else {
          throw new Error("Errore eliminazione commento")
        }
      })

      .catch((error) => {
        console.log(error)
      })
  }
}

export default deleteCommentAction
