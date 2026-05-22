import { useState } from "react"
import { ChevronDown, ChevronUp } from "react-bootstrap-icons"

import AdImg from "../../assets/jobAd.png"

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
          {showAllNews ? "Mostra meno " : "Mostra altro "}
          {showAllNews ? <ChevronUp /> : <ChevronDown />}
        </div>
      </div>
    </div>
  )
}

export default HPSidebarRight
