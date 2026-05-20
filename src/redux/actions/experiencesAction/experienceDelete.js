export const DELETE_EXPERIENCES = "DELETE_EXPERIENCES";

// FETCH PER ELIMINARE UNA EXPERIENCE

const experienceDeleteAction = (userId, expId) => {
  return (dispatch) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20",
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          dispatch({
            type: DELETE_EXPERIENCES,
            payload: expId,
          });
        } else {
          throw new Error("errore nella response");
        }
      })
      .catch((error) => {
        console.log("errore nella fetch", error);
      });
  };
};

export default experienceDeleteAction;
