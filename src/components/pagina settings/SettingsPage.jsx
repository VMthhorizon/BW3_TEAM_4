import { Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Gear, ShieldLock, Eye, Database, Bell } from "react-bootstrap-icons";
import { TOGGLE_DARK_MODE } from "../../redux/actions/themeActions/toggleDarkMode";

const SettingsPage = function () {
  const profilo = useSelector((state) => state.profile.me);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <Container fluid className="settings-page px-0">
      {/* mobile nav */}
      <div
        className="
          bg-white
          d-flex
          d-md-none
          gap-2
          overflow-auto
          px-3
         
          settings-mobile-nav
          flex-column
        "
      >
        <div className="my-4 d-flex gap-3 align-items-center">
          <img
            style={{ width: "70px" }}
            className="rounded-circle fs-4"
            src={profilo?.image}
          ></img>
          <h4 className="fw-bold fs-1 mb-0">Impostazioni</h4>
        </div>
        <div className="gap-1 flex-column flex-sm-row justify-content-between d-flex">
          <h6
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "8px",
            }}
            className="p-0 text-decoration-underline fs-6 settings-sidebar-item active"
          >
            Preferenze account
          </h6>
          <h6
            style={{
              cursor: "pointer",
            }}
            className="text-muted fw-bold"
          >
            Accesso e sicurezza
          </h6>
          <h6
            style={{
              cursor: "pointer",
            }}
            className="text-muted fw-bold"
          >
            Visibilità
          </h6>
          <h6
            style={{
              cursor: "pointer",
            }}
            className="text-muted fw-bold"
          >
            Privacy dei dati
          </h6>
          <h6
            style={{
              cursor: "pointer",
            }}
            className="text-muted fw-bold"
          >
            Notifiche
          </h6>
        </div>
      </div>

      <div className="d-flex align-items-stretch">
        <div
          className=" rounded-bottom border-bottom border-1 settings-sidebar d-none d-md-block flex-shrink-0 p-3"
          style={{ width: "250px" }}
        >
          <div className="sticky-sidebar">
            {/* profilo */}
            <div className="d-flex align-items-center gap-3 mb-5">
              <img
                src={profilo?.image}
                alt="avatar"
                className="settings-sidebar-avatar"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/me")}
              />
              <h4 className="fw-bold mb-0">Impostazioni</h4>
            </div>

            <div className="settings-sidebar-item active">
              <Gear size={22} />
              <h5>Preferenze account</h5>
            </div>

            <div className="settings-sidebar-item">
              <ShieldLock size={22} />
              <h5>Accesso e sicurezza</h5>
            </div>

            <div className="settings-sidebar-item">
              <Eye size={22} />
              <h5>Visibilità</h5>
            </div>

            <div className="settings-sidebar-item">
              <Database size={22} />
              <h5>Privacy dei dati</h5>
            </div>

            <div className="settings-sidebar-item">
              <Bell size={22} />
              <h5>Notifiche</h5>
            </div>
          </div>
        </div>

        <div className="flex-grow-1 pt-4 px-3 px-md-5">
          <div className="mx-auto w-100" style={{ maxWidth: "650px" }}>
            {/* card 1 */}
            <Card className="settings-card border-0">
              <Card.Body>
                <h3 className="settings-card-title mb-0">
                  Informazioni profilo
                </h3>

                <div className="settings-row ps-1">
                  <span>Nome, località e settore</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Informazioni demografiche personali</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Verifiche</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
            {/* card 2 */}
            <Card className="settings-card border-0 mt-3">
              <Card.Body>
                <h3 className="settings-card-title mb-0">Visualizzazione</h3>

                <div className="settings-row ps-1">
                  <span>Modalità scura</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
            {/* card 3 */}
            <Card className="settings-card border-0">
              <Card.Body>
                <h3 className="settings-card-title mb-0">
                  Preferenze Generali
                </h3>

                <div className="settings-row ps-1">
                  <span>Lingua</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Contenuto dei linguaggi</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Autoplay dei video</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Suoni</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
                <hr className="m-0" />
                <div
                  className="settings-row"
                  onClick={() => {
                    dispatch({
                      type: TOGGLE_DARK_MODE,
                    });
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    Modalità scura{" "}
                    {darkMode ? (
                      <i class="bi bi-moon-stars"></i>
                    ) : (
                      <i class="bi bi-brightness-high"></i>
                    )}
                  </span>

                  <div className="form-check form-switch m-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={darkMode}
                      readOnly
                    />
                  </div>
                </div>

                <div className="settings-row ps-1">
                  <span>Mostra foto profilo</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Feeds preferiri</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Persone che non segui piu</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
            {/* card 4 */}
            <Card className="settings-card border-0">
              <Card.Body>
                <h3 className="settings-card-title mb-0">
                  Opzioni di Sincronizzazione
                </h3>

                <div className="settings-row ps-1">
                  <span>Sincronizza calendario</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Sincronizza contatti</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
            {/* card 5 */}
            <Card className="settings-card border-0">
              <Card.Body>
                <h3 className="settings-card-title mb-0">
                  Iscrizioni & pagamenti
                </h3>

                <div className="settings-row ps-1">
                  <span>Aggiorna gratuitamente</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Cronologia acquisti</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Verifiche</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
            {/* card 6 */}
            <Card className="settings-card border-0">
              <Card.Body>
                <h3 className="settings-card-title mb-0">Partner & servizi</h3>

                <div className="settings-row ps-1">
                  <span>Microsoft</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
            {/* card 3 */}
            <Card className="settings-card border-0">
              <Card.Body>
                <h3 className="settings-card-title mb-0">Gestione account</h3>

                <div className="settings-row ps-1">
                  <span>Iberna account</span>
                  <i className="bi bi-chevron-right"></i>
                </div>

                <hr className="m-0" />

                <div className="settings-row ps-1">
                  <span>Chiudi ed elimina account</span>
                  <i className="bi bi-chevron-right"></i>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SettingsPage;
