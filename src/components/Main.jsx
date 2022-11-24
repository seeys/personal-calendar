import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Main.css";
import ModalWindow from "./ModalWindow";
import axios from "axios";

const Container = styled.div`
  width: 800px;
  height: 600px;
  margin: 0 auto;
`;
const Main = () => {
  const [open, setOpen] = useState(false);
  const [selectDate, setSelectDate] = useState("");
  const [events, setEvents] = useState([]);
  const handleShow = (event) => {
    setSelectDate(event.dateStr);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios("http://localhost:8080/dates").then((res) => {
      const data = res.data;
      data.forEach((item) => {
        const event = {
          title: item.title,
          start: item.start,
          end: item.end,
          color: item.color,
        };
        setEvents((e) => [...e, event]);
      });
    });
  }, []);
  return (
    <Container>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleShow}
        events={events}
      />
      <ModalWindow open={open} close={handleClose} date={selectDate} />
    </Container>
  );
};

export default Main;
