import React from 'react';
import ReactDOM from 'react-dom';
import controllers from '../../server/controllers';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            displayed: [],
            //index of first element of displayed items
            first: 0,
            //index of last element of displayed items
            last: 0
        }
    }

    componentDidMount() {
        controllers.getFurnitures()
          .then(({ data }) => {
              this.setState({
                  data: data,
                  //the carousel displays 4 items at a time
                  displayed: data.slice(0, 4),
                  //the last index is set to three, while the first index remains at 0
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
            <h1>Testing123</h1>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));