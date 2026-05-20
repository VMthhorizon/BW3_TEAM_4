import { Row, Col, Badge } from "react-bootstrap";

const JobsLine = function ({ job, onClick }) {
  if (job.company_logo_url) {
    return (
      <div
        onClick={onClick}
        className="p-3 border-bottom bg-white hover-bg-light transition-colors"
      >
        <Row className="align-items-start g-3">
          <Col xs="auto">
            <img
              className="rounded"
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
              src={job.company_logo_url}
            />
          </Col>
          <Col className="d-flex flex-column gap-1">
            <div className="d-flex align-items-center gap-1">
              <h2 className="h6 mb-0 text-primary fw-semibold text-decoration-none cursor-pointer">
                {job.title}
              </h2>
              <i
                className="bi bi-shield-check text-secondary"
                style={{ fontSize: "0.85rem" }}
              ></i>
            </div>
            <p className="small mb-0 text-dark">
              {job.company_name} •{" "}
              <span className="text-muted">
                {job.candidate_required_location} ({job.category})
              </span>
            </p>
            <div className="d-flex align-items-center gap-1.5 mt-1">
              <i
                className="bi bi-check-circle-fill text-success"
                style={{ fontSize: "0.9rem" }}
              ></i>
              <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                Valutazione attiva delle candidature
              </span>
            </div>
            <div
              className="d-flex align-items-center gap-2 mt-1"
              style={{ fontSize: "0.75rem" }}
            >
              <span className="text-muted">Promosso</span>
              <span className="text-muted">•</span>
              <Badge
                bg="primary"
                className="d-flex align-items-center justify-content-center p-0 rounded-sm fw-bold font-sans text-lowercase"
                style={{ width: "16px", height: "16px", fontSize: "10px" }}
              >
                in
              </Badge>
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="fw-semibold text-secondary text-decoration-none"
              >
                Candidatura semplice
              </a>
            </div>
          </Col>
          <Col xs="auto" className="d-flex align-items-center gap-2">
            <button
              className="btn btn-link p-1 text-secondary rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
              style={{ width: "32px", height: "32px" }}
            >
              <i className="bi bi-three-dots fs-5"></i>
            </button>
            <button
              className="btn btn-link p-1 text-secondary rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
              style={{ width: "32px", height: "32px" }}
            >
              <i className="bi bi-x-lg fs-6"></i>
            </button>
          </Col>
        </Row>
      </div>
    );
  }
};

export default JobsLine;
