import React from "react";

import CollectionItem from "../collection-item/CollectionItem";

import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            // passing the whole item as props to have acces to it in the collection item
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
