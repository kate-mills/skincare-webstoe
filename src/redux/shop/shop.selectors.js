import memoize from 'lodash.memoize';
import { createSelector } from 'reselect'

// How much shop data do I need

const selectShop = state => state.shop

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.collections
)
export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopItems],
      collections => collections[collectionUrlParam]
  )
)
