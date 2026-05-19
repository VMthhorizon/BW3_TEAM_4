const SidebarItem = function ({
  image,
  title,
  description,
  buttonText,
  rounded,
}) {
  return (
    <div className="sidebar-item">
      <img
        className={rounded ? "round-avatar" : ""}
        src={image}
        alt="sidebar item"
      />

      <div className="sidebar-content">
        <h6>{title}</h6>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  )
}

export default SidebarItem
