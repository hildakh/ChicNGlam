import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Menu-Item.styles.scss";
import { withRouter } from "../../helpers/with-router";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div
      className={`${size} menu-item`}
      onClick={ () => navigate(`${pathname}${linkUrl}`)}
      >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        className="background-image"
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
};

// Exporting the function with withRouter gives this component access to location, match and history props that we had to otherwise pass through children of homepage to have access to
export default withRouter(MenuItem);
