import { Card, Form, InputGroup, Image } from "react-bootstrap";
import {
  ThreeDots,
  PencilSquare,
  ChevronUp,
  ChevronDown,
  Sliders,
} from "react-bootstrap-icons";
import { useState } from "react";
const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className="shadow-lg border-bottom-0"
      style={{
        width: "300px",
        position: "fixed",
        bottom: 0,
        right: "20px",
        zIndex: 1050,
        borderRadius: "8px 8px 0 0",

        transform: isOpen ? "translateY(0)" : "translateY(calc(100% - 48px))",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Card.Header
        className="d-flex align-items-center justify-content-between bg-white py-2 border-0"
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

        <div className="d-flex gap-2 text-secondary">
          <ThreeDots size={18} />
          <PencilSquare size={18} />
          {isOpen ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
        </div>
      </Card.Header>

      <Card.Body
        className="p-0 bg-white"
        style={{ height: "400px", overflowY: "auto" }}
      >
        <div className="p-2 border-bottom">
          <InputGroup size="sm" className="bg-light rounded">
            <Form.Control
              placeholder="Cerca messaggi"
              className="bg-transparent border-0 shadow-none"
              style={{ fontSize: "13px" }}
            />
            <InputGroup.Text className="bg-transparent border-0">
              <Sliders size={14} className="text-secondary" />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <div
          className="d-flex p-3 border-bottom"
          style={{ cursor: "pointer", transition: "background 0.2s" }}
        >
          <Image
            src="https://via.placeholder.com/48"
            roundedCircle
            className="me-2"
            width="48"
            height="48"
          />
          <div className="w-100 overflow-hidden">
            <div className="d-flex justify-content-between align-items-center">
              <span className="fw-bold text-dark" style={{ fontSize: "14px" }}>
                *nome utente dinamico*
              </span>
              <span className="text-muted" style={{ fontSize: "12px" }}>
                6 mag
              </span>
            </div>
            <div
              className="text-muted text-truncate"
              style={{ fontSize: "13px" }}
            >
              Offerta di LinkedIn: *nome-utente*, vuoi essere tra i primi...
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChatBox;
