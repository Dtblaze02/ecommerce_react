import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import 'bootstrap/dist/css/bootstrap.css'

const CartIcon = ({ toggleCartHidden, itemCount }) => (

  <li className ="checkout" onClick={toggleCartHidden}>
        <Link to='#'>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span id="checkout_items" className="checkout_items">{itemCount}</span>
        </Link>
  </li>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
