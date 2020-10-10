import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import controllers from '../../server/controllers';
import styled from 'styled-components';

//Import Sub-Component;
import CarouselItem from './components/CarouselItem';

//Styled Components;
const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.div`
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 50%;
    display: inline-block;
    opacity: 0;
    transition: 0.3s;
    border-style: none;
    filter: invert(100%);
    outline-style: none;
    &:hover {
        filter: invert(80%);
    }
    ${Container}:hover & {
        opacity: 1;
    }
`;

const LeftButton = styled(Button)`
    background: white url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNjcgMGwyLjgzIDIuODI5LTkuMzM5IDkuMTc1IDkuMzM5IDkuMTY3LTIuODMgMi44MjktMTIuMTctMTEuOTk2eiIvPjwvc3ZnPg==);
    background-repeat: no-repeat;
    background-position: center;
`;

const RightButton = styled(Button)`
    background: white url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNSAzbDMuMDU3LTMgMTEuOTQzIDEyLTExLjk0MyAxMi0zLjA1Ny0zIDktOXoiLz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: center;
`;

const Title = styled.h3`
    display: inline-block;
`;

const App = () => {
    
    const [displayed, setDisplayed] = useState([]);
    const [items, setItems] = useState([]);
    const first = 0;
    const last = 0;

    const getItems = () => {
        controllers.getFurnitures(Number(window.location.pathname.split('/').slice(-1)))
          .then(({data}) => {
              setItems(data);
          })
    }


    useEffect(() => {
        getItems();
        setDisplayed(items.slice(0, 4));
    });
 
    return (
        <div id="BottomCarousel">
            <Title>Similar Products</Title>
            <Container>
                <LeftButton></LeftButton>
                {displayed.map((item) => {
                    return (<CarouselItem key={item['_id']} item={item}/>);
                })}
                <RightButton></RightButton>
            </Container>
        </div>
    );  
}

ReactDOM.render(<App/>, document.getElementById('BottomCarousel'));