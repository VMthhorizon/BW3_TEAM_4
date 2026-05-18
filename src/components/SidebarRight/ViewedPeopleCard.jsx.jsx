const ViewedPeopleCard = function () {
  const viewedPeople = [
    {
      name: "Lucy van Pelt",
      role: "Senior Psychiatric Booth Consultant",
    },

    {
      name: "Linus van Pelt",
      role: "Security Specialist",
    },

    {
      name: "Schroeder",
      role: "Classical Music Enthusiast",
    },
  ]

  return (
    <div className="sidebar-card">
      <div className="sidebar-card-content">
        <h5>Altri profili consultati</h5>

        {/* viewed people map start */}
        {viewedPeople.map((person) => (
          <div className="sidebar-item">
            <img
              className="round-avatar"
              src="https://placehold.co/50"
              alt="profile img"
            />

            <div className="sidebar-content">
              <h6>{person.name}</h6>

              <p>{person.role}</p>

              <button>Visualizza</button>
            </div>
          </div>
        ))}
        {/* viewed people map end */}
      </div>

      <div className="show-all">Mostra tutto →</div>
    </div>
  )
}

export default ViewedPeopleCard
