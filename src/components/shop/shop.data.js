import image1 from '../../assets/img/hats.jpg';
import image2 from "../../assets/img/cosmetics.jpg";
import image3 from "../../assets/img/mens.jpg";
import image4 from "../../assets/img/women.jpg";
import image5 from "../../assets/img/kids.jpg";

const SHOPDATA = [
    {
        id:1,
        title: 'Hats',
        routeName: 'hats',
        items:[
            {
                id:1,
                name: 'Brown Brim',
                imageUrl: image1,
                price: 25,
                
            },
            {
                id:2,
                name: 'Brown Jack',
                imageUrl: image4,
                price: 25,
                
            }
        ]
    },
    {
        id:2,
        title: 'jackets',
        routeName: 'jackets',
        items:[
            {
                id:1,
                name: 'Brown Brim',
                imageUrl: image2,
                price: 25,
                
            },
            {
                id:2,
                name: 'Yellow Brim',
                imageUrl: image5,
                price: 25,
                
            },
            {
                id:3,
                name: 'Yellow Brim',
                imageUrl: image1,
                price: 25,
                
            },
            {
                id:4,
                name: 'Yellow Brim',
                imageUrl: image3,
                price: 25,
                
            },
            {
                id:5,
                name: 'Yellow Brim',
                imageUrl: image5,
                price: 25,
                
            }
        ]
    },
    {
        id:3,
        title: 'Mens',
        routeName: 'mens',
        items:[
            {
                id:1,
                name: 'Brown Brim',
                imageUrl: image3,
                price: 25,
                
            }
        ]
    }
]

export default SHOPDATA