const Analisi = () => {
  return (
    <div className="sidebar-card mb-3">
      <div className="card-body p-4">
        <div className="mb-3">
          <h5 className="fw-bold m-0 text-dark">Analisi</h5>
          <div className="text-secondary d-flex align-items-center small">
            <i className="bi bi-eye-fill me-1"></i>
            <span>Visibile solo a te</span>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="d-flex align-items-start">
              <i className="bi bi-people-fill fs-4 me-3 text-dark"></i>
              <div>
                <h6 className="fw-bold mb-0" style={{ fontSize: "0.95rem" }}>
                  0 visualizzazioni del profilo
                </h6>
                <p className="small text-secondary mb-0">
                  Aggiorna il tuo profilo per attrarre visitatori.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 border-start-md">
            <div className="d-flex align-items-start">
              <i className="bi bi-bar-chart-line-fill fs-4 me-3 text-dark"></i>
              <div>
                <h6 className="fw-bold mb-0" style={{ fontSize: "0.95rem" }}>
                  0 impressioni dei post
                </h6>
                <p className="small text-secondary mb-0">
                  Crea un post per aumentare l’interesse.
                </p>
                <small className="text-muted" style={{ fontSize: "0.75rem" }}>
                  Ultimi 7 giorni
                </small>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 border-start-md">
            <div className="d-flex align-items-start">
              <i className="bi bi-search fs-4 me-3 text-dark"></i>
              <div>
                <h6 className="fw-bold mb-0" style={{ fontSize: "0.95rem" }}>
                  0 comparse nelle ricerche
                </h6>
                <p className="small text-secondary mb-0">
                  Aggiorna il tuo profilo per comparire di più nei risultati di
                  ricerca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="show-all">
        Mostra tutto <i className="bi bi-arrow-right ms-1"></i>
      </div>
    </div>
  );
};

export default Analisi;
