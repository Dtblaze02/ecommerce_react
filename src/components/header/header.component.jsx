import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser, hidden }) => (

<nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <div class="container">
    <Link className='navbar-brand' to='/'>
      ShopnGo
    </Link>    
    <CartIcon />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className='nav-link active' to='/shop'>
            SHOP
          </Link>
        </li>
        <li class="nav-item">
          <Link className='nav-link' to='/shop'>
            CONTACT
          </Link>
        </li>
        <li class="nav-item">
          {currentUser ? (
            <div className='nav-link' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            ) : (
          <Link className='nav-link' to='/signin'>
            SIGN IN
          </Link>
           )}
        </li>
      </ul>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
</nav>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
