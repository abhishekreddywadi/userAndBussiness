import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";
import Header from "../../../components/header/Header";

function Household() {
  const { navButtonClick } = useContext(UserContext);
  return (
    <div
      className={`dashboard ${
        navButtonClick && "dashboard-full"
      } business-setting`}
    >
      <Header />
      <h2>Household</h2>
    </div>
  );
}

export default Household;
