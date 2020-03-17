import React from 'react';
import './Menu-Item.styles.scss';

const MenuItem = ({ title, id, imageUrl }) => (
  <div className="menu-item" style={{
    backgroundImage: `url(${imageUrl})`
  }}>
  <div className="content">
    <h1 className="title">{title}</h1>
    <span className="subtitle">SHOP NOW</span>
  </div>
</div>
)

export default MenuItem;