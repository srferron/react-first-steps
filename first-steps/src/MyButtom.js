import React from 'react';

//React Component child
const MyButtom = (props) => {

    const styleObject = {};

    if(props.isGrand){
        styleObject.background='green';
        styleObject.fontSize='150%'
    }

    return <buttom style={styleObject}>{props.legend}</buttom>
    
};

export default MyButtom;