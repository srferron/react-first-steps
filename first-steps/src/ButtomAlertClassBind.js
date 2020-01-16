import React, {Component} from 'react';

class ButtomAlertClass extends Component{

    message = 'Boom Bind';

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //Asi si funcionaria en una funcion normal
    handleClick (){
        alert(this.message);
    }

    render() {
        return <button onClick={this.handleClick}>Show message {this.message}</button>
    }
}


export default ButtomAlertClass;
