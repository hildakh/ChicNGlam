import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CollectionsOverview.styles.scss";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { selectCollectionsForOverview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForOverview,
});

export default connect(mapStateToProps)(CollectionsOverview);
