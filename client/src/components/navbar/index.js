import React from "react";
import { Affix } from "antd";
import "./styles.scss";
const Nabar = () => {
  return (
    <div className='navbar-bg '>
      <div className='logo main_title'>
        <h2
          style={{
            color: "#1f8be0",
            marginBottom: "0px",
            fontWeight: 600,
            paddingBottom: "0px",
          }}
        >
          Tags Predictor
        </h2>
      </div>
      <div className='nav-items'>
        <span>
          <a href='#bulk-search'>Bulk Search</a>
        </span>
        <span>
          <a href='#price'>Pricing</a>
        </span>
        <a className='nav-btn' href='#single-search'>
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Nabar;
