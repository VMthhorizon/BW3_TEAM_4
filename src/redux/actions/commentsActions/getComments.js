export const GET_COMMENTS = "GET_COMMENTS"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjMGE5Njc0MDQxZjAwMTUwYmZiMTEiLCJpYXQiOjE3NzkxNzQwMzgsImV4cCI6MTc4MDM4MzYzOH0.wearIW19fddf_JOanSJ0_whZTAwxzq7Awf2dOtinIxM"

const getCommentsAction = function(postId){
    return function (dispatch){

        fetch(
            "https://striveschool-api.herokuapp.com/api/comments/",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Errore nel recupero commenti")
            }
        })
        .then((data) => {
            // filtro i commenti del post corrente
            const filteredComments = data.filter((comment) => comment.elementId === postId)
            dispatch({
                type: GET_COMMENTS,
                payload: filteredComments,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default getCommentsAction