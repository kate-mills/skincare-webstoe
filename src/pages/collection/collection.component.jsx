import React from 'react';
import {connect} from 'react-redux'

import {selectCollection} from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component.jsx'


const CollectionPage = ({match, collection}) => {
  const {collectionId} = match.params

  return (
    <div className='collection-page'>
      <h2 className="title">{collectionId}</h2>
      <div className="items">
        {
          collection.items.map(item => {
            return (
              <CollectionItem key={item.id} item={item}/>
            )
          })
        }
      </div>
    </div>
  );
}

const MapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionId)(state),
})

export default connect(MapStateToProps)(CollectionPage);
