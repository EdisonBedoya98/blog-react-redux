import React from "react";
import errorImg from '../../img/error-500.png'

const Fatal = (props) => (
    <div className='center'>
        <h3 >{props.mensaje}</h3>
        <img src={errorImg} alt="errorImg" className='height-50vh'/>;
    </div>
);

export default Fatal;