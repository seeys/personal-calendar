import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const ModalWindow = ({ open, close }) => {
  const handlePost = () => {
    axios
      .post("http://localhost:8080/dates/add", {
        title: "test",
        content: "2022-11-30",
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };
  return (
    <div>
      {open ? (
        <Modal show={open} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>이벤트 추가</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>제목</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="제목을 입력해주세요."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>날짜</Form.Label>
                <Form.Control type="text" placeholder="0000-00-00" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="primary" onClick={handlePost}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
};

export default ModalWindow;
