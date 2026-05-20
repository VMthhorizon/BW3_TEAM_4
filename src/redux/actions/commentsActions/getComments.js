export const GET_COMMENTS = "GET_COMMENTS"

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBhZDViOTA2YmJlOTAwMTVkZWU1N2YiLCJpYXQiOjE3NzkwOTQ5NjksImV4cCI6MTc4MDMwNDU2OX0.lCWAGVeHSActGSTjMyk8RMF3Ua0zXKkTnQcNrIuiP20"

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