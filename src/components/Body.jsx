import React from "react";
import styled from "styled-components";

const Box = styled.div``;
const CalendarContainer = styled.div`
  box-shadow: 2px 2px 2px 2px #e9ecef;
  width: 800px;
  height: 800px;
  margin: 0 auto;
`;

const Body = () => {
  return (
    <Box>
      <CalendarContainer></CalendarContainer>
    </Box>
  );
};

export default Body;
