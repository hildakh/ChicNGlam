import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// By wrapping this function is memoize, we're saying that whenever this function gets called 
// and receives collectionUrlParam, I want to memoize the return of this function 
// (in this case we return a selector).If this function gets called again with the same 
// collectionUrlParam, don't rerun this function because we'll return the same value as last time, 
// which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize((collectionUrlParam) =>
    createSelector(
        [selectCollections],
        (collections) =>  collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
);
