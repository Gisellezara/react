import React from 'react';

const Basicinfo = (props)=>{
    return(
    <>
    <p>{props.name}</p>
    <p>{props.dob}</p>
    <p>{props.PhoneNumber}</p>
    </>
    ) 
}


export default Basicinfo;