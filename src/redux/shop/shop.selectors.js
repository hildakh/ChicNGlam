import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForOverview = createSelector(
  // we need a collections array for the collections preview page
  [selectCollections],
  // converting collections object into an array and accessing each collection object inside that array
  collections => Object.keys(collections).map(key => collections[key]  )
)
// By wrapping this function is memoize, we're saying that whenever this function gets called 
// and receives collectionUrlParam, I want to memoize the return of this function 
// (in this case we return a selector).If this function gets called again with the same 
// collectionUrlParam, don't rerun this function because we'll return the same value as last time, 
// which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        (collections) =>  collections[collectionUrlParam]
    )
);
