import React from "react";
import styled from "styled-components";

const Box = styled.div``;
const CalendarContainer = styled.div`
  box-shadow: 2px 2px 2px 2px #e9ecef;
  width: 800px;
  height: 600px;
  margin: 0 auto;
`;

const Body = () => {
  return (
    <Box>
      <CalendarContainer>
        <table>
          <thead>
            <tr>
              <td>일</td>
              <td>월</td>
              <td>화</td>
              <td>수</td>
              <td>목</td>
              <td>금</td>
              <td>토</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </CalendarContainer>
    </Box>
  );
};

export default Body;
