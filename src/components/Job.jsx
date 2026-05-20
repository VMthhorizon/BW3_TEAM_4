import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import JobsLine from "./JobsLine";
import { ChevronExpand } from "react-bootstrap-icons";

const Job = function () {
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");
  const [showJobs, setShowJobs] = useState(false);
  const jobSliced = showJobs ? jobs : jobs.slice(0, 3);
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
            : "Esplora altre categorie di offerte"}
        </h3>

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
            {jobSliced.slice(1, 4).map((job) => (
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
    </>
  );
};

export default Job;
