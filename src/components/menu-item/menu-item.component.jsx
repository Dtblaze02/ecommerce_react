import React from "react";
import './menu-item.styles.scss';
import {useNavigate} from 'react-router-dom';

const MenuItem = ({title, image, size, history, linkUrl, match}) => {
  const navigate = useNavigate();
  return(
    <div  className = {`${size} menu-item`} onClick={()=>navigate(linkUrl)}>
      <div
       className='background-image' 
       style={{backgroundImage:`url(${image})`}}
      />
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='sub-title'>SHOP NOW</span>
        </div>
      </div>
  )
}

export default MenuItem;