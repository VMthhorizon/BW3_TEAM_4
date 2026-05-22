import { useState } from "react"
import { Form, Image, Button, Dropdown, InputGroup } from "react-bootstrap"
import { useSelector } from "react-redux"

import soundFile from "../assets/chatbox.mp3"

const ChatBox = ({ isOpen, setIsOpen }) => {
  const [activeChatId, setActiveChatId] = useState(null)
  const [textInput, setTextInput] = useState("")

  const profilo = useSelector((state) => state.profile.me)

  const emojiList = [
    "😊",
    "👍",
    "🙌",
    "🔥",
    "✨",
    "👏",
    "😎",
    "🤔",
    "👋",
    "💬",
    "💡",
    "🎉",
    "🚀",
    "💻",
    "⚡",
    "⚙️",
    "🖥️",
    "📡",
    "💾",
    "🔋",
    "🔍",
    "🔗",
    "🧩",
    "🛠️",
  ]

  const [chats, setChats] = useState([
    {
      id: 1,
      nome: "Stefano Casasola",
      msg: "Ricordati di pushare il codice...",
      pic: "https://cdn-icons-png.flaticon.com/512/3429/3429433.png",
      ruolo: "Lead Instructor @ Epicode",
      isProf: true,
      ora: "10:30",
      history: [
        {
          id: 101,
          sender: "Stefano Casasola",
          text: "Ragazzi, ricordatevi di pushare il codice della lezione su GitHub. ",
          time: "10:30",
        },
      ],
    },
    {
      id: 2,
      nome: "Alessia Cotini",
      msg: "Ho visto il tuo ultimo progetto...",
      pic: "https://cdn-icons-png.flaticon.com/512/9431/9431181.png",
      ruolo: "Software Engineer @ TechCorp",
      ora: "09:45",
      history: [
        {
          id: 201,
          sender: "Alessia Cotini",
          text: "Ho visto il tuo ultimo progetto, la struttura è davvero pulita!",
          time: "09:45",
        },
      ],
    },
    {
      id: 3,
      nome: "Valeria Farinosi",
      msg: "Hai fatto l'esercizio di oggi?",
      pic: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png",
      ruolo: "Epicode Tutor",
      ora: "11:20",
      history: [
        {
          id: 301,
          sender: "Valeria Farinosi",
          text: "Hai fatto l'esercizio di oggi? Se hai dubbi scrivimi.",
          time: "11:20",
        },
      ],
    },
    {
      id: 4,
      nome: "Kevin Donati",
      msg: "Qualcuno ha risolto Redux?",
      pic: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
      ruolo: "Full Stack Developer",
      ora: "Ieri",
      history: [
        {
          id: 401,
          sender: "Kevin Donati",
          text: "Ragazzi, qualcuno ha risolto l'errore di Redux? ",
          time: "Ieri",
        },
      ],
    },
    {
      id: 5,
      nome: "Vincenzo Mola",
      msg: "Controlla le API backend!",
      pic: "https://cdn-icons-png.flaticon.com/512/7159/7159032.png",
      ruolo: "Backend Specialist",
      ora: "Ieri",
      history: [
        {
          id: 501,
          sender: "Vincenzo Mola",
          text: "Ho aggiornato gli endpoint, controlla le API prima di procedere. ",
          time: "Ieri",
        },
      ],
    },
    {
      id: 6,
      nome: "Emanuela Carrubba",
      msg: "React non vuole sapere!",
      pic: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      ruolo: "Frontend Enthusiast",
      ora: "2gg fa",
      history: [
        {
          id: 601,
          sender: "Emanuela Carrubba",
          text: "Il mio React non ne vuole sapere oggi! ",
          time: "2gg fa",
        },
      ],
    },
  ])

  const activeChat = chats.find((c) => c.id === activeChatId)

  const playSendSound = () => {
    const audio = new Audio(soundFile)
    audio.volume = 0.5
    audio.play().catch((err) => console.log("Audio non riprodotto:", err))
  }

  const handleSendMessage = () => {
    if (!textInput.trim()) return
    const newMessage = {
      id: Date.now(),
      sender: "Io",
      text: textInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
    setChats(
      chats.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              msg: "Tu: " + textInput,
              history: [...chat.history, newMessage],
            }
          : chat,
      ),
    )
    playSendSound()
    setTextInput("")
  }

  const addEmoji = (emoji) => setTextInput((prev) => prev + emoji)

  return (
    <div className="chat-wrapper d-inline-block d-lg-none">
      {!isOpen && !activeChat && (
        <div
          className="mobile-chat-toggle d-none"
          onClick={() => setIsOpen(true)}
        >
          <i className="bi bi-chat-dots-fill fs-4 "></i>
        </div>
      )}

      {activeChat && (
        <div className="active-chat shadow-lg bg-white border">
          <div className="chat-header d-flex justify-content-between align-items-center p-2 border-bottom">
            <div className="d-flex align-items-center gap-1">
              <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>
                {activeChat.nome}
              </span>
              {activeChat.isProf && (
                <i
                  className="bi bi-patch-check-fill text-primary"
                  style={{ fontSize: "12px" }}
                ></i>
              )}
            </div>
            <div className="d-flex gap-3 align-items-center text-muted">
              <i className="bi bi-camera-video pointer"></i>
              <i
                className="bi bi-x-lg pointer"
                onClick={() => setActiveChatId(null)}
              ></i>
            </div>
          </div>

          <div className="chat-content flex-grow-1 overflow-auto p-3 d-flex flex-column">
            <div className="text-center mb-4 pb-3 border-bottom">
              <Image
                src={activeChat.pic}
                roundedCircle
                width="72"
                height="72"
                className="border p-1 mb-2 bg-light"
              />
              <div className="fw-bold text-dark">{activeChat.nome}</div>
              <div className="text-muted small">{activeChat.ruolo}</div>
            </div>

            {activeChat.history.map((msg) => (
              <div
                key={msg.id}
                className={`d-flex mb-4 ${msg.sender === "Io" ? "flex-row-reverse" : "flex-row"}`}
              >
                <Image
                  src={
                    msg.sender === "Io"
                      ? profilo?.image || "https://via.placeholder.com/35"
                      : activeChat.pic
                  }
                  roundedCircle
                  width="35"
                  height="35"
                  className="border flex-shrink-0 mx-2"
                />
                <div
                  className={`msg-container ${msg.sender === "Io" ? "text-end align-items-end" : "text-start align-items-start"}`}
                  style={{ maxWidth: "75%" }}
                >
                  <div className="fw-bold mb-1" style={{ fontSize: "11px" }}>
                    {msg.sender} • {msg.time}
                  </div>
                  <div
                    className={`msg-bubble shadow-sm ${msg.sender === "Io" ? "bg-primary text-white" : "bg-light text-dark"}`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-footer p-2 border-top bg-light">
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Scrivi un messaggio..."
              className="border-0 shadow-none bg-transparent mb-2 no-focus-outline"
              style={{ fontSize: "14px", resize: "none" }}
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 text-secondary ps-2">
                <i className="bi bi-image pointer"></i>
                <Dropdown drop="up">
                  <Dropdown.Toggle
                    as="i"
                    className="bi bi-emoji-smile pointer border-0 p-0 shadow-none"
                  ></Dropdown.Toggle>
                  <Dropdown.Menu className="emoji-picker border shadow p-2">
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      {emojiList.map((e) => (
                        <span
                          key={e}
                          className="pointer fs-4"
                          onClick={() => addEmoji(e)}
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Button
                className="rounded-pill px-3 fw-bold send-btn"
                disabled={!textInput.trim()}
                onClick={handleSendMessage}
              >
                Invia
              </Button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`list-container shadow-lg bg-white border ${isOpen ? "open" : "closed"}`}
      >
        <div
          className="list-header d-flex justify-content-between align-items-center pointer p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="d-flex align-items-center gap-2">
            <div className="position-relative">
              <Image
                src={profilo?.image || "https://via.placeholder.com/32"}
                roundedCircle
                width="32"
                height="32"
              />
              <span className="online-dot"></span>
            </div>
            <span className="fw-bold" style={{ fontSize: "14px" }}>
              Messaggistica
            </span>
          </div>
          <i
            className={`bi ${isOpen ? "bi-chevron-down" : "bi-chevron-up"}`}
          ></i>
        </div>

        <div className="list-scroll">
          <div className="p-2 border-bottom">
            <InputGroup size="sm" className="bg-search rounded-1">
              <InputGroup.Text className="bg-transparent border-0">
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                placeholder="Cerca messaggi"
                className="bg-transparent border-0 shadow-none ps-0"
              />
            </InputGroup>
          </div>
          {chats.map((chat) => (
            <div
              key={chat.id}
              className="item-row d-flex p-3 border-bottom pointer align-items-center"
              onClick={() => {
                setActiveChatId(chat.id)
                setIsOpen(false)
              }}
            >
              <div className="position-relative me-3">
                <Image
                  src={chat.pic}
                  roundedCircle
                  width="52"
                  height="52"
                  className="p-1 bg-light border"
                />
                <span className="online-dot"></span>
              </div>
              <div className="overflow-hidden flex-grow-1">
                <div className="d-flex justify-content-between">
                  <span
                    className={`small fw-bold ${chat.isProf ? "text-primary" : "text-dark"}`}
                  >
                    {chat.nome}
                  </span>
                  <span className="text-muted" style={{ fontSize: "11px" }}>
                    {chat.ora}
                  </span>
                </div>
                <div
                  className="small text-muted text-truncate"
                  style={{ fontSize: "12px" }}
                >
                  {chat.msg}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChatBox
