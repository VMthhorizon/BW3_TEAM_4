import { useState } from "react";
import { Form, InputGroup, Image, Dropdown } from "react-bootstrap";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComposerOpen, setIsComposerOpen] = useState(false);

  return (
    <div
      className="fixed-bottom d-flex align-items-end justify-content-end pe-4"
      style={{ zIndex: 1050, pointerEvents: "none" }}
    >
      {isComposerOpen && (
        <div
          className="sidebar-card shadow-lg me-2"
          style={{
            width: "350px",
            height: "450px",
            borderRadius: "8px 8px 0 0",
            pointerEvents: "auto",
            display: "flex",
            flexDirection: "column",
            borderBottom: "none",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-between bg-white py-2 px-3 border-bottom"
            style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
          >
            <strong style={{ fontSize: "14px" }}>Nuovo messaggio</strong>
            <div className="d-flex gap-2 align-items-center">
              <i
                className="bi bi-dash-lg text-secondary"
                style={{ cursor: "pointer", fontSize: "20px" }}
              ></i>
              <i
                className="bi bi-x-lg text-secondary"
                style={{ cursor: "pointer", fontSize: "18px" }}
                onClick={() => setIsComposerOpen(false)}
              ></i>
            </div>
          </div>

          <div className="p-0 d-flex flex-column bg-white flex-grow-1">
            <div className="p-2 border-bottom">
              <Form.Control
                type="text"
                placeholder="Digita un nome..."
                className="border-0 shadow-none p-1"
                style={{ fontSize: "14px" }}
              />
            </div>
            <Form.Control
              as="textarea"
              placeholder="Scrivi un messaggio..."
              className="border-0 shadow-none flex-grow-1 p-3"
              style={{ fontSize: "14px", resize: "none" }}
            />

            <div className="p-2 border-top d-flex align-items-center justify-content-between bg-light">
              <div
                className="d-flex gap-3 text-secondary ms-2"
                style={{ fontSize: "18px" }}
              >
                <i className="bi bi-image" style={{ cursor: "pointer" }}></i>
                <i
                  className="bi bi-paperclip"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="bi bi-filetype-gif"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="bi bi-emoji-smile"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>

              <button
                className="fw-bold px-3 py-1"
                style={{ fontSize: "14px", opacity: 0.6 }}
              >
                Invia
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className="sidebar-card shadow-lg"
        style={{
          width: "300px",
          pointerEvents: "auto",
          borderRadius: "8px 8px 0 0",
          transform: isOpen ? "translateY(0)" : "translateY(calc(100% - 48px))",
          transition: "transform 0.3s ease-in-out",
          borderBottom: "none",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-between bg-white py-2 px-3"
          style={{
            cursor: "pointer",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="d-flex align-items-center">
            <div className="position-relative me-2">
              <Image
                src="https://via.placeholder.com/32"
                roundedCircle
                width="32"
                height="32"
              />
              <span
                className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"
                style={{ width: "10px", height: "10px" }}
              ></span>
            </div>
            <strong style={{ fontSize: "14px", color: "#333" }}>
              Messaggistica
            </strong>
          </div>

          <div
            className="d-flex gap-3 text-secondary align-items-center"
            style={{ fontSize: "16px" }}
          >
            <Dropdown onClick={(e) => e.stopPropagation()} align="end">
              <Dropdown.Toggle
                as="div"
                className="p-0 border-0 bg-transparent no-caret"
              >
                <i
                  className="bi bi-three-dots"
                  style={{ cursor: "pointer" }}
                ></i>
              </Dropdown.Toggle>
              <Dropdown.Menu
                className="shadow border-0 py-2"
                style={{ fontSize: "13px" }}
              >
                <Dropdown.Item>Impostazioni</Dropdown.Item>
                <Dropdown.Item>Gestisci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <i
              className="bi bi-pencil-square"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.stopPropagation();
                setIsComposerOpen(true);
              }}
            ></i>

            <i
              className={`bi ${isOpen ? "bi-chevron-down" : "bi-chevron-up"}`}
            ></i>
          </div>
        </div>

        <div
          className="p-0 bg-white"
          style={{ height: "400px", overflowY: "auto" }}
        >
          <div className="p-2 border-bottom">
            <InputGroup size="sm" className="bg-light rounded">
              <Form.Control
                placeholder="Cerca messaggi"
                className="bg-transparent border-0 shadow-none px-2"
                style={{ fontSize: "13px" }}
              />
              <InputGroup.Text className="bg-transparent border-0">
                <i className="bi bi-sliders text-secondary"></i>
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div
            className="p-3 text-center text-muted"
            style={{ fontSize: "12px" }}
          >
            Nessun nuovo messaggio
          </div>
        </div>
      </div>

      <style>{`.no-caret::after { display: none !important; }`}</style>
    </div>
  );
};

export default ChatBox;
