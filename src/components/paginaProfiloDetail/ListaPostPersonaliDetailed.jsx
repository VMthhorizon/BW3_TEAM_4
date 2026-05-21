import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import getPostAllListAction from "../../redux/actions/postAction/postAll"
import PostCardProfiloSelezionato from "../pagina home/PostCardProfiloSelezionato"
import { Swiper, SwiperSlide } from "swiper/react"
// import experiencePutAction from "../redux/actions/experiencesAction/experiencePut"

const ListaPostPersonaliDetailedSection = () => {
  const dispatch = useDispatch()

  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.selectedProfile
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
          <div className="d-flex justify-content-between align-items-center ">
            <h5 className="m-0">Attività</h5>
          </div>
          <Swiper
            className="ms-2 mx-1 h-100"
            spaceBetween={20}
            slidesPerView={2.2}
          >
            {listaPost
              .filter((post) => post.user?._id === profilo._id)
              .reverse()
              .slice(0, 6)
              .map((post, index) => (
                <SwiperSlide key={index}>
                  <PostCardProfiloSelezionato post={post} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="show-all">Mostra tutte le esperienze &rarr;</div>
      </div>
    </>
  )
}

export default ListaPostPersonaliDetailedSection
