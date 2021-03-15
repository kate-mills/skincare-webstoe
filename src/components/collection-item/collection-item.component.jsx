import React from 'react';
import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss';

import {
  ColItemWrapper,
  ColItemBackgroundImage,
  ColItemFooterWrapper,
  ColItemNameWrapper,
  ColItemPriceWrapper,
  ColItemButton,
  AlertMessage,
} from './collectionitem.styles'

const ColItem = ({item, addItem}) =>{ 
  const {name, price, imageUrl} = item;
  const [msg, setMsg] = React.useState('')

  const displaySuccess= (msg) => {
    setMsg(msg)
  }
  React.useEffect(() => {
    if(msg.length > 0){
      const timer = () => setTimeout(() => setMsg(''), 800);
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [msg]);

  return (
  <ColItemWrapper>
    <ColItemBackgroundImage
      className="img"
      imageUrl={`url(${imageUrl})`}
    />
    <ColItemFooterWrapper>
      <ColItemNameWrapper>{name}</ColItemNameWrapper>
      <ColItemPriceWrapper>${price}</ColItemPriceWrapper>
    </ColItemFooterWrapper>
    <ColItemButton
      className="btn"
      inverted
      onClick={
        () => {
          addItem(item)
          displaySuccess('Added 1')
        }
      }>ADD TO CART
    </ColItemButton>
    <AlertMessage className={msg.length ? 'success': ''}>
      {msg || ''}
    </AlertMessage>
  </ColItemWrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ColItem)
