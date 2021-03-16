import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'

import CollectionPage from '../collection/collection.component.jsx'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import {updateCollections} from '../../redux/shop/shop.actions'


class ShopPage extends React.Component{
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollectionsDispatched} = this.props
    const collectionRef = firestore.collection('collections')
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
       updateCollectionsDispatched(collectionsMap)
    })
  }
  render () {
    const {match} = this.props
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ CollectionsOverview } />
        <Route path={`${match.path}/:collectionId`} component={ CollectionPage } />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  updateCollectionsDispatched: collectionsMap =>
    dispatch(updateCollections(collectionsMap)) 
})

export default connect(null, mapDispatchToProps)(ShopPage);
