import React, { useState } from 'react';
const Header = () => { 
    var time = new Date().toLocaleTimeString();
    const [ctime,setCtime]= useState(time);
    const updateTime=()=>{
        time = new Date().toLocaleTimeString('en-US',{hour12:false});
        setCtime(time);
    };
    setInterval(updateTime,1000);
    return(
        <div>Current time is: {ctime}</div>
    );
}

export default Header;