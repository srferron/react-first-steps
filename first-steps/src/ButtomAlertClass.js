import React, {Component} from 'react';

class ButtomAlertClass extends Component{

    message = 'Boom';

    //Asi falla. no reconoce this
    handleClick (){
        alert(this.message);
    }

    //Asi funcionaria, en un arrow function
    handleClick2 = (ev) =>{
        alert(this.message);
    }

    render() {
        return <button onClick={this.handleClick}>Show message {this.message}</button>
    }
}


export default ButtomAlertClass;
