import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import JobsLine from "./JobsLine";

const Job = function () {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("search");

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
    <div className="max-w-4xl mx-auto p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {query
          ? `Risultati di ricerca per: "${query}"`
          : "Le principali offerte di lavoro per te"}
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
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-150 overflow-hidden">
          {jobs.length > 0 ? (
            jobs.map((job) => <JobsLine key={job._id} job={job} />)
          ) : (
            <p className="p-8 text-center text-gray-500">
              Nessun annuncio trovato.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Job;
