const SuggestedPeopleCard = function () {
  return (
    <div className="sidebar-card">
      <div className="sidebar-card-content">
        <h5>Persone che potresti conoscere</h5>
        <p>Del tuo settore</p>

        <div className="sidebar-item">
          <img
            className="round-avatar"
            src="https://placehold.co/50"
            alt="profile img"
          />
          <div className="sidebar-content">
            <h6>Snoopy</h6>
            <p>Senior Nap Engineer</p>
            <button>+ Collegati</button>
          </div>
        </div>
      </div>

      <div className="show-all">Mostra tutto →</div>
    </div>
  )
}

export default SuggestedPeopleCard
