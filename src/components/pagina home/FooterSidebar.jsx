import linkedin from "../../assets/linkedin.png";

const FooterSidebar = function () {
  return (
    <div className="text-center small text-muted p-2 pt-0">
      <p className="mb-1">
        <span className="footer-link">Informazioni</span>
        {" • "}
        <span className="footer-link">Accessibilità</span>
      </p>

      <p className="mb-1">
        <span className="footer-link">Centro assistenza</span>
        {" • "}
        <span className="footer-link">Privacy e condizioni</span>
      </p>

      <p className="mb-1">
        <span className="footer-link">Pubblicità</span>
        {" • "}
        <span className="footer-link">Servizi alle aziende</span>
      </p>
      <img
        src={linkedin}
        alt="minilogo"
        style={{ height: "15px", width: "50px" }}
        className="d-inline-block"
      />
      <p className="mb-0 d-inline-block">LinkedIn Corporation © 2026</p>
    </div>
  );
};
export default FooterSidebar;
