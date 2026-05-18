const SuggestedPagesCard = function () {
  return (
    <div className="sidebar-card">
      <div className="sidebar-card-content">
        <h5>Potrebbero interessarti</h5>
        <p>Pagine per te</p>

        <div className="sidebar-item">
          <img
            className="square-logo"
            src="https://placehold.co/50"
            alt="page img"
          />
          <div className="sidebar-content">
            <h6>Peanuts Inc.</h6>
            <p>Intrattenimento • 2M follower</p>
            <button>+ Segui</button>
          </div>
        </div>
      </div>

      <div className="show-all">Mostra tutto →</div>
    </div>
  )
}

export default SuggestedPagesCard
