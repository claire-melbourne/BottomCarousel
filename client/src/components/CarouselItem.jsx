import React from 'react';
import styled from 'styled-components';
import Rating from 'react-star-ratings';

const Item = styled.div`
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
`;

const Image = styled.img`
    width: 220px;
    height: auto;
`;

const Title = styled.div`
    font-family: Sans-serif;
    font-weight: bold;
    font-size: 15px;
`;

const Category = styled.div`
    font-family: Sans-serif;
    opacity: 0.75;
    font-size: smaller;
`;

const Price = styled.div`
    font-family: Sans-serif;
    font-weight: bold;
    &:before {
        content: '$';
        font-size: 0.6em;
        vertical-align: top;
    }
    &:after {
        content: '.96';
        font-size: 0.6em;
        vertical-align: top;
    }
`;

const CarouselItem = (props) => {
    return (
        <Item>
            <Image src={props.item.imageUrl}/>
            <Title> {props.item.name} </Title>
            <Category> {props.item.category} </Category>
            <Price>{props.item.price}</Price>
            <Rating
              rating={props.item.rating}
              starRatedColor="black"
              numberOfStars={5}
              starDimension="15px"
              starSpacing="2px"
              svgIconViewBox="0 0 24 24"
              svgIconPath="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            />
        </Item>
    );
};

export default CarouselItem;