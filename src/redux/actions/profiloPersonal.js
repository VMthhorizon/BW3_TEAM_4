export const POST_PROFILE_PICTURES = "POST_PROFILE_PICTURES";

export const uploadProfilePictureAction = (selectedFile) => {
  return (dispatch) => {
    const picture = new FormData();
    picture.append("profile", selectedFile);

    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/6a0c26c274041f00150bfb17/picture",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjMjZjMjc0MDQxZjAwMTUwYmZiMTciLCJpYXQiOjE3NzkxODEyNTAsImV4cCI6MTc4MDM5MDg1MH0.tEZZKlUAnTx79WB0uAoHzzlR_CrEQW4ZMR4g2PQd7A0",
        },
        body: picture,
      },
    )
      .then((res) => {
        if (res.ok) {
          alert("PROFILO MODIFICATO");
          return res.json();
        } else {
          throw new Error("ERRORE");
        }
      })
      .then((data) => {
        dispatch({
          type: POST_PROFILE_PICTURES,
          payload: data,
        });
      })
      .catch((err) => {
        console.error(err);
        alert("ERRORE NEL CARICAMENTO DELL'IMMAGINE, RIPROVA!");
      });
  };
};
