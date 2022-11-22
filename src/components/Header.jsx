import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: #a5d8ff;
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const ButtonItem = styled.div`
  font-size: 20px;
`;
const TodayItem = styled.div`
  font-size: 30px;
  margin: 0 20px;
`;
const Header = ({ year, month }) => {
  return (
    <div>
      <ButtonContainer>
        <ButtonItem>&lt;</ButtonItem>
        <TodayItem>
          {year}년 {month}월
        </TodayItem>
        <ButtonItem>&gt;</ButtonItem>
      </ButtonContainer>
    </div>
  );
};

export default Header;
