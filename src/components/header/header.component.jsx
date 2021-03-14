import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {
  HeaderWrapper, StyledLinkLogoWrapper,
  OptionsWrapper, StyledLinkWrapper
} from './header.styles.jsx';

import { createStructuredSelector } from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderWrapper>
      <StyledLinkLogoWrapper to='/'>
          <Logo className='logo' />
      </StyledLinkLogoWrapper>
      <OptionsWrapper>
        <StyledLinkWrapper to='/shop'>SHOP</StyledLinkWrapper>
        <StyledLinkWrapper to='/shop'>CONTACT</StyledLinkWrapper>
        {currentUser ? (
          <StyledLinkWrapper as='div' onClick={() => auth.signOut()}>SIGN OUT</StyledLinkWrapper>
        ) : (
          <StyledLinkWrapper to='/signin'>SIGN IN</StyledLinkWrapper>
        )}
        <CartIcon/>
      </OptionsWrapper>
      { hidden ? null : <CartDropdown/> }
    </HeaderWrapper>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})

export default connect(mapStateToProps)(Header);
