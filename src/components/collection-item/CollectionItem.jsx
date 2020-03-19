import React from "react";
import "./CollectionItem.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="name">{price}</span>
      </div>
    </div>
  </div>
);

export default CollectionItem;