import { useState } from "react"
import { ChevronDown } from "react-bootstrap-icons"

const HPSidebarRight = function () {
  const news = [
    {
      title: "Tutti pazzi per il nuovo Royal Pop",
      info: "19 ore fa • 924 lettori",
    },

    {
      title: "Flatmates passa al Cosmico",
      info: "19 ore fa • 279 lettori",
    },

    {
      title: "Cosa si dice del turismo...",
      info: "22 ore fa • 190 lettori",
    },

    {
      title: "Neolaureati tra stage e stipendi bassi",
      info: "19 ore fa • 157 lettori",
    },

    {
      title: "Le aziende cercano sviluppatori React",
      info: "17 ore fa • 502 lettori",
    },

    {
      title: "Boom dell'intelligenza artificiale",
      info: "14 ore fa • 1.203 lettori",
    },
    {
      title: "L'auto europea parla sempre più ci...",
      info: "4 giorni fa • 699 lettori",
    },
    {
      title: "Aumentano i consumi per cani e gatti",
      info: "4 giorni fa • 360 lettori",
    },
  ]

  const [showAllNews, setShowAllNews] = useState(false)

  return (
    <div className="d-flex flex-column gap-2">
      {/* card notizie */}
      <div className="sidebar-card">
        <div className="sidebar-card-content">
          <h5 className="mb-1">LinkedIn Notizie</h5>

          <h6 className="text-muted mb-3">Storie principali</h6>

          {(showAllNews ? news : news.slice(0, 4)).map((item, index) => (
            <div key={index} className="news-item">
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </div>
          ))}
        </div>

        <div className="show-all" onClick={() => setShowAllNews(!showAllNews)}>
          {showAllNews ? "Mostra meno" : "Mostra altro"}
          <ChevronDown />
        </div>
      </div>

      {/* footer */}
      <div className="text-center small text-muted p-2">
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

        <p className="mb-0">LinkedIn Clone © 2026</p>
      </div>
    </div>
  )
}

export default HPSidebarRight
