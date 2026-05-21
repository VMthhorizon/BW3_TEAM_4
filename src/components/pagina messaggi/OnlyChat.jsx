import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Image,
  Dropdown,
} from "react-bootstrap";
import { PencilSquare, ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import soundFile from "../../assets/chatbox.mp3";

const OnlyChat = () => {
  const [activeChatId, setActiveChatId] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const profilo = useSelector((state) => state.profile.me);

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
  ];

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
  ]);

  const activeChat = chats.find((c) => c.id === activeChatId);

  const playSendSound = () => {
    const audio = new Audio(soundFile);
    audio.volume = 0.5;
    audio.play().catch((err) => console.log("Audio non riprodotto:", err));
  };

  const handleSendMessage = () => {
    if (!textInput.trim() || !activeChatId) return;

    const newMessage = {
      id: Date.now(),
      sender: "Io",
      text: textInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

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
    );
    playSendSound();
    setTextInput("");
  };

  const addEmoji = (emoji) => setTextInput((prev) => prev + emoji);

  const filteredChats = chats.filter((chat) =>
    chat.nome.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container
      fluid
      className="bg-white rounded-2 border border-1 p-0 overflow-hidden"
      style={{ height: "80vh" }}
    >
      <Row className="m-0 p-2 border-bottom border-1 align-items-center bg-light">
        <Col xs={7} className="d-flex gap-2 align-items-center">
          <span className="fw-bolder fs-5 text-dark">Messaggi</span>
          <InputGroup
            size="sm"
            className="bg-white rounded-1 border"
            style={{ maxWidth: "250px" }}
          >
            <InputGroup.Text className="bg-transparent border-0">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Cerca contatti"
              className="bg-transparent border-0 shadow-none ps-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col
          xs={5}
          className="d-flex gap-2 align-items-center justify-content-end"
        >
          <Button
            className="rounded-circle text-dark p-2 d-flex align-items-center border-0"
            variant="light"
          >
            <ThreeDots size={20} />
          </Button>
          <Button
            className="rounded-circle text-dark p-2 d-flex align-items-center border-0"
            variant="light"
          >
            <PencilSquare size={20} />
          </Button>
        </Col>
      </Row>

      <Row className="m-0" style={{ height: "calc(100% - 57px)" }}>
        <Col
          xs={4}
          className="border-end border-1 p-0 h-100 bg-light overflow-auto"
        >
          {filteredChats.map((chat) => {
            const isSelected = chat.id === activeChatId;
            return (
              <div
                key={chat.id}
                className={`d-flex p-3 border-bottom pointer align-items-center transition-all ${
                  isSelected
                    ? "bg-white border-start border-primary border-2"
                    : "hover-bg-gray"
                }`}
                style={{
                  cursor: "pointer",
                  borderLeft: isSelected
                    ? "4px solid #0a66c2"
                    : "4px solid transparent",
                }}
                onClick={() => setActiveChatId(chat.id)}
              >
                <div className="position-relative me-3 flex-shrink-0">
                  <Image
                    src={chat.pic}
                    roundedCircle
                    width="48"
                    height="48"
                    className="p-1 bg-white border"
                  />
                  <span
                    className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"
                    style={{ width: "12px", height: "12px" }}
                  ></span>
                </div>
                <div className="overflow-hidden flex-grow-1">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <span
                      className={`small fw-bold text-truncate ${chat.isProf ? "text-primary" : "text-dark"}`}
                    >
                      {chat.nome}
                    </span>
                    <span
                      className="text-muted flex-shrink-0 ms-2"
                      style={{ fontSize: "11px" }}
                    >
                      {chat.ora}
                    </span>
                  </div>
                  <div
                    className="small text-muted text-truncate"
                    style={{ fontSize: "13px" }}
                  >
                    {chat.msg}
                  </div>
                </div>
              </div>
            );
          })}
          {filteredChats.length === 0 && (
            <div className="text-center text-muted p-4 small">
              Nessun contatto trovato
            </div>
          )}
        </Col>

        <Col xs={8} className="p-0 h-100 d-flex flex-column bg-white">
          {activeChat ? (
            <>
              <div className="p-3 border-bottom d-flex align-items-center justify-content-between bg-light">
                <div className="d-flex align-items-center gap-2">
                  <span className="fw-bold text-dark">{activeChat.nome}</span>
                  {activeChat.isProf && (
                    <i
                      className="bi bi-patch-check-fill text-primary"
                      style={{ fontSize: "14px" }}
                    ></i>
                  )}
                  <span className="text-muted small d-none d-md-inline">
                    • {activeChat.ruolo}
                  </span>
                </div>
                <div className="text-muted pointer">
                  <i className="bi bi-camera-video fs-5"></i>
                </div>
              </div>

              <div className="flex-grow-1 overflow-auto p-3 bg-white d-flex flex-column">
                <div className="text-center mb-4 pb-3 border-bottom">
                  <Image
                    src={activeChat.pic}
                    roundedCircle
                    width="64"
                    height="64"
                    className="border p-1 mb-2 bg-light"
                  />
                  <div className="fw-bold text-dark">{activeChat.nome}</div>
                  <div className="text-muted small">{activeChat.ruolo}</div>
                </div>

                {activeChat.history.map((msg) => {
                  const isMe = msg.sender === "Io";
                  return (
                    <div
                      key={msg.id}
                      className={`d-flex mb-3 ${isMe ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <Image
                        src={
                          isMe
                            ? profilo?.image || "https://via.placeholder.com/35"
                            : activeChat.pic
                        }
                        roundedCircle
                        width="35"
                        height="35"
                        className="border flex-shrink-0 mx-2 align-self-end"
                      />
                      <div
                        className={`d-flex flex-column ${isMe ? "align-items-end" : "align-items-start"}`}
                        style={{ maxWidth: "70%" }}
                      >
                        <span
                          className="text-muted mb-1"
                          style={{ fontSize: "10px" }}
                        >
                          {msg.sender} • {msg.time}
                        </span>
                        <div
                          className={`p-2 rounded-3 shadow-sm ${
                            isMe
                              ? "bg-primary text-white"
                              : "bg-light text-dark"
                          }`}
                          style={{ wordBreak: "break-word" }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 border-top bg-light">
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder="Scrivi un messaggio..."
                  className="border border-1 shadow-none bg-white mb-2 p-2"
                  style={{
                    fontSize: "14px",
                    resize: "none",
                    borderRadius: "8px",
                  }}
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3 text-secondary ps-1">
                    <i className="bi bi-image pointer fs-5"></i>
                    <Dropdown drop="up">
                      <Dropdown.Toggle
                        as="i"
                        className="bi bi-emoji-smile pointer fs-5 border-0 p-0 shadow-none"
                      ></Dropdown.Toggle>
                      <Dropdown.Menu
                        className="border shadow p-2"
                        style={{ maxWidth: "250px" }}
                      >
                        <div className="d-flex flex-wrap gap-2 justify-content-center">
                          {emojiList.map((e) => (
                            <span
                              key={e}
                              className="pointer fs-5 emoji-hover"
                              style={{ cursor: "pointer" }}
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
                    className="rounded-pill px-4 fw-bold"
                    variant="primary"
                    size="sm"
                    disabled={!textInput.trim()}
                    onClick={handleSendMessage}
                  >
                    Invia
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="m-auto text-center p-5 text-muted">
              <i
                className="bi bi-chat-dots-fill text-secondary opacity-25"
                style={{ fontSize: "5rem" }}
              ></i>
              <h5 className="mt-3 fw-bold">I tuoi messaggi</h5>
              <p className="small text-muted">
                Seleziona un contatto dalla lista a sinistra per iniziare a
                chattare.
              </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OnlyChat;
