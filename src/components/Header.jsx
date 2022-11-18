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
`;
const Header = () => {
  return (
    <div>
      <ButtonContainer>
        <ButtonItem>&lt;</ButtonItem>
        <TodayItem>오늘</TodayItem>
        <ButtonItem>&gt;</ButtonItem>
      </ButtonContainer>
    </div>
  );
};

export default Header;
