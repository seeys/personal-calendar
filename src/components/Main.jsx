import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useState } from "react";
import styled from "styled-components";
import "./Main.css";
import ModalWindow from "./ModalWindow";
const Container = styled.div`
  width: 800px;
  height: 600px;
  margin: 0 auto;
`;
const Main = () => {
  const [open, setOpen] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const handleShow = (event) => {
    setSelectDate(event.dateStr);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleShow}
        events={[{ title: "event1", date: "2022-11-24" }]}
      />
      <ModalWindow open={open} close={handleClose} date={selectDate} />
    </Container>
  );
};

export default Main;
