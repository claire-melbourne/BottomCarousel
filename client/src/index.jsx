import React from 'react';
import ReactDOM from 'react-dom';
import controllers from '../../server/controllers';
import styled from 'styled-components';

//Import Sub-Component;
import CarouselItem from './components/CarouselItem';

//Styled Components;
const Container = styled.div`
    display: inline-flex;
    justify-content: center;
    padding: 5px;
`;

const LeftButton = styled.button`
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 50%;
    display: inline-block;
    opacity: 0;
    transition: 0.3s;
    border-style: none;
    background: white url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYuNjcgMGwyLjgzIDIuODI5LTkuMzM5IDkuMTc1IDkuMzM5IDkuMTY3LTIuODMgMi44MjktMTIuMTctMTEuOTk2eiIvPjwvc3ZnPg==);
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(100%);
    outline-style: none;
    &:hover {
        filter: invert(90%);
    }
    ${Container}:hover & {
        opacity: 1;
    }
`;

const RightButton = styled.button`
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 50%;
    display: inline-block;
    opacity: 0;
    transition: 0.3s;
    border-style: none;
    background: white url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNSAzbDMuMDU3LTMgMTEuOTQzIDEyLTExLjk0MyAxMi0zLjA1Ny0zIDktOXoiLz48L3N2Zz4=);
    background-repeat: no-repeat;
    background-position: center;
    filter: invert(100%);
    outline-style: none;
    &:hover {
        filter: invert(90%);
    }
    ${Container}:hover & {
        opacity: 1;
    }
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            displayed: [],
            first: 0,
            last: 0
        };
        this.handleRightClick = this.handleRightClick.bind(this);
        this.handleLeftClick = this.handleLeftClick.bind(this);
    }

    componentDidMount() {
        controllers.getFurnitures()
          .then(({ data }) => {
              this.setState({
                  data: data,
                  displayed: data.slice(0, 4),
                  last: 3
              })
          })
    }

    /*The data structure of a carousel works like a queue. To display the next
    image on the right, 'shift' the first element on the left, and 'push' the 
    new element to the right. To display the next element on the left, 'unshift' the 
    first element on the right, and 'pop' the new element on the right. */

    handleRightClick() {
        let temp = this.state.displayed;
        let tempLastIndex = this.state.last;
        let tempFirstIndex = this.state.first;
        temp.shift();
        temp.push(this.state.data[this.state.last + 1]);
        this.setState({
            displayed: temp,
            first: tempFirstIndex + 1,
            last: tempLastIndex + 1
        })
    }

    handleLeftClick() {
        let temp = this.state.displayed;
        let tempLastIndex = this.state.last;
        let tempFirstIndex = this.state.first;
        temp.pop();
        temp.unshift(this.state.data[this.state.first - 1]);
        this.setState({
            displayed: temp,
            first: tempFirstIndex - 1,
            last: tempLastIndex - 1
        })
    }

    render() {
        return (
            <div className="BottomCarousel">
                <h3 className="Module_Header">Similar Products</h3>
                <Container>
                    <LeftButton 
                    onClick={() => this.handleLeftClick()}
                    disabled={this.state.first === 0}>
                    </LeftButton>
                    {this.state.displayed.map((item) => {
                        return (<CarouselItem key={item['_id']} item={item}/>);
                    })}
                    <RightButton
                    onClick={() => this.handleRightClick()}
                    disabled={this.state.last === this.state.data.length - 1}>
                    </RightButton>
                </Container>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));