import React, {Component} from 'react';

class Contador extends Component{
    constructor(props) {
        super(props);
        this.state = {contador:0};
        setInterval(() => {this.setState({contador:this.state.contador+1})},
        1000);
    }

    render() {
        return (<div>
            <h1>Counter</h1>
            <span>{this.state.contador}</span>
        </div>)
    }
}

export default Contador;
