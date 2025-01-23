import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionPage from "../collection/CollectionPage";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionsOverview />} />
        <Route path=':collectionId' element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
