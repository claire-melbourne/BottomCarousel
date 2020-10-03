import React from 'react';
import ReactDOM from 'react-dom';
import controllers from '../../server/controllers';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';

//Import Sub-Component;
import CarouselItem from './components/CarouselItem';

//Styled Components;
const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0px;
    height: 100vh;
`;

const Title = styled.h3`
    display: inline-block;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            displayed: []
        };
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 300, itemsToShow: 2 },
            { width: 600, itemsToShow: 3 },
            { width: 900, itemsToShow: 4 }
        ];
    }

    componentDidMount() {
        controllers.getFurnitures()
          .then(({ data }) => {
              this.setState({
                  data: data,
                  displayed: data.slice(0, 8)
              })
          })
    }

    render() {
        return (
            <div id="BottomCarousel">
                <Title>Similar Products</Title>
                <Container>
                    <Carousel 
                    itemPadding={[10, 19]}
                    breakPoints={this.breakPoints}
                    itemsToShow={4}
                    >
                    {this.state.displayed.map((item) => {
                        return (<CarouselItem key={item['_id']} item={item}/>);
                    })}
                    </Carousel>
                </Container>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));