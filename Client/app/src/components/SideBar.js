import React from 'react';
import { useDispatch } from 'react-redux';
import {clickedCount, clickedTime} from '../actions/index';

const SideBar = ()=>{ 
    const dispatch =useDispatch(); 
    return(
        <div>
            <button onClick={() => dispatch(clickedCount(),clickedTime())}>Click Here</button>
        </div>
    );
}

export default SideBar;
