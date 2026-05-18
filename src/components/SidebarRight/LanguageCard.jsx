import { Pencil } from "react-bootstrap-icons"

const LanguageCard = function () {
  return (
    <div className="sidebar-card">
      <div className="sidebar-card-content">
        <div className="language-row">
          <h5>Profile language</h5>
          <Pencil className="pencil-icon" />
        </div>
        <p>Italiano</p>

        <hr />

        <div className="language-row">
          <h5>Public profile & URL</h5>
          <Pencil className="pencil-icon" />
        </div>
        <p>www.linkedin.com/in/name</p>
      </div>
    </div>
  )
}

export default LanguageCard
