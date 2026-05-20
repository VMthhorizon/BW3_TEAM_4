import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import JobsLine from "./JobsLine";
import { ChevronExpand } from "react-bootstrap-icons";
import casetta from "../assets/casetta.png";
import edilizia from "../assets/edilizia.png";
import finanza from "../assets/finanza.png";
import governo from "../assets/governo.png";
import ibrido from "../assets/ibrido.png";
import industriamanifatturiera from "../assets/industriamanifatturiera.png";
import risorse from "../assets/risorse.png";
import media from "../assets/media.png";
import it from "../assets/it.png";

import { Alert, Button, Col, Container, Modal, Row } from "react-bootstrap";
const Job = function () {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");
  const [showJobs, setShowJobs] = useState(false);
  const jobSliced = showJobs ? jobs : jobs.slice(0, 15);
  const [selectedJob, setselectedJob] = useState(null);
  useEffect(() => {
    const prepareFetch = setTimeout(() => {
      setLoading(true);
      setError(null);
    }, 0);

    let link = "https://strive-benchmark.herokuapp.com/api/jobs";
    let query = "developer";
    if (query) {
      link += `?search=${query}`;
    }
    fetch(link)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data.data || []);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
    return () => clearTimeout(prepareFetch);
  }, [query]);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-3">
        <h3 className="text-2xl font-bold px-3 pt-4">
          {query
            ? `Risultati di ricerca per: "${query}"`
            : "Le principali offerte di lavoro per te"}
        </h3>
        <h6>
          <small className="text-secondary px-3">
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidature, ricerche e salvataggi
          </small>
        </h6>
        {loading && (
          <p className="text-center text-gray-500 py-10">Caricamento...</p>
        )}
        {error && (
          <p className="text-center text-red-500 py-10">
            Si è verificato un errore: {error}
          </p>
        )}
        {!loading && !error && (
          <div className="bg-white rounded-xl shadow-sm">
            {jobSliced.map((job) => (
              <JobsLine
                key={job._id}
                job={job}
                onClick={() => {
                  setselectedJob(job);
                }}
              />
            ))}
            <div
              className="show-all m-0"
              onClick={() => setShowJobs(!showJobs)}
            >
              {showJobs ? "Mostra meno" : "Mostra altro"}
              <ChevronExpand />
            </div>
          </div>
        )}
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-3 mt-3">
        <h3 className="text-2xl font-bold px-3 pt-4">
          Esplora altre categorie di offerte
        </h3>
        <div>
          <Container>
            <Row>
              <Col xs={12} className="d-flex justify-content-between">
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={casetta}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Piccole imprese</small>
                  </p>
                </div>
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={risorse}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Risorse Umane</small>
                  </p>
                </div>
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={media}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Media</small>
                  </p>
                </div>
              </Col>
              <Col xs={12} className="d-flex justify-content-between mt-1">
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={industriamanifatturiera}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Industria Manifatturiera</small>
                  </p>
                </div>
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={ibrido}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Ibrido</small>
                  </p>
                </div>
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={it}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">IT</small>
                  </p>
                </div>
              </Col>
              <Col xs={12} className="d-flex justify-content-between mt-1">
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={governo}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Governo</small>
                  </p>
                </div>
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={edilizia}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Edilizia</small>
                  </p>
                </div>
                <div
                  className="d-flex align-items-center border border-1 rounded-2"
                  style={{ width: "33%" }}
                >
                  <img
                    src={finanza}
                    alt="piccole-imprese"
                    style={{ width: "45px", height: "45px" }}
                  />
                  <p className="m-0">
                    <small className="ps-1">Finanza</small>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {loading && (
          <p className="text-center text-gray-500 py-10">Caricamento...</p>
        )}
        {error && (
          <p className="text-center text-red-500 py-10">
            Si è verificato un errore: {error}
          </p>
        )}
        {!loading && !error && (
          <div className="bg-white rounded-xl shadow-sm">
            {jobSliced.slice(0, 10).map((job) => (
              <JobsLine key={job._id} job={job} />
            ))}
            <div
              className="show-all m-0"
              onClick={() => setShowJobs(!showJobs)}
            >
              {showJobs ? "Mostra meno" : "Mostra altro"}
              <ChevronExpand />
            </div>
          </div>
        )}
      </div>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-3 mt-3">
        <h3 className="text-2xl font-bold px-3 pt-4">
          {query
            ? `Risultati di ricerca per: "${query}"`
            : "Altre offerte di lavoro per te"}
        </h3>
        <h6>
          <small className="text-secondary px-3">
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidature, ricerche e salvataggi
          </small>
        </h6>
        {loading && (
          <p className="text-center text-gray-500 py-10">Caricamento...</p>
        )}
        {error && (
          <p className="text-center text-red-500 py-10">
            Si è verificato un errore: {error}
          </p>
        )}
        {!loading && !error && (
          <div className="bg-white rounded-xl shadow-sm">
            {jobSliced.map((job) => (
              <JobsLine key={job._id} job={job} />
            ))}
            <div
              className="show-all m-0"
              onClick={() => setShowJobs(!showJobs)}
            >
              {showJobs ? "Mostra meno" : "Mostra altro"}
              <ChevronExpand />
            </div>
          </div>
        )}
      </div>

      <Modal
        show={selectedJob !== null}
        onHide={() => setselectedJob(null)}
        centered
      >
        {selectedJob && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>
                <img
                  src={selectedJob.company_logo_url}
                  alt="logo"
                  style={{ height: "75px", width: "75px", borderRadius: "2em" }}
                  className=" me-2"
                />
                {selectedJob.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h2>{selectedJob.company_name}</h2>
              <h3>Category: {selectedJob.category}.</h3>
              <h6>
                Required location - {selectedJob.candidate_required_location}.
              </h6>
              <p>{selectedJob.job_type}</p>
              <p>{selectedJob.salary}</p>
            </Modal.Body>
            <Modal.Footer className="justify-content-center g-2">
              <Button
                style={{ width: "160px" }}
                variant="outline-info"
                onClick={() => {
                  <Alert key="primary" variant="primary">
                    Candidatura inviata con successo
                  </Alert>;
                }}
              >
                Invia candidatura
              </Button>
              <Button
                style={{ width: "160px" }}
                variant="outline-info"
                onClick={() => setselectedJob(null)}
              >
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};

export default Job;

// ;
// description;
// job_type;
// publication_date;
// salary;
// title;
// url;
// _id;
