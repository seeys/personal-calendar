import React from "react";
import Body from "../components/Body";
import Header from "../components/Header";

const Main = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return (
    <div>
      <Header year={year} month={month} />
      <Body />
    </div>
  );
};

export default Main;
