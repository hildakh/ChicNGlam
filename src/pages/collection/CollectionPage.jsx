import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./CollectionPage.styles.scss";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
