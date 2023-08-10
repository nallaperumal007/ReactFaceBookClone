import { Avatar } from '@material-ui/core';
import React from 'react';
import './Story.css';

function Story({image,profileSrc,title}) {
  return (
    <div className="story" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`}}>
        <Avatar src={profileSrc}/>
        <h4>{title}</h4>
        
    </div>
   
   );
  
}

export default Story;