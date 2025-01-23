import React from "react";
import "./Menu-Item.styles.scss";
import { withRouter } from "../../helpers/with-router";

const MenuItem = ({ title, id, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={ () => history.push(`${match.url}${linkUrl}`)}
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
);

// Exporting the function with withRouter gives this component access to location, match and history props that we had to otherwise pass through children of homepage to have access to
export default withRouter(MenuItem);
