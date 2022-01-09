import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import image1 from '../../assets/img/hats.jpg';
import image2 from "../../assets/img/cosmetics.jpg";
import image3 from "../../assets/img/mens.jpg";
import image4 from "../../assets/img/women.jpg";
import image5 from "../../assets/img/kids.jpg";

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
           sections:[
                {
                    title: "hats",
                    image: image1,
                    id: 1,
                    linkUrl: 'hats',
                 },
                 {
                    title: "cosmetics",
                    image: image2,
                    id: 2,
                    linkUrl: '',
                 },
                 {
                    title: "men's",
                    image: image3,
                    id: 3,
                    linkUrl: '',
                 },
                 {
                    title: "women's",
                    image: image4,
                    size: 'large',
                    id: 4,
                    linkUrl: '',
                 },
                 {
                    title: "kid's",
                    image: image5,
                    size: 'large',
                    id: 5,
                    linkUrl: '',
                 },
           ]
        }
    }

    render(){
        return(
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({id, ...otherprops}) => (
                        <MenuItem key={id} {...otherprops}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;