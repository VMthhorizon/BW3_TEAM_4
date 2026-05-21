import { useEffect } from "react"
import { Briefcase } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import experiencesListAction from "../../redux/actions/experiencesAction/experiencesList"
import { useParams } from "react-router-dom"
// import experiencePutAction from "../redux/actions/experiencesAction/experiencePut"

const ExperienceByIdSection = () => {
  const dispatch = useDispatch()

  const profilo = useSelector((storeRedux) => {
    return storeRedux.profile.selectedProfile
  })

  const listaEsperienze = useSelector((storeRedux) => {
    return storeRedux.experience.list
  })

  const { userId } = useParams()

  useEffect(() => {
    if (profilo?._id) {
      dispatch(experiencesListAction(userId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return (
    <>
      <div className="sidebar-card mb-3">
        <div className="sidebar-card-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="m-0">Esperienza</h5>
            <div className="d-flex gap-3 align-items-center"></div>
          </div>

          {listaEsperienze
            .filter((exp) => exp)
            .map((exp, index) => (
              <div key={index} className="sidebar-item">
                <div className="flex-shrink-0">
                  {exp.image ? (
                    <img src={exp.image} alt="logo" className="rounded" />
                  ) : (
                    <div
                      className="bg-light d-flex align-items-center justify-content-center rounded"
                      style={{ width: "50px", height: "50px" }}
                    >
                      <Briefcase className="text-secondary fs-3" />
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-between w-100">
                  <div className="sidebar-content w-100">
                    <h6 className="fw-bold mb-0 fs-5">{exp.company}</h6>
                    <p className="mb-0 text-black">{exp.role}</p>
                    <p className="mb-0">
                      {exp.startDate.slice(0, 10)} –{" "}
                      {exp.endDate ? exp.endDate.slice(0, 10) : "Presente"}
                    </p>
                    <p className="mb-0">{exp.area}</p>
                    {exp.description && (
                      <p
                        className="mt-2 mb-0 fw-bold"
                        style={{ color: "#333" }}
                      >
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <div className="d-flex ms-5"></div>
                </div>
              </div>
            ))}
        </div>

        <div className="show-all">Mostra tutte le esperienze &rarr;</div>
      </div>
    </>
  )
}

export default ExperienceByIdSection
