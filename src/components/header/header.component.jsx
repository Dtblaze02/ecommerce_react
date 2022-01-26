import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import 'bootstrap/dist/css/bootstrap.css'


const Header = ({ currentUser, hidden }) => (

<header className="header trans_300">        
    <div className="main_nav_container">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-right">
            <div className="logo_container">
            <Link to='/'>
              Shop<span>N</span>Go
            </Link>
            </div>
            <nav className="navbar">
              <ul className="navbar_menu">
                <li>  
                  <Link to='/shop'>
                    SHOP
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    PROMOTIONS
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link to='/shop'>
                    CONTACT
                  </Link>
                </li>                      
              </ul>
              <ul className="navbar_user">
                <li>
                  <Link to='#'>
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  {currentUser ? (
                    <span className='nav-link' onClick={() => auth.signOut()}>
                      sign out
                    </span>
                    ) : (
                  <Link to='/signin'>
                    <i className="fa fa-user" aria-hidden="true"></i>                          
                  </Link>
                    )}
                </li>
                  <CartIcon/>
                  {hidden ? null : <CartDropdown />}
              </ul>
              <div className="hamburger_container">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
</header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
