import React from 'react';
import { useSelector } from 'react-redux';
const Footer=()=>{
    const myState = useSelector((state)=>state.changeCount)
    return(        
        <div>
            <div>You clicked {myState} times</div>
        </div>
    );
}

export default Footer;