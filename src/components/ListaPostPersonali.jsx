import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPostAllListAction from "../redux/actions/postAction/postAll"
import { Container, Row } from "react-bootstrap"
import PostCardProfiloSelezionato from "./pagina home/PostCardProfiloSelezionato"
// import experiencePutAction from "../redux/actions/experiencesAction/experiencePut"

const ListaPostPersonaliSection = () => {
  const dispatch = useDispatch()

  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.me
  })

  const listaPost = useSelector((storeRedux) => {
    return storeRedux.post.list
  })

  useEffect(() => {
    if (profilo?._id) {
      dispatch(getPostAllListAction(profilo?._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profilo])

  return (
    <>
      <div className="sidebar-card mb-3">
        <div className="sidebar-card-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="m-0">Attività</h5>
          </div>
          <Container>
            <Row>
              {listaPost
                .filter((post) => post.user?._id === profilo._id)
                .reverse()
                .map((post, index) => (
                  <PostCardProfiloSelezionato key={index} post={post} />
                ))}
            </Row>
          </Container>
        </div>

        <div className="show-all">Mostra tutte le esperienze &rarr;</div>
      </div>
    </>
  )
}

export default ListaPostPersonaliSection
