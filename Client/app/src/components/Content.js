import React from 'react';
import {useSelector} from 'react-redux';

const Content = ()=> {     
    const myState = useSelector((state)=>state.changeTime);    
    return(
        <div>{myState}</div>
    );
}

export default Content;