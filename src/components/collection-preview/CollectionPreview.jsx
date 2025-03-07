import React from "react";
import { Link } from "react-router-dom";

import CollectionItem from "../collection-item/CollectionItem";
import "./CollectionPreview.styles.scss";

const CollectionPreview = ({
  title,
  items,
  routeName,
 }) => {
  return (
    <div className="collection-preview">
      <div className="collection-preview__header">
        <h1 className="collection-preview__header-title">{title.toUpperCase()}</h1>
        <Link
          className="collection-preview__header-link"
          to={routeName}
        >See more</Link>
      </div>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
