import React from 'react';

const Carousel_Item = (props) => {
    return (
        <div className="Carousel_Item">
            <img className="Carousel_Item_Image" src={props.item.imageUrl}/>
            <div className="Carousel_Item_Name">
                {props.item.name}
            </div>
            <div className="Carousel_Item_Category">
                {props.item.category}
            </div>
            <div className="Carousel_Item_Rating">
                {props.item.rating}
            </div>
            <div className="Carousel_Item_Price">
                {props.item.price}
            </div>
        </div>
    );
};

export default Carousel_Item;