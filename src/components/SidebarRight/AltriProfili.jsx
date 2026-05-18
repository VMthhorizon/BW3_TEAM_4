const AltriProfili = function () {
  return (
    <div className="sidebar-card">
      <div className="sidebar-card-content">
        <h5>Altri profili consultati</h5>

        <div className="sidebar-item">
          <img
            className="round-avatar"
            src="https://placehold.co/50"
            alt="profile img"
          />

          <div className="sidebar-content">
            <h6>Nome</h6>

            <p>Descrizione</p>

            <button>Visualizza</button>
          </div>
        </div>
      </div>

      <div className="show-all">Mostra tutto →</div>
    </div>
  )
}

export default AltriProfili
