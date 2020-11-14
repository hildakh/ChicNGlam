import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { selectCollection } from "../../redux/shop/shop.selectors";

import "./CollectionPage.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection, "collection");
  return (
    <div className="collection-page">
      <h2>Collection PAGE</h2>
      {/* <CollectionItem /> */}
    </div>
  );
};

const mapStatetoProps = (state, ownProps) => ({
  // unlike other selectors, this one needs a part of the state depending on the Url param, hence the need to pass the state as a param
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStatetoProps)(CollectionPage);
