const SuggestedPeopleCard = function () {
  return (
    <div className="sidebar-card">
      <h5>Persone che potresti conoscere</h5>
      <p>Del tuo settore</p>
      <div className="suggested-person">
        <img
          src="https://placehold.co/50"
          alt="profile img"
        />

        <div className="person-info">
          <h6>Snoopy</h6>

          <p>Senior Nap Engineer</p>

          <button>+ Collegati</button>
        </div>
      </div>
    </div>
  )
}

export default SuggestedPeopleCard
