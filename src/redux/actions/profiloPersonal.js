export const GET_PROFILE_PERSONALE = "GET_PROFILE_PERSONALE";

// FETCH PROFILO PERSONALE
const getProfilePersonaleAction = () => {
  return (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella response");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_PROFILE_PERSONALE,
          payload: data,
        });
      })
      .catch((error) => {
        console.log("errore nella fetch", error);
      });
  };
};
export default getProfilePersonaleAction;
