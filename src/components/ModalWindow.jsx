import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ModalWindow = ({ open, close, date }) => {
  const [text, setText] = useState("");
  const [startday, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [option, setOption] = useState("");

  const onChangeColor = (e) => {
    setOption(e.currentTarget.value);
  };

  const handlePost = () => {
    axios
      .post("http://localhost:8080/dates/add", {
        title: text,
        start: startday ? startday : date,
        end: endDay ? endDay + 1 : date,
        color: option ? option : "#f03e3e",
      })
      .then((res) => {
        console.log(res);
        close();
        window.location.replace("/");
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      {open ? (
        <Modal show={open} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>일정</Modal.Title>
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
                  name="title"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  placeholder="제목을 입력해주세요."
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>시작 날짜</Form.Label>
                <Form.Control
                  type="text"
                  name="start"
                  onChange={(e) => {
                    setStartDay(e.target.value);
                  }}
                  defaultValue={date}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>종료 날짜</Form.Label>
                <Form.Control
                  type="text"
                  name="end"
                  onChange={(e) => {
                    setEndDay(e.target.value);
                  }}
                  defaultValue={date}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>색상</Form.Label>
                <Form.Select aria-label="color" onChange={onChangeColor}>
                  <option value="#f03e3e">RED</option>
                  <option value="#ae3ec9">PURPLE</option>
                  <option value="#4263eb">BLUE</option>
                  <option value="#0ca678">GREEN</option>
                  <option value="#f76707">ORANGE</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              닫기
            </Button>
            <Button variant="primary" onClick={handlePost}>
              저장
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
};

export default ModalWindow;
