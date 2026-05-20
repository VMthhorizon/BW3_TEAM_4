import { useNavigate } from "react-router-dom"
import avatar from "../../../../assets/linkedin-avatar.png"

const SidebarItem = function ({
  image,
  title,
  description,
  buttonText,
  rounded,
  id,
}) {
  const navigate = useNavigate()
  return (
    <div className="sidebar-item">
      <img
        className={rounded ? "round-avatar" : ""}
        src={image}
        onError={(e) => {
          e.target.src = avatar
          e.target.classList.add("default-avatar")
        }}
        alt="sidebar item"
      />

      <div className="sidebar-content">
        <h6>{title}</h6>
        <p>{description}</p>
        <button
          onClick={() => {
            navigate(`/profile/${id}`)
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default SidebarItem
