import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React from "react";
import styled from "styled-components";
import "./Main.css";
const Container = styled.div`
  width: 800px;
  height: 600px;
  margin: 0 auto;
`;
const Main = () => {
  const handleDateClick = (event) => {
    console.log(event.dayEl);
  };
  return (
    <Container>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={handleDateClick}
        events={[{ title: "event1", date: "2022-11-24" }]}
      />
    </Container>
  );
};

export default Main;
