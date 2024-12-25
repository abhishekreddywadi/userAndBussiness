import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./dashboardFilters.scss";

function DashboardFilters() {
  const [showPriceBox, setShowPriceBox] = useState(false);
  return (
    <div className="dashboard-filter">
      <form>
        <div className="input-container input-icon">
          <FontAwesomeIcon icon={faLocationDot} />
          <div className="input-box">
            <label htmlFor="">Location</label>
            <select className="form-control">
              <option value="">Bengaluru, Karnataka</option>
            </select>
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="">Start Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="input-container">
          <label htmlFor="">Time</label>
          <input type="time" className="form-control" />
        </div>
        <div
          className="input-container" onClick={() => {setShowPriceBox(!showPriceBox)}}>
          <label htmlFor="">Price</label>
          <input type="number" className="form-control" />
          <span className="arrow">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
            <div className={`price-box ${showPriceBox && 'price-box-show'}`}>
              <div className="input-container">
                <label htmlFor="">Max Price</label>
                <input type="number" className="form-control" placeholder="50" />
              </div>
              <div className="input-container">
                <label htmlFor="">Currency</label>
                <select name="" id="" className="form-control">
                  <option value="">Rupees</option>
                  <option value="">USD</option>
                </select>
              </div>
            </div>
        </div>
      </form>
    </div>
  );
}

export default DashboardFilters;
