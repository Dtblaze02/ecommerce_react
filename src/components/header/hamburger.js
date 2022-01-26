import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

const Hamburger = ()=>(
<>
    <div className="fs_menu_overlay"></div>
        <div className="hamburger_menu">
          <div className="hamburger_close"><i class="fa fa-times" aria-hidden="true"></i></div>
          <div className="hamburger_menu_content ">
            <ul className="menu_top_nav">              
              <li className="menu_item">
                <Link to='/shop'>
                  SHOP
                </Link>
              </li>
              <li className="menu_item">
                <Link to='/shop'>
                  BLOG
                </Link>
              </li>
              <li className="menu_item">
                <Link to='/shop'>
                  PROMOTION
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </>
)

export default Hamburger;